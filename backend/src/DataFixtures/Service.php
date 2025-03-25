<?php

namespace App\DataFixtures;

use App\Entity\Service;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class Category extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        $service = new Service();
        $service->setName('Mutuelle');
        $manager->persist($service);

        $service2 = new Service();
        $service2->setName('Assurance');
        $manager->persist($service2);
        $manager->flush();
    }
}
