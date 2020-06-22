import { Component, OnInit, HostListener, Input } from '@angular/core';

@Component({
  selector: '[ipssi-tooltip]',
  templateUrl: './ipssi-tooltip.component.html',
  styleUrls: ['./ipssi-tooltip.component.css']
})
export class IpssiTooltipComponent implements OnInit {
  @Input('ipssi-tooltip') text: string;
  show: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  @HostListener('mouseenter')
  public onMouseEnter() {
    this.show = true;
  }

  @HostListener('mouseleave')
  public onMouseLeave() {
    this.show = false;
  }
}
