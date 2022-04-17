import {Injectable} from '@angular/core';
import {Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from '@angular/fire/auth';
import {LoginData} from '../components/menu/interfaces/login.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: Auth) {
  }

  login({email, password}: LoginData): Promise<any> {
    return signInWithEmailAndPassword(this.auth, email, password);
  };

  register({email, password}: LoginData): Promise<any> {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  logout(): Promise<any> {
    return signOut(this.auth);
  }
}
