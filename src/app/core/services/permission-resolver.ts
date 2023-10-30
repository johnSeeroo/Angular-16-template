import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { data } from 'src/assets/data/permission';

@Injectable({
  providedIn: 'root',
})
export class PermissionsResolver implements Resolve<any> {
    user = data.data[0];  
  resolve(): Observable<any> {
    return of(this.user.permissions[0].LeadsModule);
  }
}
