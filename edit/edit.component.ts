import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  registerForm!: FormGroup;
  datalist:any;
  data:any;
 user:any;
 users:any
val:any;
details:any
studentToUpdate :any;
  ActivatedRoute: any;
  Name: any;
  constructor(private fb: FormBuilder, private _data: DataService, private router:Router, private Route:ActivatedRoute) { }

  ngOnInit(): void {
   let sub = this.Route.params.subscribe(params =>{
    this.val =JSON.parse(params['id']);
   });
   this.studentToUpdate=this._data.datalist.find(x=>x.id==this.val)
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
