import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private router = inject(Router);
  constructor() { }
  isLoggedIn(){
    return sessionStorage.getItem('loggedInUser');
  }

  signOut(){
    sessionStorage.removeItem("loggedInUser");
    this.router.navigate(['/login']);
  }
}
