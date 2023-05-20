import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MoviesService } from 'src/app/movies.service';
import { DataService } from 'src/app/parts/data.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {
  addMovieForm=new FormGroup({
    id:new FormControl('',Validators.required),
    title:new FormControl('',Validators.required),
    description:new FormControl('',Validators.required),
    image:new FormControl('',Validators.required),
  })
  deletMovieForm=new FormGroup({
    id2:new FormControl('',Validators.required),
  })
  constructor(private movieserv:DataService,private router:Router) { }

  ngOnInit(): void {
  }
  get id(){
    return this.addMovieForm.get('id') as FormControl;
  }
  get title(){
    return this.addMovieForm.get('title') as FormControl;
  }
  get description(){
    return this.addMovieForm.get('description') as FormControl;
  }
  get image(){
    return this.addMovieForm.get('image') as FormControl;
  }
get id2 (){
  return this.deletMovieForm.get('id2') as FormControl;
}
  addNewMovie(movie:any){
    this.movieserv.addtMovieList(movie);
    this.router.navigate(['/Movies'])
}
deletMoviebyID(id:number){
  this.movieserv.DelettMovieList(id);
  this.router.navigate(['/Movies'])
}
}
