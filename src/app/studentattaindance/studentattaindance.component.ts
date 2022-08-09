import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Pipe} from '@angular/core'
@Component({
  selector: 'app-studentattaindance',
  templateUrl: './studentattaindance.component.html',
  styleUrls: ['./studentattaindance.component.css']
})
export class StudentattaindanceComponent implements OnInit {

  passeddata: any

  localstor!: any
   attaindancesheet: any;
   studentnames:any
  i: any
  students: any
  present: any
  absent: any
  leave: any
  attaindance: any
check0:any
  today: any
  date: Date = new Date();
  formvalue: any;
  loginform: any
index:any
n:any
  constructor() {
    this.passeddata = localStorage.getItem("studentlist");
    this.passeddata = JSON.parse(this.passeddata);
    this.students = this.passeddata;
    
  
   
    this.localstor = localStorage.getItem("attaindancesheet");
    if(this.localstor==null){
      this.attaindancesheet = [];
    }
    else {
      this.attaindancesheet =JSON.parse(this.localstor);
  
    }
    // console.log(this.attaindancesheet[0].attaindance);
    // this.attaindancesheet=localStorage.removeItem("attaindancesheet");
    // console.log(this.attaindancesheet)
 
   }

  
  ngOnInit(): void { this.today = this.date.toISOString().substr(0, 10); }

 

  datechange(formvalue: NgForm) {
    formvalue.resetForm({
      present: false,
      absent: false,
      leave: false
    })
  }

  onFormSubmit(formvalue: NgForm){
    this.date = this.today
    this.attaindance= formvalue.value
   
    const data = {
     date:this.date,
      attaindance:this.attaindance,
    }
    

     this.attaindancesheet.push(data);
     localStorage.setItem("attaindancesheet", JSON.stringify(this.attaindancesheet));
    let defaultdate = new Date().toISOString().substr(0, 10);
    this.today = defaultdate;

  }

  resetform(formvalue: NgForm) {
    formvalue.resetForm({
      present: false,
      absent: false,
      leave: false
    });

  }

}
