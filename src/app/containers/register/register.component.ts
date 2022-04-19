import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public loginValid = true;
  public email = '';
  public password = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }

  register(): any {
    this.authService
      .register({
        email: this.email,
        password: this.password
      })
      .then(() => this.router.navigate(['/tasks']))
      .catch((e) => console.log(e.message));
  }

}
