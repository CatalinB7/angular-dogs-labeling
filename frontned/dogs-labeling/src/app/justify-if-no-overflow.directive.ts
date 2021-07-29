import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appJustifyIfNoOverflow]'
})
export class JustifyIfNoOverflowDirective {
  //justify-content center only if div is not overflown  

  constructor(private el: ElementRef) {
    if (this.el.nativeElement.tagName != "APP-SLIDING-CONTAINER") {
      throw new Error("appDisableBtn must be used only on APP-SLIDING-CONTAINER elements!");
    }
  }

  ngAfterViewChecked(): void {
    if (this.el.nativeElement.scrollWidth <= this.el.nativeElement.clientWidth) {
      this.el.nativeElement.style.justifyContent = "center";
    } else {
      this.el.nativeElement.style.justifyContent = "unset";
    }
  }
}


