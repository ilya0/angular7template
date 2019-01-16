import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // adding http module to use for http request


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  firstClick(){
    return console.log("clicked")
  }

  getUsers(){
    return this.http.get('https://reqres.in/api/users'); //connecting to free api to pull data
  }

}
