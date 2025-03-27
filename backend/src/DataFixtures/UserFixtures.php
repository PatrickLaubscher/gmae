<?php

namespace App\DataFixtures;

use App\Entity\User;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class UserFixtures extends Fixture
{   
    private UserPasswordHasherInterface $passwordHasher;

    public function __construct(UserPasswordHasherInterface $passwordHasher)
    {
        $this->passwordHasher = $passwordHasher;
    }

    public function load(ObjectManager $manager): void
    {   
        $user = new User();
        $user->setNom('Doe');
        $user->setPrenom('John');
        $user->setEmail('test@test.com');

        $hashPassword = $this->passwordHasher->hashPassword(
            $user,
            'test123'
        );
        $user->setHashPassword($hashPassword);

        $manager->persist($user);

        $manager->flush();
    }
}