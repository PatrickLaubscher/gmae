import { inject, Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  private readonly authService = inject(AuthService)
  private readonly router = inject(Router)

  canActivate(): boolean {
    if (!this.authService.isLoggedIn()) {
      // Si l'utilisateur n'est pas connecté, rediriger vers /login
      this.router.navigate(['/login']);
      return false; // Bloque l'accès à la route
    }

    // Si l'utilisateur est connecté, autoriser l'accès
    return true;
  }
}

