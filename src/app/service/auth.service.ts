import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import * as firebase from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<firebase.User|any>;
  constructor(private afAuth: AngularFireAuth,private route:ActivatedRoute,private router:Router) {
    this.user$ = afAuth.authState;
  }

  login(){
    let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl',returnUrl);

    this.afAuth.signInWithRedirect(new firebase.GoogleAuthProvider());
  }
  logout(){
    this.afAuth.signOut();
  }
}
