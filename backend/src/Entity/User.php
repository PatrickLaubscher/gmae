<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use App\Repository\UserRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Symfony\Component\Security\Core\User\PasswordAuthenticatedUserInterface;
use Symfony\Component\Security\Core\User\UserInterface;
use Doctrine\ORM\Mapping as ORM;


#[ORM\Entity(repositoryClass: UserRepository::class)]
#[ORM\Table(name: '`user`')]
#[ApiResource]
class User implements UserInterface, PasswordAuthenticatedUserInterface
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $email = null;

    #[ORM\Column(length: 255)]
    private ?string $hash_password = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $secret_question = null;

    /**
     * @var Collection<int, Roles>
     */
    #[ORM\ManyToMany(targetEntity: Roles::class, inversedBy: 'users')]
    private Collection $roles;

    #[ORM\Column(length: 255)]
    private ?string $nom = null;

    #[ORM\Column(length: 255)]
    private ?string $prenom = null;

    public function __construct()
    {
        $this->roles = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function setId(int $id): static
    {
        $this->id = $id;

        return $this;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): static
    {
        $this->email = $email;

        return $this;
    }

    public function getHashPassword(): ?string
    {
        return $this->hash_password;
    }

    public function setHashPassword(string $hash_password): static
    {
        $this->hash_password = $hash_password;

        return $this;
    }

    public function getSecretQuestion(): ?string
    {
        return $this->secret_question;
    }

    public function setSecretQuestion(?string $secret_question): static
    {
        $this->secret_question = $secret_question;

        return $this;
    }

    /**
     * @return Collection<int, Roles>
     */
    public function getRoles(): array
    {
        return array_map(function($role) {
            return $role->getName(); 
        }, $this->roles->toArray());
    }

    public function addRole(Roles $role): static
    {
        if (!$this->roles->contains($role)) {
            $this->roles->add($role);
        }

        return $this;
    }

    public function removeRole(Roles $role): static
    {
        $this->roles->removeElement($role);

        return $this;
    }

    public function getNom(): ?string
    {
        return $this->nom;
    }

    public function setNom(string $nom): static
    {
        $this->nom = $nom;

        return $this;
    }

    public function getPrenom(): ?string
    {
        return $this->prenom;
    }

    public function setPrenom(string $prenom): static
    {
        $this->prenom = $prenom;

        return $this;
    }

    public function getPassword(): string
    {
        return $this->hash_password;
    }

    public function eraseCredentials(): void {}

    public function getUserIdentifier(): string
    {
        return $this->email;
    }
}
