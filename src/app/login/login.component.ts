import { Component, OnInit } from '@angular/core';
import User from '../User';
import { Router } from '@angular/router'; 
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user : User =  {userName: "", password: "", _id: ""};
  public warning : any;
  public loading : boolean = false;

  constructor(private authService : AuthService, private router : Router) { }

  ngOnInit(): void {
    this.user = new User();
  }

  onSubmit(f : NgForm) : void {
    if(this.user.userName && this.user.password) {
      this.loading = true;

      this.authService.login(this.user)
      .subscribe(
        (success) => {
          this.warning = null;
          this.loading = false;
          localStorage.setItem("access_token", success.token);
          this.router.navigate(['/newReleases']);
        },
        (err) => {
          this.warning = err.error.message;
          this.loading = false;
        },
      )
    }
  }

}
