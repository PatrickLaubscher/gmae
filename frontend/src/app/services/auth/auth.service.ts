import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly http = inject(HttpClient);
  private readonly router = inject(Router);
  private inactivityTimeout = 3 * 60 * 1000;
  private lastActivityKey = 'last_activity';

  constructor() {
    this.initActivityTracking();
  }

  /**
 * Vérifie si l'utilisateur est connecté
 **/
  login(pseudo: string, password: string): Observable<any> {
    const payload = { pseudo, password };

    // Appel à l'API d'authentification
    return this.http.post('http://127.0.0.1:8000/api/login_check', payload).pipe(
      map((response: any) => {
        // Enregistre le token ds LocalStorage en cas de succès
        localStorage.setItem('token', response.token);
        return response;
      }),
      catchError((error) => {
        console.error('Erreur de connexion', error);
        throw error;
      })
    );
  }

  /**
   * Vérifie si l'utilisateur est connecté
   */
  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  private initActivityTracking() {
    // Ecoute si les touches sont utiliées
    ['mousedown', 'keydown', 'scroll', 'touchstart'].forEach(event => {
      window.addEventListener(event, () => this.resetInactivityTimer());
    });

    
    setInterval(() => {
      this.checkInactivity();
    }, 60000); 
  }

 
  private resetInactivityTimer() {
    localStorage.setItem(this.lastActivityKey, Date.now().toString());
  }

  
  private checkInactivity() {
    const token = localStorage.getItem('token');
    const lastActivity = localStorage.getItem(this.lastActivityKey);

    if (!token || !lastActivity) {
      this.logout();
      return;
    }

    const currentTime = Date.now();
    const lastActivityTime = parseInt(lastActivity, 10);

    if (currentTime - lastActivityTime > this.inactivityTimeout) {
      this.logout();
    }
  }

  
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem(this.lastActivityKey);
    this.router.navigate(['/login']);
  }
}