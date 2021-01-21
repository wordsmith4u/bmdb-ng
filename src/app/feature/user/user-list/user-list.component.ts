import { SystemService } from './../../../service/system.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user.class';
import { UserService } from './../../../service/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  title = "User List";
  users: User[] = [];

  constructor(private userSvc: UserService,
              private sysSvc: SystemService) { }

  ngOnInit(): void {
    console.log('user list: loggedInUser?',this.sysSvc.loggedInUser);
    // populate the list of users
    this.userSvc.getAll().subscribe(
      resp => {
        this.users = resp as User[];
        console.log('Users',this.users);
      },
      err => {
        console.log(err);
      }
    );
  }
}
