import { Component, OnInit } from '@angular/core';
import { IMovie } from '../imovie';
import { MoviesService } from '../movies.service';
import {DataService} from "../parts/data.service";

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
allMovies:IMovie[]=[];
  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.allMovies=this.dataService.getAllMovies();
  }

}
