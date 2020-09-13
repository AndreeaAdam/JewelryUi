import {Component, OnInit} from '@angular/core';
import {User} from '../../model/user';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  public user: User;

  constructor() {
  }

  ngOnInit(): void {
  }

}
