import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  protected readonly title = signal('cuadernos-de-una-arqueologa');

  // para controlar el menú mobile con binding (si prefieres no usar JS directo)
  menuOpen = signal(false);

  toggleMenu() {
    this.menuOpen.update(v => !v);
  }
}
