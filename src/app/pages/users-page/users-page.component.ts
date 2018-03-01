import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { AuthService } from '../../services/auth.service';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.css']
})
export class UsersPageComponent implements OnInit {
  users: Array<any>;
  currentUser: any;

  constructor(private usersService: UsersService, private authService: AuthService) { }

  ngOnInit() {
    this.currentUser = this.authService.getUser();
    this.usersService.getUsers(this.currentUser._id)
      .then((users) => {
        this.users = users;
      })
  }

}
