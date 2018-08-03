import { Ruser } from './ruser';
import { group } from '@angular/animations';
import { User } from './user';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {MovieService} from './../../services/movie.service';
import {FormBuilder,FormGroup,Validators,FormControl,FormArray} from '@angular/forms';

@Component({
  selector: 'app-theatre',
  templateUrl: './theatre.component.html',
  styleUrls: ['./theatre.component.css']
})
export class TheatreComponent implements OnInit {
  // display: boolean = false;
  // moviename:any;
  // moviefetched:any;
  // movieimage:any;
  topics=["default","a","b","c"];
  userModel= new User("sanjay","default","option2",true,"rajat","sumit","archit");//same order as mentioned in user class
  //now this userModel object is used tu supply values to each field in form which is sent to form control object of each fields using property binding also thru event binding any update in supplied values updates in usermodel object as weel as to form contol oject of each fields 

//reactive forms
  userList:Ruser[]=[];
  rForm:FormGroup;//instance of form group since it is binded to form in html using[form group] value of form can be access using it
  
  //reactive forms basics using material
    bForm: FormGroup;
  //reactive forms nested using material
   nForm:FormGroup;  
   //reactive forms farray using material
    faForm: FormGroup;
     //reactive forms validation
      myForm: FormGroup;
  constructor(private movieservice:MovieService, private route: ActivatedRoute, private router: Router,private fb: FormBuilder) { 

  }

  ngOnInit() {
    //edureka
    this.rForm=new FormGroup(
      {
        name:new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(12)]),
           contact:new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(12)]),
              email:new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(12)])
      }
    ),

    //form bulder is used to define schema here// fb reactive basics using material
     this.bForm = this.fb.group({
      email: 's@',
      message: '',
      career: ''
    })
this.bForm.valueChanges.subscribe(console.log);//valuechanges track every change of control object inside formgroup
//reactive using nested
 const phone = this.fb.group({ 
    area: ["sa"],
    prefix: [],
    line: [],
  })
 const phone1 = this.fb.group({ 
    area: [],
    prefix: [],
    line: [],
  })
  this.nForm = this.fb.group({//parent
    email: '',
    homePhone: phone1,//both home and cell are folloeing upper schema of phone
    cellPhone: phone,
  })
//reactive nested form array
this.faForm = this.fb.group({
      email: '',
      phones: this.fb.array([]),
      city:this.fb.array([])
    })
    const phone = this.fb.group({
      area: [],
      prefix: [],
      line: []
    });
//reactive form with validations
    this.myForm = this.fb.group({
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      password: ['', [
        Validators.required,
        Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$')
      ]],
      age: [null, [
        Validators.required,
        Validators.minLength(2), 
        Validators.min(18), 
        Validators.max(65)
      ]],
      agree: [false, [
        Validators.requiredTrue
      ]]
    });

  }
//nested k liye
  get phoneForms() {
    return this.faForm.get('phones') as FormArray
    // Because the returned control is of type AbstractControl, you provide an explicit type to access the FormArray specific syntax for the methods
  }
 get cityForms() {
    return this.faForm.get('city') as FormArray
    // Because the returned control is of type AbstractControl, you provide an explicit type to access the FormArray specific syntax for the methods
  }
   addCity() {

    const city = this.fb.group({ 
      area: [],
      code: [],
      spot: [],
    })

    this.cityForms.push(city);
  }
  addPhone() {

    const phone = this.fb.group({ 
      area: [],
      prefix: [],
      line: [],
    })

    this.phoneForms.push(phone);
  }
 deleteCity(i) {
    this.cityForms.removeAt(i)
  }
  deletePhone(i) {
    this.phoneForms.removeAt(i)
  }
  //normal tdf
  log(x){
console.log(x);
}
//edureka
addPost(Form){
  console.log(Form.value);
  console.log(this.rForm.value)
  this.userList.push(this.rForm.value);
// this.userList.push(post);

}
////reactive form with validations
  get email() {
    return this.myForm.get('email');
  }

  get password() {
    return this.myForm.get('password');
  }

  get age() {
    return this.myForm.get('age');
  }

  get agree() {
    return this.myForm.get('agree');
  }
}


