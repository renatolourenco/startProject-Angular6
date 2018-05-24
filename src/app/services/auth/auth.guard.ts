import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";

import { DataService } from './../data/data.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(
        private dataService: DataService,
        private router: Router
    ) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | boolean {

        if (this.dataService.getCookie() != '') {
            return true;
        } else {
            console.log('Error 401');
            this.router.navigate(['/login']);
        }
    }

}
