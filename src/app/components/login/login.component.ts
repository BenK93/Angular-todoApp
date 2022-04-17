import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @Output() loginFunction = new EventEmitter<any>();
  public loginValid = true;
  public email = '';
  public password = '';

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  public onSubmit(): void {
    this.loginFunction.emit({
      email: this.email,
      password: this.password
    });
  }
}
