import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from 'src/app/model/movie.class';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.css']
})
export class MovieEditComponent implements OnInit {
  title = "Movie Edit";
  movie: Movie = null;
  movieId: number = 0;
  submitBtnTitle = "Save";

  constructor(private movieSvc: MovieService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // get the ID from the URL
    this.route.params.subscribe(
      parms => {
        this.movieId = parms['id'];
        console.log(this.movieId);
      }
    );

    // get the movie by ID
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
    // save the movie to the database
    this.movieSvc.update(this.movie).subscribe(
      resp => {
        this.movie = resp as Movie;
        console.log('Movie updated', this.movie);
        // forward to the movie-list component
        this.router.navigateByUrl("/movie-list");
      },
      err => {
        console.log(err);
      }
    );
  }

}