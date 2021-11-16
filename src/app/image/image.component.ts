import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {
  @Input() imageSrc: string = '/assets/images/hotel.jpeg';
  @Input() altTxt?: string = 'Pondicherry French Hotel';
  @Input() figCaptionTxt?: string = 'The French quarter or white Town area in Pondicherry is filled';
  @Input() imgOpacity?: number = 1;


  constructor() { }

  ngOnInit(): void {
  }

}
