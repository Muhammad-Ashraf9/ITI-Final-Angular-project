import {Component, OnInit, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from '../data.service';
import { ISnack } from './isnack';
import { Router } from '@angular/router';

@Component({
  selector: 'app-snacks',
  templateUrl: './snacks.component.html',
  styleUrls: ['./snacks.component.css']
})

export class SnacksComponent implements OnInit {
  // @ViewChild('f', { static: false }) slForm: NgForm;

  snacks:ISnack[]=[];
  snacksCalc:number[]=[] ;
  snackAmount:number[]=[];
  snacksFinal=0;

  constructor(private dataService:DataService, private router:Router) { }

  ngOnInit(): void {
    this.snacks=this.dataService.getAllSnacks();
  }

  onChange(event: any,i:number) {
   this.snacksCalc[i] = event.target.value*this.snacks[i].price;
    this.snacksFinal=this.snacksCalc.reduce((a, b) => a + b,  0);
  }
  onSubmit(f: NgForm) {
    const value = f.value
    this.dataService.selectedSnacks=value;
    this.dataService.snackTotal=this.snacksFinal;
    this.router.navigate(['/finalBill']).then();
    console.log({value})
    console.log({valuePepsi:value.pepsi})
  }


}
