import {Injectable} from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut
} from '@angular/fire/auth';
import {LoginData} from '../interfaces/Login.interface';

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

  loginWithGoogle(): Promise<any> {
    return signInWithPopup(this.auth, new GoogleAuthProvider());
  }

  logout(): Promise<any> {
    return signOut(this.auth);
  }
}
