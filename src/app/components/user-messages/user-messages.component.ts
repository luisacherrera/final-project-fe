import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { AuthService } from '../../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-messages',
  templateUrl: './user-messages.component.html',
  styleUrls: ['./user-messages.component.css']
})
export class UserMessagesComponent implements OnInit {

  @Output() onClick = new EventEmitter();

  user: any;
  userId: any;
  currentUser: any;

  constructor(
    private usersService: UsersService,
    private route: ActivatedRoute,
    private authService: AuthService
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

  hideMessages() {
    this.onClick.emit();
  }

}
