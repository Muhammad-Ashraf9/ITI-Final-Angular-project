import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-user-from-server',
  templateUrl: './user-from-server.component.html',
  styleUrls: ['./user-from-server.component.css']
})
export class UserFromServerComponent implements OnInit {
userlist:any;
  constructor() { }

  ngOnInit(): void {

    }
  }

