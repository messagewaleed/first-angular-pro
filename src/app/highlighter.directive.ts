import { style } from '@angular/animations';
import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlighter]'
})
export class HighlighterDirective {

  @Input('appHighlighter') color !: string;

  constructor(private element : ElementRef) {
    // console.log(element);
    // element.nativeElement.style.backgroundColor = "yellow";
    
    // element.nativeElement.style.color = "blue";
   }

   ngOnInit(){
    // this.element.nativeElement.style.backgroundColor = this.color;
   }

   @HostListener('mouseenter') addHighlighter(){
    this.element.nativeElement.style.backgroundColor = this.color;
   }

   @HostListener('mouseleave') removeHighlighter(){
    this.element.nativeElement.style.backgroundColor = "";
   }


}
