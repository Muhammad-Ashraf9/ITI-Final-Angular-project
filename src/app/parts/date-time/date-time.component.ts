import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router} from "@angular/router";
import { DataService, dates, party } from '../data.service';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.component.html',
  styleUrls: ['./date-time.component.css']
})
export class DateTimeComponent implements OnInit {
   theaterDays:dates[]=[];
   theaterTimes:party[]=[];
   timeSelected:string='';
   dateSelected:string='';
   isDateSelected=false;
   isTimeSelected=false;


  constructor(private router:Router ,private dataService:DataService) { }

  ngOnInit(): void {
    this.theaterDays=this.dataService.getAllDates();
    this.theaterTimes=this.dataService.getAllParties();

  }
  onSelectDate(event:any){
    this.dataService.selectedDate=event.target.value;
    this.isDateSelected=true;

  }
  onSelectTime(event:any){
this.isTimeSelected=true;
this.dataService.selectedParty=event.target.value;

  }

  onSubmit(form:NgForm) {

    this.router.navigate(['/seats']).then();

  }
}
