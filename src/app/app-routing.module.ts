import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExamstartComponent } from './examstart/examstart.component';
import { MainpartComponent } from './mainpart/mainpart.component';
import { QuestionsComponent } from './questions/questions.component';
import { ReportComponent } from './report/report.component';
import { ResultComponent } from './result/result.component';
import { StudentattaindanceComponent } from './studentattaindance/studentattaindance.component';

const routes: Routes = [
  {path:'',component:MainpartComponent},
  {path:'exam',component:QuestionsComponent},
  {path:'home',component:MainpartComponent},
  {path:'result',component:ResultComponent},
  {path:'studentattaindence',component:StudentattaindanceComponent},
  {path:'examlogin',component:ExamstartComponent},
  {path:'report',component:ReportComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
