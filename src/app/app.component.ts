import {Component} from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public authService: AuthenticationService) {
  }

  public items: MenuItem[];

  ngOnInit() {
    this.items = [
      {label: 'Home', icon: ' pi pi-home', routerLink:['']},
      {label: 'Products', routerLink: ['products']},
      {label: 'Categories', routerLink: ['categories']},
      {label: 'Materials', routerLink: ['materials']},
      {label: 'Gemstones', routerLink: ['gemstones']},
      {label: 'Users', icon: 'pi pi-users', routerLink: ['users']},
      {label: 'My Bag', icon: 'pi pi-shopping-cart', routerLink: ['carts']},
      {label: 'Log Out', icon: 'pi pi-sign-out', routerLink: ['logout']}
    ];

  };

}
