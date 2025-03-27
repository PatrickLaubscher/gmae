export interface User {
  id?: number;
  email: string;
  hash_password: string;
  secret_question?: string;
  roles: Role[];
  nom: string;
  prenom: string;
}

export interface Role {
  id?: number;
  name: string;
  users?: User[];
}

export interface Service {
  id?: number;
  name: string;
  partners?: Partner[];
}

export interface Partner {
  id?: number;
  name: string;
  description: string;
  logo: string;
  categories?: Service[];
}
