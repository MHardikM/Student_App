import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-examstart',
  templateUrl: './examstart.component.html',
  styleUrls: ['./examstart.component.css']
})
export class ExamstartComponent implements OnInit {
  student:any
  stlist:any
  StudentName:any
  name:any
  local:any
  examcompleted:any

  constructor() {  this.student=localStorage.getItem("studentlist");
  this.student=JSON.parse(this.student);
  this.stlist=this.student
  
 }

  ngOnInit(): void { }

  
  passname(){
 this.name=this.name
 const index = this.stlist.findIndex((item: { StudentName: string; }) => item.StudentName === this.name);
const readd={StudentName:this.name,
  Class:this.stlist[index].Class,
  Score:this.stlist[index].Score,
  examcompleted:true
}
this.stlist.splice(index,1,readd);
localStorage.setItem("studentlist",JSON.stringify(this.stlist));
console.log(readd);

    // this.examreport.push(names);
    // localStorage.setItem("examreport",JSON.stringify(this.examreport));
    this.name=this.name
    this.local=localStorage.setItem("nameofstudent",this.name);
    
  }

}
