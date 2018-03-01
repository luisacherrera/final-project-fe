import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent implements OnInit {

  feedbackEnabled = false;
  error = null;
  processing = false;
  name: String;
  username: String;
  password: String;
  interests: Array<string> = [];

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  addInterest(interestInput) {
    const value = interestInput.value;
    interestInput.value = '';

    this.interests.push(value);
  }

  submitForm(form) {
    this.error = '';
    this.feedbackEnabled = true;
    if (form.valid) {
      this.processing = true;
      this.authService.signup({
        name: this.name,
        username: this.username,
        password: this.password,
        interests: this.interests
      })
        .then((result) => {
          this.router.navigate(['/users'])
        })
        .catch((err) => {
          this.error = err.error.error;
          this.processing = false;
          this.feedbackEnabled = false;
        });
    }
  }

}
