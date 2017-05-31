import { Component } from '@angular/core';

// Collections
import { HEADERMENU } from '../apiCollection/menu.collection';

@Component({
  moduleId: module.id,
  selector: 'app-menu',
  templateUrl: 'menu.component.html',
  styleUrls: ['menu.component.css']
})

export class MenuComponent {
  HeaderMenuItems = HEADERMENU;
}
