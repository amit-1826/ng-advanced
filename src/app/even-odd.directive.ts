import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appEvenOdd]',
  host: {
    '(click)': 'onClick()',
    '(mouseover)': 'onMouseOver()'
  }
})
export class EvenOddDirective {

  @Input() number!: number;
  @Input() divisibleBy!: number;

  /*@HostListener('click', ['$event.target'])
  onClick() {
    if (this.number && this.number % this.divisibleBy === 0) {
      this.elementRef.nativeElement.style.color = 'green'
    } else {
      this.elementRef.nativeElement.style.color = 'red'
    }
  }*/

  constructor(private elementRef: ElementRef) { }

  onClick() {
    if (this.number && this.number % this.divisibleBy === 0) {
      this.elementRef.nativeElement.style.color = 'green'
    } else {
      this.elementRef.nativeElement.style.color = 'red'
    }
  }

  onMouseOver() {
    
    if (this.number && this.number % this.divisibleBy === 0) {
      this.elementRef.nativeElement.style.color = 'blue'
    } else {
      this.elementRef.nativeElement.style.color = 'yellow'
    }
  }
}
