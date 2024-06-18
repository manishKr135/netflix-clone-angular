declare var google: any;
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, AfterViewInit{
  private router = inject(Router);
  @ViewChild('googleBtn')
  googleButton: ElementRef = {} as ElementRef;
  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    
    google.accounts.id.initialize({
      client_id: '340291883459-gvooaf8msaef0ajkuokbfvjk50o1tl4r.apps.googleusercontent.com',
      callback: (res: any)=> this.handleLogin(res)
    });

    google.accounts.id.renderButton(this.googleButton.nativeElement, {
      theme: 'filled_blue',
      size: 'large',
      shape: 'rectangle',
      width: 350
    })
  }

  private decodeToken(token: string){
    return JSON.parse(atob(token.split('.')[1]))
  }
  handleLogin(res: any){
    if(res){
      let payload = JSON.stringify(this.decodeToken(res.credential));
      sessionStorage.setItem("loggedInUser", payload);
      this.router.navigate(['/banner']);
    }
  }
}
