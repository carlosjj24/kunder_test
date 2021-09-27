import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-plan-banner',
  templateUrl: './plan-banner.component.html',
  styleUrls: ['./plan-banner.component.scss']
})
export class PlanBannerComponent implements OnInit {
  @Input() backgroundImg:string | undefined;
  @Input() productDescription:string | undefined;
  @Input() buttonText:string | undefined;
  @Input() link:string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
