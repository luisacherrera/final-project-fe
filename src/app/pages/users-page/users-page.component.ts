import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.css']
})
export class UsersPageComponent implements OnInit {
  users: Array<any>;

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.usersService.getUsers()
      .then((users) => {
        this.users = users;
      })
  }

}
