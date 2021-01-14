import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NoComponentDefinedComponent } from './core/no-component-defined/no-component-defined.component';
import { ActorListComponent } from './feature/actor/actor-list/actor-list.component';
import { MovieCreateComponent } from './feature/movie/movie-create/movie-create.component';
import { MovieEditComponent } from './feature/movie/movie-edit/movie-edit.component';
import { MovieListComponent } from './feature/movie/movie-list/movie-list.component';
import { MovieDetailComponent } from './feature/movie/movie-detail/movie-detail.component';

const routes: Routes = [
  { path : '', redirectTo: 'movie-list', pathMatch: 'full'},
  { path: 'movie-list', component: MovieListComponent},
  { path: 'movie-create', component: MovieCreateComponent},
  { path: 'movie-detail/:id', component: MovieDetailComponent},
  { path: 'movie-edit/:id', component: MovieEditComponent},
  { path: 'actor-list', component: ActorListComponent},
  { path: '**', component: NoComponentDefinedComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
