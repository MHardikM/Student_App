import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainpartComponent } from './mainpart/mainpart.component';
import{ HttpClientModule} from '@angular/common/http';
import { QuestionsComponent } from './questions/questions.component';
import { ChangedirectiveDirective } from './changedirective.directive';
import { ResultComponent } from './result/result.component';
import { StudentattaindanceComponent } from './studentattaindance/studentattaindance.component'
@NgModule({
  declarations: [
    AppComponent,
    MainpartComponent,
    QuestionsComponent,
    ChangedirectiveDirective,
    ResultComponent,
    StudentattaindanceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
