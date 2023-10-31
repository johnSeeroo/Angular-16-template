import { Component } from '@angular/core';
import { Timelinedata } from './data';
@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent {
  timelines=Timelinedata[0].data

  constructor() {
    console.log(this.timelines); // Logging the Notesdata property to the console
  }

}
