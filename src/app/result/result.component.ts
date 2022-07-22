import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  
  datarecieve:any
 totalque:any
 totalr:any
 totalw:any
 totalp:any
 constructor(){ 
  this.datarecieve=localStorage.getItem("resultmaker");
  this.datarecieve=JSON.parse(this.datarecieve);
  this.totalque=this.datarecieve.totalquestion;
  this.totalr=this.datarecieve.totalright;
  this.totalw=this.datarecieve.totalwrong;
  this.totalp=this.datarecieve.totalpoints; 
 }




  ngOnInit(): void {
  }

}
