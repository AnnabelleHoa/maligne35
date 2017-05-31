import { MenuInterface } from '../menu/menu.interface';

// On définit une collection HEADERMENU qui fait appel à la classe HeaderMenu définit plus haut
export const HEADERMENU : MenuInterface[] = [
  {name: 'Accueil', url: 'accueil'},
  {name: 'Mon Trajet', url: 'trajet'},
  {name: 'Grille Horaire', url: 'grille'},
];
