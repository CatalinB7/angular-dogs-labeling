import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appDisableBtn]'
})
export class DisableBtnDirective {
//disables button after click
  constructor(private el:ElementRef) { 
    if (el.nativeElement.tagName != "BUTTON") {
      throw new Error("appDisableBtn must be used only on buttons!");
    }
   }

  @HostListener("click") onClick() {
    this.el.nativeElement.disabled = true;
  }
}
