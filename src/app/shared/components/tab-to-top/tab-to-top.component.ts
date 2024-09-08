import { Component, HostListener, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-tab-to-top',
  templateUrl: './tab-to-top.component.html',
  styleUrls: ['./tab-to-top.component.scss']
})
export class TabToTopComponent implements OnInit {
  public show: boolean | unknown= false;

  constructor( private viewScroller: ViewportScroller) { }

  ngOnInit(): void {
  }
  @HostListener("window:scroll", [])
  onWindowScroll(){
    const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if(number > 400){
      this.show = true;
    } else {
      this.show = false;
    }
  }

  taptotop(){
    this.viewScroller.scrollToPosition([0,0]);
  }
}
