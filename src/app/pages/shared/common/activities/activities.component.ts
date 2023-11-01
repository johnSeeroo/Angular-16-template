import { Component, Input } from '@angular/core';
import { Activities, Appointment } from './data';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss']
})
export class ActivitiesComponent {
  @Input() leadId!: number;
  activities=Activities[0].data
  appointments=Appointment[0].data

  constructor() {
    console.log(this.activities); 
  }


}
