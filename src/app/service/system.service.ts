import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user.class';

@Injectable({
  providedIn: 'root'
})
export class SystemService {
  loggedInUser: User = null;

  constructor(private router: Router) { }

  //isAdmin(): boolean {
    //return (this.loggedInUser == null) ? false : this.loggedInUser.admin;
  //}

  checkLogin(): void{
    if (this.loggedInUser == null) {
      console.log("User is not logged in...redirecting to login.");
      this.router.navigateByUrl("/user-login");
    }
  }
}
