import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IMovie } from '../imovie';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {
@Input()movie?:IMovie;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  onClick(){
   this.router.navigate(['/MovieDTL',this.movie?.id])
  }

}
