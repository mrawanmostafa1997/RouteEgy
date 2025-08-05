import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css',
})
export class Portfolio {
  @ViewChild('viewPort') viewPort!: ElementRef<HTMLDivElement>;
  photos: string[] = [
    './Images/port1.png',
    './Images/port2.png',
    './Images/port3.png',
    './Images/port1.png',
    './Images/port2.png',
    './Images/port3.png',
  ];
  previewImage(tagEle: HTMLDivElement): void {
    if (tagEle) {
      const imageUrl =
        tagEle.getElementsByTagName('img')[0].getAttribute('src') || '';
      console.log(imageUrl);
      this.viewPort.nativeElement.innerHTML = `
    <img src="${imageUrl}" class="img-fluid rounded-3 shadow-lg d-flex align-items-center justify-content-center m-auto" style="max-width: 100%; max-height: 100%;" />
  `;
      this.viewPort.nativeElement.classList.remove('opacity-0');
      this.viewPort.nativeElement.classList.remove('d-none');
      this.viewPort.nativeElement.classList.add('opacity-100');
      console.log(this.viewPort.nativeElement);
    } else {
      this.viewPort.nativeElement.classList.remove('d-none');
    }
  }
}
