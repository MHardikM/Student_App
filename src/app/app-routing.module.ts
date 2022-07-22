import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainpartComponent } from './mainpart/mainpart.component';
import { QuestionsComponent } from './questions/questions.component';
import { ResultComponent } from './result/result.component';
import { StudentattaindanceComponent } from './studentattaindance/studentattaindance.component';

const routes: Routes = [
  {path:'',component:MainpartComponent},
  {path:'exam',component:QuestionsComponent},
  {path:'home',component:MainpartComponent},
  {path:'result',component:ResultComponent},
  {path:'studentattaindence',component:StudentattaindanceComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
