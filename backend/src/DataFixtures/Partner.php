<?php

namespace App\DataFixtures;

use App\Entity\Partner;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class Partners extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        $partner = new Partner();
        $partner->setName('ALLIA');
        $partner->setDescription("ALLIA accompagne les entreprises dans leurs démarches en termes d’assurance. Cette société se spécialise dans la fourniture de solutions d'assurance sur mesure, adaptées aux besoins spécifiques de chaque entreprise, qu'elle soit une petite start-up ou une grande multinationale.
                Grâce à une équipe d'experts dévoués, ALLIA est en mesure d'offrir une gamme complète de services incluant l'évaluation des risques, la conception de plans d'assurance personnalisés et la gestion des sinistres. L'objectif principal de l'entreprise est de garantir la tranquillité d'esprit de ses clients en leur assurant une protection optimale contre les imprévus.
                Le président d’ALLIA est élu pour un mandat de trois ans par ses pairs, chefs d’entreprises et présidents de tous les bureaux ALLIA de France. Cette élection reflète la reconnaissance de ses compétences et de son leadership au sein du secteur. Le président joue un rôle crucial dans l'orientation stratégique de l'entreprise et dans la représentation des intérêts de ses membres à l'échelle nationale.
                ALLIA met un point d'honneur à rester à la pointe de l'innovation dans le domaine de l'assurance, en intégrant les dernières technologies et en adoptant des approches proactives pour répondre aux besoins changeants du marché. L'entreprise organise régulièrement des séminaires et des ateliers pour informer ses clients des nouvelles tendances et des meilleures pratiques en matière de gestion des risques.
                De plus, ALLIA s'engage activement dans des initiatives de responsabilité sociale, contribuant ainsi au développement durable et au bien-être des communautés locales. Cet engagement renforce la réputation de l'entreprise en tant que leader responsable et fiable dans le secteur de l'assurance.
                En conclusion, ALLIA se positionne comme un partenaire de confiance pour les entreprises, offrant une expertise inégalée et un service client exceptionnel, afin de les aider à naviguer sereinement dans un environnement en constante évolution.");
        $partner2= new Partner();
        $partner2->setName('Les mutualistes');
        $partner2->setDescription("LES + MUTUALISTES finance la solidarité nationale.
                    Nous appliquons le principe édifié par la Sécurité sociale française en 1945 : permettre à chacun de bénéficier d’une protection sociale.

                    Chez LES + MUTUALISTES, chacun cotise selon ses moyens et reçoit selon ses besoins.
                    LES + MUTUALISTES est ouvert à tous, sans considération d’âge ou d’état de santé.
                    Nous garantissons un accès aux soins et une retraite.
                    Chaque année, nous collectons et répartissons 300 milliards d’euros.
                    Notre mission est double :
                -	Sociale : nous garantissons la fiabilité des données sociales ;
                -	Économique : nous apportons une contribution aux activités économiques");
        $partner3 =new Partner();
        $partner3->setName('OCAR');
        $partner3->setDescription("OCAR est une compagnie d’assurance qui est présente sur tout le territoire.
                    Nous proposons est une solution clé en main et une mise en place entièrement gratuite allant d’un simple lien tracké à une intégration totale dans votre parcours de vente.
                    Bénéficiez d’un espace dédié pour suivre à tout moment le nombre de devis effectués, de contrats souscrits et votre rémunération en cours. Le reste, c’est pour nous. On s’occupe de toute la gestion du contrat : de la résiliation chez l’ancien assureur à la gestion des sinistres en cas de pépin.
                    Une rémunération qui s’adapte à vous. Recevez une commission fixe ou un pourcentage en fonction du nombre de devis effectués ou de contrats souscrits.");
                    $partner4 =new Partner();
                    $partner4->setName('Assurisk');
                    $partner4->setDescription("Être bien couvert, votre objectif et notre mission.
                                ASSURISK est le leader français de l’assurance en ligne.
                                Nous vous proposons l’offre et les options qui vous correspondent le mieux,
                                soit en ligne, soit avec l’un de nos conseillers au téléphone.
                                 Vous avez le choix de passer soit par notre appli ou soit par votre espace personnel sur le site.
                                Mais nous savons que dans ce moment délicat, il est rassurant de parler à quelqu’un :
                                un conseiller spécialisé dans la gestion des sinistres est là pour vous.
                                Il sera votre interlocuteur unique pour vous accompagner dans toutes vos démarches
                                et vous tenir au courant de l’avancée de votre dossier.
                                Vous bénéficiez aussi du large réseau de garages partenaires, d’expert, et de l’assistance
                                de notre Groupe. Une prise en charge 24h/24, 7 jours/7 qui s’appuie sur la performance
                                du 1er groupe mondial d’assurance.");

        $manager->persist($partner,$partner2,$partner3,$partner4);

        $manager->flush();
    }
}
