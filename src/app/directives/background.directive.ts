import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[background]'
})
export class BackgroundDirective {
  @Input() defaultBgImage: string = 'linear-gradient(90deg, rgb(113, 8, 30) 0%, rgb(215, 72, 92) 100%)';
  @Input() hoverBgImage: string = 'linear-gradient(90deg, rgb(9, 4, 5) 0%, rgb(215, 72, 92) 100%)';
  constructor(private el: ElementRef) { }

  @HostListener('mouseenter')
  onHover() {
    this.el.nativeElement.style.backgroundImage = this.hoverBgImage;
  }
  @HostListener('mouseleave')
  outHover() {
    this.el.nativeElement.style.backgroundImage = this.defaultBgImage;
  }

}
