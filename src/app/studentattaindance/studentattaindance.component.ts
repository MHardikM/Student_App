import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-studentattaindance',
  templateUrl: './studentattaindance.component.html',
  styleUrls: ['./studentattaindance.component.css']
})
export class StudentattaindanceComponent implements OnInit {

  passeddata: any
  // studentname: any
  localstor!:any
  attaindancesheet: any;
  // tabledata: any;
  i: any
  students: any
  present:any
  absent:any
  leave:any
  check:any
  today:any
  cancel_associated_session:any
  date: Date = new Date();
  formvalue: any;
  blank1:any
  blank2:any
  loginform:any

constructor() {
    this.passeddata = localStorage.getItem("studentlist");
    this.passeddata = JSON.parse(this.passeddata);
    this.students = this.passeddata;
    this.localstor =localStorage.getItem("attaindancesheet");
    if(this.localstor==null){
      this.attaindancesheet=[];
    }
    else{
      this.attaindancesheet=JSON.parse(this.localstor);
    }
    // this.attaindancesheet=localStorage.getItem("attaindancesheet");
    // this.attaindancesheet=JSON.parse(this.attaindancesheet);
    // this.attaindancesheet=this.attaindancesheet;
    
  }
  attaindance: string[] = ['present', 'absent', 'leave'];
  ngOnInit(): void {this.today = this.date.toISOString().substr(0, 10);
    
}  

// calendarOptions: CalendarOptions = {
//   initialView: 'dayGridMonth'
// };

// calanderPlugins=[dayGridPlugin];
data:any
datechange(formvalue:NgForm){
  formvalue.resetForm({
    present:false,
    absent:false,
    leave:false
  })
  
  
}
 
 onFormSubmit(formvalue:NgForm):any{
   this.date=this.today
   this.attaindance=formvalue.value
         const data={
          date:this.date,
          attaindance:this.attaindance
         }
         console.log(data)
      // this.attaindancesheet=this.attaindancesheet;
      //  this.attaindancesheet.push(data)
      //  console.log(this.attaindancesheet[1].attaindance.check0)

    let defaultdate=new Date().toISOString().substr(0, 10);
    this.today=defaultdate;
   
   
 
      //  localStorage.setItem("attaindancesheet", JSON.stringify(data))
      //  this.attaindancesheet = localStorage.getItem("attaindancesheet");
      // console.log(this.attaindancesheet.date)

    }
    resetform(formvalue : NgForm) {
      	
      formvalue.resetForm({
        present: false,
        absent:false,
        leave:false
      }); 

}

}
