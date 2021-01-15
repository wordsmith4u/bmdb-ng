import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Actor } from 'src/app/model/actor.class';
import { ActorService } from 'src/app/service/actor.service';

@Component({
  selector: 'app-actor-detail',
  templateUrl: './actor-detail.component.html',
  styleUrls: ['./actor-detail.component.css']
})
export class ActorDetailComponent implements OnInit {
  title = "Actor Detail";
  actor: Actor = null;
  actorId: number = 0;

  constructor(private actorSvc: ActorService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // get the ID from the URL
    this.route.params.subscribe(
      parms => {
        this.actorId = parms['id'];
        console.log(this.actorId);
      }
    );

    // get the actor by ID
    this.actorSvc.getById(this.actorId).subscribe(
      resp => {
        this.actor = resp as Actor;
        console.log('Actor', this.actor);
      },
      err => {
        console.log(err);
      }
    );

  }
  delete() {
    // delete the actor from the database
    this.actorSvc.delete(this.actor.id).subscribe(
      resp => {
        this.actor = resp as Actor;
        console.log('Actor deleted', this.actor);
        // forward to the actor-list component
        this.router.navigateByUrl("/actor-list");
      },
      err => {
        console.log(err);
      }
    );
  }

}