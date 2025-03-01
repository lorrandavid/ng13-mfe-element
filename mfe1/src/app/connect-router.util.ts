import { Router } from "@angular/router";

export class RouterConnection {
  constructor(protected router: Router, private useHash = false) {
    let url: string;
    if (!this.useHash) {
      url = `${location.pathname.substring(1)}${location.search}`;
      router.navigateByUrl(url);
      window.addEventListener('popstate', () => {
        router.navigateByUrl(url);
      });
    }
    else {
      url = `${location.hash.substring(1)}${location.search}`;
      router.navigateByUrl(url);
      window.addEventListener('hashchange', () => {
        router.navigateByUrl(url);
      });
    }
  }

  disconnect(): void {
    if (!this.useHash) {
      window.removeEventListener('popstate', () => {});
    } else {
      window.removeEventListener('hashchange', () => {});
    }
  }
}
