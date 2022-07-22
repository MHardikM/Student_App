
import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';
import { style } from '@angular/animations';
@Directive({
  selector: '[appChangedirective]'
})
export class ChangedirectiveDirective {

  @Input() iscorrect:boolean=false

  constructor(private el:ElementRef,private rendor:Renderer2) { }
  @HostListener('click')answer(){
    if(this.iscorrect){
      this.rendor.setStyle(this.el.nativeElement,'background','green');
      this.rendor.setStyle(this.el.nativeElement,'color','white');
      this.rendor.setStyle(this.el.nativeElement,'border','2px solid grey');

    }
    else{
      this.rendor.setStyle(this.el.nativeElement,'background','red');
      this.rendor.setStyle(this.el.nativeElement,'color','white');
      this.rendor.setStyle(this.el.nativeElement,'border','2px solid grey');


    }
  }

}
