import { Directive, effect, ElementRef, inject, input } from '@angular/core';

@Directive({
  selector: '[appItemlistmodified]'
})
export class Itemlistmodified {
  isCompleted = input(false);
  element = inject(ElementRef);

  markCompleteEffect = effect(() => {
    if (this.isCompleted()) this.element.nativeElement.style.textDecoration = "line-through";
    else this.element.nativeElement.style.textDecoration = "none";
  });
}
