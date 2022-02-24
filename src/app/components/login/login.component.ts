import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginValid = true;
  public username = '';
  public password = '';

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  public onSubmit(): void {
    if (this.username === 'example@gmail.com' && this.password === '123123') {
      this.router.navigate(['']);
    } else {
      this.loginValid = false;
    }
  }
}
