import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GoogleLoginProvider, SocialAuthService } from 'angularx-social-login';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(
    private router: Router,
    private authService: SocialAuthService
  ) {
  }

  ngOnInit(): void {
  }

  signInHandler(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then((data) => {
        console.log(data.email,data.firstName);
        const needdata=[{"email":data.email,"firstName":data.firstName,"photoUrl":data.photoUrl}];
        // console.log()
      localStorage.setItem('google_auth', JSON.stringify([...needdata]));
      this.router.navigateByUrl('/details').then();
    });
  }
}