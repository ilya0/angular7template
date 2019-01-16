import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  users: Object;
  h1Style: boolean = false;

  constructor(private data: DataService) { }

  ngOnInit() {
    //placing a get user subscribe on the on init lifecycle hook so it populates when app is opened
    this.data.getUsers().subscribe(data =>{
      this.users = data;
      console.log(this.users);
    });
  }

  firstClick(){
    console.log('clicked');
    this.h1Style = true;
    this.data.firstClick();
  }

}
