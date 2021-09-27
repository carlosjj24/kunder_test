import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cellphone-banner',
  templateUrl: './cellphone-banner.component.html',
  styleUrls: ['./cellphone-banner.component.scss']
})
export class CellphoneBannerComponent implements OnInit {
  @Input() productName:string | undefined;
  @Input() productDescription:string | undefined;
  @Input() productImg:string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
