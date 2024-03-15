import { Component, OnInit } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { distinctUntilChanged, map } from "rxjs/operators";
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
} from "@angular/router";
import { AppState } from "./reducers";
import { isLoggedIn, isLoggedOut } from "./auth/auth.selectors";
import { login, logout } from "./auth/auth.actions";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit{
  loading = true;

  isLoggedIn$: Observable<boolean>;

  isLoggedOut$: Observable<boolean>;

  constructor(private router: Router, private store: Store<AppState>) {}

  ngOnInit() {
    this.router.events.subscribe((event)=>{});

    this.isLoggedIn$ = this.store.pipe(
      map(state=> !!state["auth"].user)
    );
    this.isLoggedOut$ = this.store.pipe(
      map(state=> !state["auth"].user)
    )
  }
  logout() {
  }
}
