import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActorService } from 'src/app/service/actor.service';
import { Actor } from '../../../model/actor.class';
import { Location } from '@angular/common';
 
@Component({
  selector: 'app-actor-create',
  templateUrl: './actor-create.component.html',
  styleUrls: ['./actor-create.component.css']
})
export class ActorCreateComponent implements OnInit {
  title = "Actor Create";
  actor: Actor = new Actor();
  submitBtnTitle = "Create";
  

  constructor(private actorSvc: ActorService, private router: Router, private loc: Location) { }

  ngOnInit(): void {
  }
  save() {
    // save the actor to the database
    this.actorSvc.create(this.actor).subscribe(
      resp => {
        this.actor = resp as Actor;
        console.log('Actor created', this.actor);
        // forward to the actor-list component
        this.router.navigateByUrl("/actor-list");
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
