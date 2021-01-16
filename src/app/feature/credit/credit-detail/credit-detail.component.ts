import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Credit } from 'src/app/model/credit.class';
import { CreditService } from 'src/app/service/credit.service';


@Component({
  selector: 'app-credit-detail',
  templateUrl: './credit-detail.component.html',
  styleUrls: ['./credit-detail.component.css']
})
export class CreditDetailComponent implements OnInit {
  title = "Credit Detail";
  credit: Credit = null;
  creditId: number = 0;

  constructor(private creditSvc: CreditService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // get the ID from the URL
    this.route.params.subscribe(
      parms => {
        this.creditId = parms['id'];
        console.log(this.creditId);
      }
     );

    // get the credit by ID
    this.creditSvc.getById(this.creditId).subscribe(
      resp => {
        this.credit = resp as Credit;
        console.log('Credit', this.credit);
      },
      err => {
        console.log(err);
      }
    );

  }
  delete() {
    // delete the credit to the database
    this.creditSvc.delete(this.credit.id).subscribe(
      resp => {
        this.credit = resp as Credit;
        console.log('Credit deleted', this.credit);
        // forward to the credit-list component
        this.router.navigateByUrl("/credit-list");
      },
      err => {
        console.log(err);
      }
    );
  }

}