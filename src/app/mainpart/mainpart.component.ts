import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainpart',
  templateUrl: './mainpart.component.html',
  styleUrls: ['./mainpart.component.css']
})
export class MainpartComponent implements OnInit {

  title = 'internshala_work';
  isforupdate!:boolean 
 studentlist!:any
 studentname!:string
 class!:any
 score!:any
 result!:any
 No:any
 StudentName!:string
 Class!:number
 Result!:string
 Score!:number
 Grade!:string
 Edit!:any
 Delete! :any
 localitem!:any
 ptn!:number
 i!:number
 namepass!:string
 classpass!:string
 ngOnInit(){}
 
 
   constructor(){
     
     this.localitem=localStorage.getItem("studentlist");
     if(this.localitem==null){console.log("if")
       this.studentlist=[];
     }
     else{
   
       this.studentlist=JSON.parse(this.localitem);
     }
   }
 
   // submitform = new FormGroup({
   //     nameofstudent:new FormControl('',[Validators.required]),
   //     classofstudent:new FormControl('',[Validators.required]),
   //     scoreofstudent:new FormControl('',[Validators.required])
   
 
   //   })
 
   addtolist(){
     const add={
       StudentName:this.studentname,
       Class:this.class,
       Score:this.score,
       Result:this.result
     }
     this.studentlist.push(add);
     localStorage.setItem("studentlist",JSON.stringify(this.studentlist));
     this.studentname='',
     this.class='',
     this.score='',
     this.result=''
   }
   edit(i:number){
     this.ptn=i
     this.isforupdate=true
    
       this.studentname=this.studentlist[i].StudentName
       this.class=this.studentlist[i].Class,
       this.score=this.studentlist[i].Score,
       this.result=this.studentlist[i].Result
 
   }
   update(i:number){
     i=this.ptn
    const update={
     StudentName:this.studentname,
     Class:this.class,
     Score:this.score,
     Resulr:this.result
    }
    this.studentlist.splice(i,1,update)
     this.isforupdate=false
     this.studentname='',
     this.class='',
     this.score='',
     this.result=''
     
   }
 
   transfer!:number
 delete(i:number){
   this.transfer=i
   console.log(this.transfer)
   this.namepass=this.studentlist[i].StudentName
   this.classpass=this.studentlist[i].Class
 }
 clear(){
   this.studentname='',
     this.class='',
     this.score='',
     this.result=''
 }
 
 finaldelete(i:number){
   i=this.transfer
   this.studentlist.splice(i,1);
   localStorage.setItem("studentlist",JSON.stringify(this.studentlist));
 
 }
   


}
