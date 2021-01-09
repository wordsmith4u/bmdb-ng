import { Component, OnInit } from '@angular/core';
import { Actor } from '../../../model/actor.class';
import { ActorService } from '../../../service/actor.service';

@Component({
  selector: 'app-actor-list',
  templateUrl: './actor-list.component.html',
  styleUrls: ['./actor-list.component.css']
})
export class ActorListComponent implements OnInit {
  title = "Actor List";
  actors: Actor[] = [];

  constructor(private actorSvc: ActorService) { }

  ngOnInit(): void {
    console.log("hi");
    // populate list of actor
    this.actorSvc.getAll().subscribe(
      resp => {
        this.actors = resp as Actor[];
        console.log('Actors', this.actors);
      },
      err => {
        console.log(err);
      }
    );

  }

}