import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/internal/operators/map';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService {

  
  constructor(private auth:AuthService, private router:Router) { }

  canActivate(route:any,state: RouterStateSnapshot):
  | Observable<boolean | UrlTree>
  | Promise<boolean | UrlTree>
  | boolean
  | UrlTree{
    return this.auth.user$.pipe(map((user: any) =>{
      if(user) return true;

      this.router.navigate(['/login'],{queryParams:{ returnUrl: state.url }});
      return false;
    }))
  }

}
