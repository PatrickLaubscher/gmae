import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  partenaires = [
    {
      "name": "OCAR",
      "picture": "/images/OCAR.png",
      "description": "OCAR, votre partenaire assurance de confiance sur tout le territoire. Nous proposons des solutions d'assurance auto, habitation et santé personnalisées, avec une mise en place gratuite et une intégration complète à votre parcours de vente. Découvrez nos offres avantageuses dès maintenant !"
    },
    {
      "name": "Allia",
      "picture": "/images/ALLIA.png",
      "description": "ASSURISK est le leader français de l’assurance en ligne.Nous vous proposons l’offre et les options qui vous correspondent le mieux,soit en ligne, soit avec l’un de nos conseillers au téléphone."
    },
    {
      "name": "Assurisk",
      "picture": "/images/ASSURISK.png",
      "description": "LES + MUTUALISTES finance la solidarité nationale.Nous appliquons le principe édifié par la Sécurité sociale française en 1945 :permettre à chacun de bénéficier d’une protection sociale."
    },
    {
      "name": "Les mutualistes",
      "picture": "/images/les-mutualistes.png",
      "description": "ALLIA accompagne les entreprises dans leurs démarches en termes d’assurance. Cettesociété se spécialise dans la fourniture de solutions d'assurance sur mesure, adaptées auxbesoins spécifiques de chaque entreprise, qu'elle soit une petite start-up ou une grande multinationale."
    },
  ]
}