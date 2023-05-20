import { Injectable } from '@angular/core';
import { ISnack } from './snacks/isnack';
import {Subject} from "rxjs";

export interface IMovie {
  "id": number;
  "title": string;
  "description": string;
  "image": string;
}

export interface dates {
  date:string
}
export interface party {
  time:string
}


export interface seats {
  id:number,
  class:string,
  price:number,
  status:boolean
}


export interface movies {
  movie_ID:number,
  movie_name:string,

}
@Injectable({
  providedIn: 'root'
})
export class DataService {
  // snacksChanged = new Subject<ISnack[]>();
  private movieList:IMovie[]=[
    {
      id: 1,
      title: "El Lemby",
      description: "El-Limby lives in a decrepit neighborhood with his mother Faransa and he develops feelings for his neighbor. However, her father objects to their marriage, and El-Limby's mother encourages him to find a job to provide for his family-to-be.\n" +
        "\n",
      image: "https://media.elcinema.com/uploads/_315x420_1f431a4b983a6d41f374d91f29b768f927f1906e7a7afac59dc2513182e3dad6.jpg",
    },
    {
      id: 2,
      title: "Booha",
      description: "As Bouha Al-Sabbah leaves his home village for Cairo in order to retrieve his inheritance, he learns that he must first cooperate with the police to bring down a merchant selling bad meat. Along the way, he meets Mrs. Halaweyat and her daughter Katta.\n" +
        "\n",
      image: "https://media.elcinema.com/uploads/_315x420_f0830360002427a98c7f6517906db00848b13032be1451a0b638a9ad37970868.jpg"
    },
    {
      id: 3,
      title: "Katkout",
      description: "Katkout is an Upper-Egyptian whose aunt prepares him to sacrifice himself for a family vendetta. Luckily, the police save him to use his physical resemblance to a terrorist named Youssef Khoury. After being trained to replace Khoury, Katkout's national security assignment begins in a comic haste.\n" +
        "\n",
      image: "https://media.elcinema.com/uploads/_315x420_b79f8f9ab19160378aa9e8192441ad8c75614b4f2b1882f34c0341e9ca6aa90b.jpg",
    },
    // {
    //   id: 4,
    //   title: "Elly Baly Balak",
    //   description: "Lemby is imprisoned after trying to steal the contract of his father's apartment from his uncle. He discovers his strange resemblance to the prison warden Riad Manfalouti, who's injured in an accident after Lemby attempts to escape. A doctor performs a surgery and puts Riad's brain into Lemby's body" ,
    //   image: "https://media.elcinema.com/uploads/_315x420_34a6a600834126961856de2835e432cabea226b145e37516c97d3b58fd3a4a0f.jpg",
    // },
  ]

  // Default Arrays ---> Database---> to the components
  private movies:movies[]=[
    {movie_ID:1,movie_name:'Ellemby'},
    {movie_ID:2,movie_name:'Oakel'},
    {movie_ID:3,movie_name:'Elly baly Bakek'},
    {movie_ID:4,movie_name:'Ellemby 8GB'},
    {movie_ID:5,movie_name:'Atata'},
  ]
  private dates:dates[]=[
    {date:'1/10 St'},
    {date:'2/10 Su'},
    {date:'3/10 Mo'},
    {date:'4/10 Tu'},

  ];

  private party:party[]=[
    {time:"1 PM"},
    {time:"4 PM"},
    {time:"7 PM"},
    {time:"10 PM"},

  ];

  private seats: seats[]=[
    {id:1,class:'seat',price:90,status:true},
    {id:2,class:'seat',price:90,status:true},
    {id:3,class:'seat occupied',price:90,status:false},
    {id:4,class:'seat',price:90,status:true},
    {id:5,class:'seat',price:90,status:true},
    {id:6,class:'seat',price:90,status:true},
    {id:7,class:'seat',price:90,status:true},
    {id:8,class:'seat occupied',price:90,status:false},
    {id:9,class:'seat',price:90,status:true},
    {id:10,class:'seat occupied',price:90,status:false},
    {id:11,class:'seat',price:90,status:true},
    {id:12,class:'seat occupied',price:90,status:false},
    {id:13,class:'seat',price:90,status:true},
    {id:14,class:'seat occupied',price:90,status:false},
    {id:15,class:'seat',price:90,status:true},
    {id:16,class:'seat',price:90,status:true},
    {id:17,class:'seat',price:90,status:true},
    {id:18,class:'seat',price:90,status:true},
    {id:19,class:'seat',price:90,status:true},
    {id:20,class:'seat occupied',price:90,status:false}
  ];

  private snacks:ISnack[]=[
    {name:'popcorn',amount:0,price:30},
    {name:'coke',amount:0,price:10},
    {name:'pepsi',amount:0,price:15},
  ]

  // Selected Arrays ---> Coming From the Components

  selectedMovie:any='';
  selectedDate:string='';
  selectedParty:string='';
  selectedSeat:number[]=[];
  selectedSnacks:number[]=[];
  snackTotal:number=0;
  tickestsTotal:number=0;


  constructor() { }

// Methods of the Default Arrays

  getAllMovies():IMovie[]{
    return this.movieList
  }
  getMovieById(id:number){
    return this.movieList.find((u)=>u.id==id)
  }
  getAllDates(){
    return this.dates.slice();
  }
  getAllParties(){
    return this.party.slice();
  }
  getAllSeats(){
    return this.seats.slice();
  }
  getAllSnacks() {
    return this.snacks.slice();
  }


// Methods of the Selected Arrays


  getSelectedMovie(){
    return this.selectedMovie;
  }
  getSelectedDate(){
    return this.selectedDate;
  }
  getSelectedParty(){
    return this.selectedParty;
  }
  getSelectedSeats(){
    return this.selectedSeat;
  }
  getSelectedSnacks(){
    return this.selectedSnacks;
  }
  addtMovieList(movie:any){
    return this.movieList.push(movie);
  }
  DelettMovieList(id:number){
    return this.movieList.splice(id-1,1);
  }

  getTicketsTotal(){
    return this.selectedSeat.length*this.seats[0].price;

  }
  getSnacksTotal(){
    return this.snackTotal;
  }

//On Final Submit


confirm(){
  // if (this.selectedSeat.length>0){

  // }
   for(let snack of this.snacks){
    snack.amount=0;

   };
  for(let seat of this.selectedSeat){
      this.seats[seat-1].class='seat occupied';
      this.seats[seat-1].status=false;
    }
  }
  cancel(){
    for(let snack of this.snacks){
      snack.amount=0;

     };

    for(let seat of this.selectedSeat){


    this.seats[seat-1].class='seat';
    this.seats[seat-1].status=true;
    this.selectedSeat=[];
    }

  }
}









