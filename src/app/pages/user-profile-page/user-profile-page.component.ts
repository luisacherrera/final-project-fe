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

  user: Object;
  userId: any;
  currentUser: any;
  canEditDes = false;
  canEditInt = false;
  description: String;


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

  submitForm(form) {
    this.usersService.updateUserInfo({
      description: this.description
    }, this.user)
    .then((result)=>
      this.router.navigate(['/users']))
  }

}
