import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-moy',
  templateUrl: './moy.component.html',
  styleUrls: ['./moy.component.css']
})
export class MoyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  selectedButton: string | null = null;

  selectButton(buttonId: string): void {
    this.selectedButton = buttonId;
  }

  isSelected(buttonId: string): boolean {
    return this.selectedButton === buttonId;
  }
}
