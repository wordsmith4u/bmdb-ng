import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/model/movie.class';
import { MovieService } from 'src/app/service/movie.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-movie-edit',
  templateUrl: '../movie-maint-shared/movie-maint.component.html',
  styleUrls: ['./movie-edit.component.css']
})
export class MovieEditComponent implements OnInit {
  title = "Movie Edit";
  movie: Movie = null;
  movieId: number = 0;
  submitBtnTitle = "Save";

  constructor(private movieSvc: MovieService,
    private router: Router,
    private route: ActivatedRoute,
    private loc: Location) { }

  ngOnInit(): void {
    //get the id from the url
    this.route.params.subscribe(
      parms => {
        this.movieId = parms['id'];
        console.log("MovieID = " + this.movieId);
      }
    );
    //get movie by id
    this.movieSvc.getById(this.movieId).subscribe(
      resp => {
        this.movie = resp as Movie;
        console.log('Movie', this.movie);
      },
      err => {
        console.log(err);
      }
    );
  }
  save() {
    // save the movie to the DB
    this.movieSvc.update(this.movie).subscribe(
      resp => {
        this.movie = resp as Movie;
        console.log('Movie updated',this.movie);
        // forward to the movie list component
        this.router.navigateByUrl("/movie-list");
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