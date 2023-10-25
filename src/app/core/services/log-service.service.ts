import { Injectable } from '@angular/core';
import Bugsnag from '@bugsnag/js';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class LogServiceService {
 bugsnagkey=environment.bugsnagkey

  constructor() { Bugsnag.start({ apiKey: this.bugsnagkey })}

  public reportError(){
    Bugsnag.notify("this is a angular 16 templete test error")
  }
  
  
  
}
