import { Component, OnInit } from '@angular/core';
import { BannerService } from '@services/banner.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  
  constructor(private bannerService: BannerService) { }

  show:boolean = false;
  bannerType:string = "";
  data:any={};

  ngOnInit(): void {
    this.bannerService.getBannerInformation().subscribe((response) => {
      this.show = response.show;
      this.bannerType = response.type;
      if (this.bannerType==="cellphone") {
        this.data = {
          productImg: response.productImg,
          productName: response.productName,
          productDescription: response.productDescription
        }
      }else{
        this.data = {
          backgroundImg: response.backgroundImg,
          buttonText: response.buttonText,
          link: response.link,
          productDescription: response.productDescription
        }
      }
    })
  }

  showBanner(type:string):boolean {
    return type === this.bannerType
  }

}
