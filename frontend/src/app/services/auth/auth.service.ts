import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly http = inject(HttpClient);


  /**
 * Vérifie si l'utilisateur est connecté
 **/
  login(email: string, password: string): Observable<any> {
    const payload = { email, password };

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
}