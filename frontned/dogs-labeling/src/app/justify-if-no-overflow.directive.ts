import { Directive, ElementRef, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appJustifyIfNoOverflow]'
})
export class JustifyIfNoOverflowDirective implements AfterViewInit {///////// TODO
  //justify-content center only if div is not overflown  
  constructor(private el:ElementRef) {
    if (this.el.nativeElement.tagName != "APP-SLIDING-CONTAINER") {
      throw new Error("appDisableBtn must be used only on APP-SLIDING-CONTAINER elements!");
    }
   }
   
  ngAfterViewInit(): void {
    // console.log("scroll width = %s, client width = %s", this.el.nativeElement.scrollWidth, this.el.nativeElement.clientWidth );
    if(this.el.nativeElement.scrollWidth <= this.el.nativeElement.clientWidth) {
      //is my if condition wrong here?
      this.el.nativeElement.style.justifyContent = "center";
    }
  }

}
