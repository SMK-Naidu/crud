import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../data.service';
import {  ActivatedRoute, Route, Router } from '@angular/router';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  imgitem = [{ img: 'assets/userimg.png' }]
  id: any;
  data: any;
  isAddMode: boolean | undefined;
  studentToUpdate: any;
  constructor(public dataService: DataService , private router:Router , private Route:ActivatedRoute) { }
  datalist: any;

  deletedata(index: any) {
    confirm("Are you sure to Delete this Id?")
    this.datalist.splice(index, 1);
  }

 onEditdata(id:any) {
  this.studentToUpdate = this.datalist;
this.router.navigate(['/edit',id]);
}
 ngOnInit(): void {
  this.datalist = this.dataService.getdata();

}
}

