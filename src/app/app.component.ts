import { Component } from '@angular/core';
import { AuthService } from './service/auth.service';
import { Router } from '@angular/router';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private userservice:UserService,private auth:AuthService,private router: Router){
    auth.user$.subscribe(user =>{
      if(user){
        userservice.save(user);

        let returnUrl = (localStorage.getItem('returnUrl')!);
        if (returnUrl){
          localStorage.removeItem('returnUrl');
          router.navigateByUrl(returnUrl);
        }
      }
    })
  }
}
