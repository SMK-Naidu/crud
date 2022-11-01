import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DataService } from '../data.service';
@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styleUrls: ['./newuser.component.scss']
})
export class NewuserComponent implements OnInit {
  registerForm!: FormGroup;
  datalist:any;
  data:any;
 user:any;
 users:any
val:any;
details:any
studentToUpdate = {
  id:"",
  name:"", 
  mobile:"",
  email:"",
  city:"",
  zipcode:""
}
  ActivatedRoute: any;
  Name: any;
  constructor(private fb: FormBuilder, private _data: DataService, private router:Router, private Route:ActivatedRoute) { }

  ngOnInit(): void {
   let sub = this.Route.params.subscribe(params =>{
    this.val =(params['id']);
   });
  //  this.studentToUpdate=JSON.stringify(this._data.datalist.find(x=>x.id==this.val))
  //  console.log(studentToUpdate?.name)
  //  this.datalist = this._data.datalist().find((x: { id: string; }) =>x.id ==this.studentToUpdate.id);
  //  constparams.details
    // this.data = this.Route.snapshot.params['id'];
    // this.user=this._data.getdata()
    // // this.details=this.getId(this.data)
    // this.Route.params.subscribe((params:Params)=>{
    //   this.datalist=+params['id'];
    //   this.datalist=this._data.getdata();
    // })
// this.ActivatedRoute.queryParams.subscribe((data: any) =>{
 
// })
    // console.log(this.users)
    // this._data.getupdate(this.data).subscribe((data: any) =>{
    // this.user = data;
// });
    this.registerForm = this.fb.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      mobileno: ['', [Validators.required, Validators.minLength(10)]],
      email: ['', [Validators.required, Validators.email]],
      city: ['', Validators.required],
      zipcode: ['', Validators.required]
    });
  }
  getId(id:any){
   let index=this.user.findIndex(id)
   this.details
  }
  clicksub() {
    let values = {
      id:this.registerForm.controls['id'].value,
      name: this.registerForm.controls['name'].value,
      email: this.registerForm.controls['mobileno'].value,
      mobile: this.registerForm.controls['email'].value,
      city: this.registerForm.controls['city'].value,
      zipcode: this.registerForm.controls['zipcode'].value,
    }
    this._data.datalist.push(values);
    console.log(values)
   this.router.navigate(['/users']);
  }
  get id() {
    return this.registerForm.get('id');
  }  
  get name() {
    return this.registerForm.get('name');
  }
  get mobileno() {
    return this.registerForm.get('mobileno');
  }
  get email() {
    return this.registerForm.get('email');
  }
  get city() {
    return this.registerForm.get('city');
  }
  get zipcode() {
    return this.registerForm.get('zipcode');
  }
  onSubmit() {
  }
  onEditdata(student:any){
  this._data.getupdate(this.studentToUpdate).subscribe(data =>{

  });
  this.router.navigate(['/users']);
   
  }
}
