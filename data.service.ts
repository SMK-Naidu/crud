import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UsersComponent } from './users/users.component';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  headers = new HttpHeaders().set('content-Type', 'application/json').set('Accept', 'application/json');
  httpOptions = {
    headers: this.headers
  }
  datalist=[
    {
      "id": 1,
      "name":"Smk",
      "email":"smk123@gmail.com",
      "mobile":"9964564659",
      "city":"Hyderabad",
      "zipcode":"500075",
        
    },
    {
      "id": 2,
      "name":"Naidu",
      "email":"smk12345@gmail.com",
      "mobile":"8564564659",
      "city":"chennai",
      "zipcode":"502075",
  
    },
    {
      "id": 3,
      "name":"Raja",
      "email":"Raja123@gmail.com",
      "mobile":"6564564659",
      "city":"Hyderabad",
      "zipcode":"500076"
    },
    {
      "id": 4,
      "name":"Surya",
      "email":"surya233@gmail.com",
      "mobile":"9564564659",
      "city":"Mumbai",
      "zipcode":"600075"
    },
    {
      "id": 5,
      "name":"Laxman",
      "email":"Laxman12@gmail.com",
      "mobile":"7564564659",
      "city":"vizag",
      "zipcode":"512075"
    },
    {
      "id": 6,
      "name":"Sagar",
      "email":"Sagar4523@gmail.com",
      "mobile":"8564564659",
      "city":"Benguluru",
      "zipcode":"523076"
    },
    {
      "id": 7,
      "name":"Mohan",
      "email":"Mohan563@gmail.com",
      "mobile":"6564564659",
      "city":"Delhi",
      "zipcode":"600075"
    },
    {
      "id": 8,
      "name":"Vikki",
      "email":"vikki456@gmail.com",
      "mobile":"7764564659",
      "city":"Goa",
      "zipcode":"600455"
    },
  ];

constructor(private http:HttpClient, private router:Router ) { }
  getdata(){
      return this.datalist;
    }
    getupdate(student:any)  {
      const datalist ='${this.datalist}/${student.id}';
      return this.http.put(datalist,this.httpOptions)
        
    }
  
  }
