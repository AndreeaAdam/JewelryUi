import {Component, OnInit} from '@angular/core';
import {User} from '../../model/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public users: User[] = [
    {
      id: 1,
      username: 'andreea',
      password: '12345',
      firstname: 'Andreea',
      lastname: 'Adam',
      telephone: '0784192326',
      email: 'andreea.adam21@yahoo.com',
      isAdministrator: true
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
