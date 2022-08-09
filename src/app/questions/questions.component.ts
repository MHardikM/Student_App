import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { QuestionserviceService } from '../services/questionservice.service';
@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  public questionlist:any=[];
  public currentquestion:number=0;
  public points:number=0;
  public counter:number=30;
  public correctanswer:number=0;
  public wronganswer:number=0;
  interval$:any;
  progress:string="0"
  quizcomplete:boolean=false
  localstor:any
  resultmaker:any
  name:any



  constructor(private questionservice:QuestionserviceService){

    this.localstor=localStorage.getItem("resultmaker");
    if(this.localstor==null){
      this.resultmaker=[];
    }
    else{
       this.resultmaker=JSON.parse(this.localstor);
    }
    this.name=localStorage.getItem("nameofstudent");
   
  }
   
  ngOnInit(): void {
    this.getallquestion();
    this.startcounter();
   }
  
  getallquestion(){
 this.questionservice.getQuestionjson().subscribe(res=>{ this.questionlist=res.questions
  
})

  }
 
   answer(currentquestion:number,option:any){
   

    if(option.correct){
      this.correctanswer++;
      this.points+=20;
      setTimeout(() => {
  
        this.currentquestion++;
        this.getprogresspercent();
        
      }, 500);
      this.resetcounter();
   
    }
    else{
      this.wronganswer++;
      setTimeout(() => {
       
        this.currentquestion++;
        this.resetcounter();
        this.getprogresspercent();
      }, 500);
      this.points-=10;
      this.resetcounter();
     
    } if(currentquestion==this.questionlist.length){
      this.quizcomplete=true;
      this.stopcounter(); 
      const passdata={
        name:this.name,
        totalquestion:this.questionlist.length,
        totalright:this.correctanswer,
        totalwrong:this.wronganswer,
        totalpoints:this.points
      }
     this.resultmaker.push(passdata);
     localStorage.setItem('resultmaker',JSON.stringify(this.resultmaker));
      
    }
    // const final=[this.name,this.points];
    //   console.log(final);
    

   }
   startcounter(){
    this.interval$=interval(1000).subscribe(val=>{
      this.counter--;
      if(this.counter==0){
        this.currentquestion++;
        this.counter=30;
        this.points-=10;
        this.wronganswer++
      }
    });
    setTimeout(() => {
      this.interval$.unsubscribe();
      
    }, 180000);

   }

   stopcounter(){
    this.interval$.unsubscribe();
    this.counter=0;

   }
   resetcounter(){
    this.stopcounter();
    this.counter=30;
    this.startcounter();

   }

   resetquiz(){
    this.resetcounter();
    this.getallquestion();
    this.points=0;
    this.counter=30;
    this.currentquestion=0;
    this.progress="0";

   }
   getprogresspercent(){
    this.progress=((this.currentquestion/this.questionlist.length)*100).toString();
    return this.progress
   }
   
    

}
