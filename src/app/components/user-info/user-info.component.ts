import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { AuthService } from '../../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  user: any;
  userId: any;
  currentUser: any;
  canEditDes = false;
  canEditInt = false;
  canSendMessage = false;
  description: String;
  interests: Array<string>;
  message: String;
  
  constructor(
    private usersService: UsersService,
    private route: ActivatedRoute,
    private authService: AuthService,
    private router: Router
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

  allowEditDes() {
    this.canEditDes = true;
  }

  allowEditInt() {
    this.canEditInt = true;
  }

  allowSendMessage() {
    this.canSendMessage = true;
  }

  submitForm(form) {
    const data = {
      description: this.description,
      interests: this.interests
    };

    this.usersService.updateUserInfo(this.user._id, data)
    .then((result)=>
      this.router.navigate(['/users']))
  }

  submitMessage(form) {

    const data = {
      message: this.message
    };

    this.usersService.sendMessage(this.user._id, data)
    .then((result)=>
      this.router.navigate(['/users']))
  }

}
