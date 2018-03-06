import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { AuthService } from '../../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-profile-page',
  templateUrl: './user-profile-page.component.html',
  styleUrls: ['./user-profile-page.component.css']
})
export class UserProfilePageComponent implements OnInit {

  user: any;
  userId: any;
  currentUser: any;
  displayInfo = true;
  displayMessages = false;

  constructor(
    private usersService: UsersService,
    private route: ActivatedRoute,
    private authService: AuthService,
  ) { }

  ngOnInit() {
    this.route.params
    .subscribe((params) => {
      this.currentUser = this.authService.getUser();
      this.userId = String(params.id);
      this.usersService.getSingleUser(this.userId).then(user => {
        this.user = user;
      })
    })
  }

  showInfo() {
    this.displayInfo = true;
    this.displayMessages = false;
  }

  showMessages() {
    this.displayMessages = true;
    this.displayInfo = false;
  }

}
