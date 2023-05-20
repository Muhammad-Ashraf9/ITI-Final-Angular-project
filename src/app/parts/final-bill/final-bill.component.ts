import { Component, OnInit } from '@angular/core';
import {DataService} from "../data.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-final-bill',
  templateUrl: './final-bill.component.html',
  styleUrls: ['./final-bill.component.css']
})
export class FinalBillComponent implements OnInit {

  constructor(private dataService:DataService, private router:Router) { }
  daySelected:string='';
  partySelected:string='';
  seatsSelected:number[]=[];
  movieSelected:any='';
  ticketsTotal:number=0;
 snacksTotal:number=0;


  snacksSelected:any=[];

  ngOnInit(): void {
    this.movieSelected=this.dataService.selectedMovie
    console.log({movieSelected:this.movieSelected})
    this.snacksSelected=this.dataService.getSelectedSnacks();
    console.log({snacksFinalBill:this.snacksSelected});
    this.daySelected=this.dataService.getSelectedDate();
    this.partySelected=this.dataService.getSelectedParty();
     this.seatsSelected=this.dataService.getSelectedSeats();
     this.movieSelected=this.dataService.getSelectedMovie();
     this.ticketsTotal=this.dataService.getTicketsTotal();
     this.snacksTotal=this.dataService.getSnacksTotal();


  }
  onCancel(){
    this.router.navigate(['/Movies']);
    this.dataService.cancel();
  }
  onConfirm(){
    this.router.navigate(['/home']);
    this.dataService.confirm();
  }

}
