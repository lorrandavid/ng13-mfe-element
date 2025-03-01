import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouterConnection } from './connect-router.util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'mfe1';

  private routerConnection: RouterConnection | undefined;

  constructor(private router: Router) {}

  ngOnDestroy(): void {
    this.routerConnection?.disconnect();
  }

  ngOnInit(): void {
    this.routerConnection = new RouterConnection(this.router);
  }
}
