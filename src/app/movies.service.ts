import { Injectable } from '@angular/core';
import { IMovie } from './imovie';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
private movieList:IMovie[]=[
  {
    "id": 1,
    "title": "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
    "description": "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
    "image": "https://picsum.photos/200/300?random=4",
  },
  {
   "id": 2,
   "title": "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
   "description": "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
    "image": "https://picsum.photos/200/300?random=4",
  },
  {
   "id": 3,
   "title": "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
   "description": "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
   "image": "https://picsum.photos/200/300?random=4",
  },
  {
  "id": 4,
  "title": "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
  "description": "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
  "image": "https://picsum.photos/200/300?random=4",
  },
    ]
  constructor() { }
  getallMovies():IMovie[]{
    return this.movieList
  }
  getMoviebyid(id:number){
    return this.movieList.find((u)=>u.id==id)
  }
 
}
