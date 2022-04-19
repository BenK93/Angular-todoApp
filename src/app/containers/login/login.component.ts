import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';
import {LoginData} from '../../interfaces/Login.interface';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // @Output() loginFunction = new EventEmitter<any>();
  public loginValid = true;
  public email = '';
  public password = '';

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router) {
  }

  ngOnInit(): void {
  }

  public onSubmit(): void {
    this.login({
        email: this.email,
        password: this.password
    });
  }

  login(loginData: LoginData): any {
    this.authService
      .login(loginData)
      .then(() => this.router.navigate(['/tasks']))
      .catch((e) => console.log(e.message));
  }

  loginWithGoogle(): any {
    this.authService
      .loginWithGoogle()
      .then(() => this.router.navigate(['/tasks']))
      .catch((e) => console.log(e.message));
  }
}
