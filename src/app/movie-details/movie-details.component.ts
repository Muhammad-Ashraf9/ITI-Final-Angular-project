import { Component, OnInit } from '@angular/core';
import { IMovie } from '../imovie';
import { MoviesService } from '../movies.service';
import { ActivatedRoute, Router } from '@angular/router';
import {DataService} from "../parts/data.service";

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movieId:any;
  movie_data?:IMovie;
  constructor(private activeRout:ActivatedRoute,
              private dataService:DataService,
              private router:Router) { }

  ngOnInit(): void {
    this.activeRout.params.subscribe(params=> this.movieId=params['id'])

   this.movie_data=this.dataService.getMovieById(this.movieId);
    this.dataService.selectedMovie=this.movie_data;

    console.log({movieDeatils:this.movie_data})
  }
  // seats(){
  //   this.router.navigate(['/seats'])
  // }
}
