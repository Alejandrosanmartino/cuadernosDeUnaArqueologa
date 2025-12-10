import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ContactMessage {
  nombre: string;
  email: string;
  asunto: string;
  mensaje: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private apiUrl = 'http://localhost:8080/api/contact'; // URL del backend Spring

  constructor(private http: HttpClient) { }

  sendMessage(data: ContactMessage): Observable<void> {
    return this.http.post<void>(this.apiUrl, data);
  }
}
