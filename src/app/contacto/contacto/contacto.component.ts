import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ContactService } from './contacto.component.service';
import type { ContactMessage } from './contacto.component.service';

@Component({
  selector: 'app-contacto',
  standalone: true,
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss'],
  imports: [CommonModule, ReactiveFormsModule],
})
export class ContactoComponent {
  contactForm: FormGroup;
  loading = false;
  successMessage = '';
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private contactService: ContactService
  ) {
    this.contactForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.maxLength(100)]],
      email: ['', [Validators.required, Validators.email, Validators.maxLength(150)]],
      asunto: ['', [Validators.maxLength(150)]],
      mensaje: ['', [Validators.required, Validators.maxLength(2000)]],
    });
  }

  onSubmit(): void {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.loading = true;
    this.successMessage = '';
    this.errorMessage = '';

    const payload: ContactMessage = this.contactForm.value;

    this.contactService.sendMessage(payload).subscribe({
      next: () => {
        this.loading = false;
        this.successMessage = 'Mensaje enviado correctamente. Muchas gracias por contactar.';
        this.contactForm.reset();
      },
      error: (err) => {
        console.error(err);
        this.loading = false;
        this.errorMessage = 'Ha ocurrido un error al enviar el mensaje. Inténtalo de nuevo más tarde.';
      }
    });
  }
}
