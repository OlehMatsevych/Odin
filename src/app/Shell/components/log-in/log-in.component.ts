import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent {
  constructor(
    private router: Router
    ){}
  public login(){
    //var success = this.loginService.login(username, password);
    let success = true;
    if (success) {
      console.log(this.router);
      this.router.navigate(['/dashboard']); 
    } else {
      console.log("Login failed, display error to user");
    }
  }
}
