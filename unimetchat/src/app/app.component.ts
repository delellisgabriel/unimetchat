import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database-deprecated';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';
import * as firebase from 'firebase/app';
import { AuthService } from './shared/auth.service';

@Component({
  selector: 'lsl-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'lsl';
  topics: FirebaseListObservable<any[]>;
  user = null;
constructor(private auth: AuthService, public db: AngularFireDatabase) {}

	ngOnInit() {
	    this.auth.getAuthState().subscribe(
	      (user) => this.user = user);
	    this.topics = this.db.list('/topics');
	}

	loginWithGoogle() {
		this.auth.loginWithGoogle();
	}

	isLoggedIn() {
		return this.auth.isLoggedIn();
	}
}
//https://github.com/angular/angularfire2/blob/master/docs/version-4-upgrade.md
//https://github.com/angular/angularfire2/issues/854