import { Component,OnInit } from '@angular/core';
import Bugsnag from '@bugsnag/js';
import { LogServiceService } from './core/services/log-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'velzon';
  constructor(private logservice:LogServiceService) {     
    
    
  }
  ngOnInit(): void {
    this.logservice.reportError();
  }
  
}
