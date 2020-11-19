import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../interfaces/user';
// import { Alert } from './../classes/alert';
// import { AlertService } from './alert.service';
import { Observable, BehaviorSubject, of as observableOf, from as fromPromise } from 'rxjs';
import { switchMap, first, map } from 'rxjs/operators';
// import { AlertType } from './../enums/alert-type.enum';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  public currentUser: Observable<any>;
  // public currentUserSnapshot: User | null;

  constructor(
    private router: Router,
    // private alertService: AlertService,
    private afAuth: AngularFireAuth,
    private db: AngularFirestore ) {
      this.currentUser = this.afAuth.authState.pipe(
        switchMap((user) => {
          if (user) {
            return this.db.doc<User>(`users/${user.uid}`).valueChanges();
          } else {
            return observableOf(null);
          }
        })
      );
      // this.setCurrentUserSnapshot();
  }

  public signup(firstName: string, lastName: string, email: string, password: string): Observable<boolean> {
    return fromPromise(
      this.afAuth.createUserWithEmailAndPassword(email, password)
        .then((result) => {
          if( result.user){
            const userRef: AngularFirestoreDocument<User> = this.db.doc(`users/${result.user.uid}`);
            const updatedUser = {
              id: `${result.user.uid}`,
              email: result.user.email,
              firstName,
              lastName,
              photoUrl: 'https://firebasestorage.googleapis.com/v0/b/chat-4f314.appspot.com/o/default_profile_pic.jpg?alt=media&token=15171a5a-45fa-4e7e-9a4a-522bb330f2ba',
              quote: 'Life is like a box of chocolates, you never know what you are gonna get!',
              bio: 'Bio is under construction...'
            }
            console.log(result);
            userRef.set(updatedUser);
            return true;
          }
          else{
            console.log(result);
            return false;
          }
        })
        .catch((err) => false)
    );
  }

  //   // Sign up with email/password
  // public signup (firstName: string, lastName: string, email: string, password: string) {
  //     return this.afAuth.createUserWithEmailAndPassword(email, password)
  //       .then((result) => {
  //         console.log(result)
  //       }).catch((error) => {
  //         window.alert(error.message)
  //       })
  // }

  public login(email: string, password: string): Observable<boolean> {
    return fromPromise(
      this.afAuth.signInWithEmailAndPassword(email, password)
        .then((user) => true)
        .catch(error => {
          console.log(error)
          // throw error
          return error;
        })
    );
  }

  public logout(): void {
    this.afAuth.signOut().then(() => {
      this.router.navigate(['/login']);
      // this.alertService.alerts.next(new Alert('You have been signed out.'));
    });
  }

  // private setCurrentUserSnapshot(): void {
  //   this.currentUser.subscribe(user => this.currentUserSnapshot = user);
  // }


}
