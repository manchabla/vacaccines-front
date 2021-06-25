import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  @Input() color: string = ""
  @Input() title: string = "Titulo"
  @Input() vaccacines: Array<VacaccinesPanel> | undefined;

  @ViewChild('panelEl', { static: false }) panelEl!: ElementRef;

  constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.panelEl.nativeElement.style.border = `solid 3px ${this.color}`
    this.panelEl.nativeElement.style.backgroundColor = `${this.color}`
    this.panelEl.nativeElement.style.boxShadow = `-3px 10px 52px -18px ${this.color}`
  }

}


export interface VacaccinesPanel {
  name: string
  date: Date
}
