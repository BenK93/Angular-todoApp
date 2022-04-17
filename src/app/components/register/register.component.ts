import {Component, OnInit} from '@angular/core';
import {LoginData} from '../menu/interfaces/login.interface';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }

  register(data: LoginData): any {
    this.authService
      .register(data)
      .then(() => this.router.navigate(['/tasks']))
      .catch((e) => console.log(e.message));
  }

}
