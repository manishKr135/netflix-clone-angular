import { Component, OnInit, inject } from '@angular/core';
import { AuthService } from './shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'netflix-clone';
  private authService = inject(AuthService);
  private router = inject(Router);
  ngOnInit(): void {
    if(!this.authService.isLoggedIn()){ 
      this.router.navigate(['/login'])
    }
  }
}
