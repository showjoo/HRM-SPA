import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AccountService } from '../Services/account.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanLoad {
  LoggedIn:boolean = false;
  isAdmin:boolean = false;

  constructor(private accountService:AccountService) { }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      this.accountService.isLoggedIn.subscribe(data => {
        this.LoggedIn = data;
      });

      this.accountService.currentUser.subscribe(data => {
        this.isAdmin = data.isAdmin;
      });

      if ((localStorage.getItem('token') != null) && (this.LoggedIn) && (this.isAdmin)){
        return true;
      }
      else {
        return false;
      };
  }
}
