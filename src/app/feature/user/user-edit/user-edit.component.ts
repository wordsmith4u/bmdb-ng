import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import { Location } from '@angular/common';
import { User } from 'src/app/model/user.class';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  user: User;
  title = "User Edit";
  userId: number = 0;
  submitBtnTitle = "Save";

  constructor(private userSvc: UserService, private loc: Location, private router: Router) { }

  ngOnInit(): void {
  }
  save() {
    // save the credit to the DB
    this.userSvc.create(this.user).subscribe(
      resp => {
        this.user = resp as User;
        console.log('User created',this.user);
        // forward to the user list component
        this.router.navigateByUrl("/user-list");
      },
      err => {
        console.log(err);
      }

    );
  }
  backClicked() {
    this.loc.back();
  }

}