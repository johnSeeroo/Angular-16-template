import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

// Auth Services
import { AuthenticationService } from '../services/auth.service';
import { AuthfakeauthenticationService } from '../services/authfake.service';
import { environment } from '../../../environments/environment';
import { data } from 'src/assets/data/permission';
@Injectable({ providedIn: 'root' })
export class AuthGuard  {
    constructor(
        private router: Router,
        private authenticationService: AuthenticationService,
        private authFackservice: AuthfakeauthenticationService
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        
        if (environment.defaultauth === 'firebase') {
            const currentUser = this.authenticationService.currentUser();
            if (currentUser) {
                // logged in so return true
                console.log(route)
                return this.checkLeadsModulePermission(state);
            }
            console.log(currentUser)
        } else {
            const currentUser = this.authFackservice.currentUserValue;
            if (currentUser) {
                // logged in so return true
                return this.checkLeadsModulePermission(state);
            }
            // check if user data is in storage is logged in via API.
            if(localStorage.getItem('currentUser')) {
                console.log(route)
                return this.checkLeadsModulePermission(state);
            }
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/auth/login'], { queryParams: { returnUrl: state.url } });
        return false;
        

    }
    private checkLeadsModulePermission(state: RouterStateSnapshot): boolean {debugger
        // Check if the 'LeadsModule' read permission is set to true in the permissions data
        // const leadsModulePermission = data.data[0].permissions.find(permission => permission.LeadsModule);
         const currentRoute = state.url;
        if (state.url === '/leads') {
            if (data.data[0].permissions[0].LeadsModule?.read) {
                // If the current route is '/leads' and 'LeadsModule' read permission is true, you can allow access
                return true;
            } else {
                // If the route is '/leads' but 'LeadsModule' read permission is false, deny access
                this.router.navigate(['/auth/errors/access-denied']);
                return false;
            }
        }
    
        // For other routes excluding '/leads', access is allowed
        return true;
    }
}
