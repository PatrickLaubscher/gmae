import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule, ReactiveFormsModule, NgIf,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  private readonly authService = inject(AuthService) // inject() = f° d'Angular pr injecter des dépendances
  private readonly routeur = inject(Router) // inject° du routeur pour redirection

  loginForm! : FormGroup;
  errMsg?: string | null = null;

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      pseudo: new FormControl('',[   //Valeur rentrée pr éviter de retaper à chaque fois (enlever en prod)
        Validators.required,
        Validators.minLength(3),
      ]),
      password: new FormControl('', [       //Valeur rentrée pr éviter de retaper à chaque fois (enlever en prod)
        Validators.required,
        Validators.minLength(8)
      ]),
    })
  }

  onSubmitLogin(): void {
    if (this.loginForm.invalid) {
      console.warn('Le formulaire est invalide.');
      return;
    }

    // Récupérer les valeurs du formulaire
    const { pseudo, password } = this.loginForm.value;

    try {
      // Appeler le service AuthService pour authentifier
      this.authService.login(pseudo, password).subscribe({
        next: () => {
          // Si l'authentification réussit, rediriger vers "home"
          this.routeur.navigate(['/home']);
        },
        error: (err) => {
          console.error('Erreur de login : ', err);
          // Affichez un message d'erreur à l'utilisateur
          this.errMsg = 'Email ou mot de passe incorrect.';
        }
      });
    } catch {
    // Si le formulaire n'est pas valide
    this.errMsg = 'Veuillez remplir tous les champs correctement.';
    }
  }

}
