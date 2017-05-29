import { MenuInterface } from '../menu/menu.interface';

// On définit une collection HEADERMENU qui fait appel à la classe HeaderMenu définit plus haut
export const HEADERMENU : MenuInterface[] = [
  {name: 'Accueil', url: '/'},
  {name: 'Grille Horaire', url: 'grille-horaires.html'},
  {name: 'Mon Arrêt', url: 'mon-arret.html'}
];
