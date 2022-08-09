import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  passeddata:any
  students:any
  storage:any
  attaindancesheet:any
  attaindance:any
 
  constructor() { 
    
    //  this.postdata();
     this.getdata();
    this.passeddata = localStorage.getItem("studentlist");
    this.passeddata = JSON.parse(this.passeddata);
    this.students = this.passeddata;
    this.storage=localStorage.getItem("attaindancesheet");
    this.attaindancesheet=JSON.parse(this.storage);
  
  }

  ngOnInit(): void {  }

  getdata(){
    fetch("http://localhost:4000/").then((response)=>{
      return response.json()
    }).then((data)=>{
console.log(data);
    })
  }



// data:any
// params:any 

// postdata(){
//   this.data={name:"me",class:"5",score:"99"}
//   this.params={
//     method:"post",
//     headers:{
//       contenttype:"api"
//     },
//     body:JSON.stringify(this.data)
//   }
//   fetch("https://jsonplaceholder.typicode.com/posts",this.params).then(res=>res.json()).then(dates=>console.log(dates))
// }

}
