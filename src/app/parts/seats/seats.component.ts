import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService, seats } from '../data.service';

@Component({
  selector: 'app-seats',
  templateUrl: './seats.component.html',
  styleUrls: ['./seats.component.css']
})
export class SeatsComponent implements OnInit {
  seats: seats[]=[];

  selectedSeats:number[]=[];
  // ticketPrice:number=this.seats[0].price;
  ticketsCharge:number=0;

  constructor(private router:Router ,private dataService:DataService) { }

  ngOnInit(): void {
    this.seats=this.dataService.getAllSeats();
  }

  onSelect(id:number,i:number){
    if(this.seats[i].class=='seat'){
      this.seats[i].class='seat selected';

      this.selectedSeats.push(id);
      console.table({selectedSeats:this.selectedSeats});
      console.log({i});
      console.log({id});

    }else if(this.seats[i].class=='seat selected'){
      this.seats[i].class='seat';

      this.selectedSeats=this.selectedSeats.filter((seat: number)=>seat!=id);
      // this.selectedSeats.splice(id,1)
      console.table({selectedSeatsSELECT:this.selectedSeats});

    }
    else{
      return;
    }

  }
  onConfirm(){
    // this.selectedSeats.forEach((id: number) => {
    //   let objIndex = this.seats.findIndex((elem:seats) => elem.id==id);
    //   this.seats[objIndex].class = 'seat occupied';
    //   this.seats[objIndex].status = 'seat occupied';
    //   console.table({selectedSeatsCONFIRM:this.selectedSeats});
    // });
    this.dataService.selectedSeat=this.selectedSeats;
    // this.ticketsCharge=this.selectedSeats.length*this.seats[0].price;
    // this.dataService.tickestsTotal=this.ticketsCharge;
    
    
    this.router.navigate(['/snacks']).then();

    // console.log(seat);
    // console.log({seat});
    // for(let seat of this.selectedSeats){
    //   this.seats[seat-1].class='seat occupied';
    //   this.seats[seat-1].status=false;


    // }

  }
  onCancel(){
    // this.selectedSeats.forEach((id: number) => {
    //   let objIndex = this.seats.findIndex((elem:seats) => elem.id==id);
    //   this.seats[objIndex].class = 'seat';
    //   this.selectedSeats=[];
    //   console.table({selectedSeatsCANCEL:this.selectedSeats});
    // });
    for(let seat of this.selectedSeats){
      this.seats[seat-1].class='seat';
      this.seats[seat-1].status=true;
      this.selectedSeats=[];
    }

  }

}


