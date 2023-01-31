import { Component } from '@angular/core';

@Component({
  selector: 'app-match-picker',
  templateUrl: './match-picker.component.html',
  styleUrls: ['./match-picker.component.css']
})
export class MatchPickerComponent {
  shortMatch: number = Math.floor(Math.random() * 5) + 1;
  hasLost: boolean = false;
  shownMatch1: string = "previewOfMatch";
  shownMatch2: string = "previewOfMatch";
  shownMatch3: string = "previewOfMatch";
  shownMatch4: string = "previewOfMatch";
  shownMatch5: string = "previewOfMatch";
  shownMatch6: string = "previewOfMatch";

  constructor() {
  }

  showMatch(value: number){
    if (value === this.shortMatch){
      this.hasLost = true;
    }else{
      switch (value){
        case 1: {
          this.shownMatch1 = "match";
          break;
        }
        case 2: {
          this.shownMatch2 = "match";
          break;
        }
        case 3: {
          this.shownMatch3 = "match";
          break;
        }
        case 4: {
          this.shownMatch4 = "match";
          break;
        }
        case 5: {
          this.shownMatch5 = "match";
          break;
        }
        case 6: {
          this.shownMatch6 = "match";
          break;
        }
      }
    }
  }

  restart(){
    this.hasLost = false;
    this.shortMatch = Math.floor(Math.random() * 5) + 1;
    this.shownMatch1 = "previewOfMatch";
    this.shownMatch2 = "previewOfMatch";
    this.shownMatch3 = "previewOfMatch";
    this.shownMatch4 = "previewOfMatch";
    this.shownMatch5 = "previewOfMatch";
    this.shownMatch6 = "previewOfMatch";
  }

}
