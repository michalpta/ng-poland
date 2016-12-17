import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TeamComponent } from './team/team.component';
import { BuddyComponent } from './team/buddy/buddy.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { AngularFireModule } from 'angularfire2';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'team', component: TeamComponent },
  { path: 'team/buddy', component: BuddyComponent },

  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: '**', component: NotFoundComponent }
];

var firebaseConfig = {
    apiKey: "AIzaSyDp2L5Y6HwLBMOdOs4HZOwvVWj4X7fwmaI",
    authDomain: "ngpoland-b5bd7.firebaseapp.com",
    databaseURL: "https://ngpoland-b5bd7.firebaseio.com",
    storageBucket: "ngpoland-b5bd7.appspot.com",
    messagingSenderId: "207681377222"
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TeamComponent,
    BuddyComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
