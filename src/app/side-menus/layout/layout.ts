import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { filter, map, Observable, startWith } from 'rxjs';
import { childRoutes, SideNavItem } from '../side-menus.routes';

@Component({
  selector: 'app-layout',
  imports: [AsyncPipe, RouterLink, RouterLinkActive, FontAwesomeModule, RouterOutlet],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {
  sideNavItems: SideNavItem[] = childRoutes
    .filter((x) => x.data)
    .map((x) => {
      return {
        icon: x.data!['icon'],
        text: x.data!['text'],
        path: x.path,
      } as SideNavItem;
    });
  heading$: Observable<string>;

  constructor(activatedRoute: ActivatedRoute, private router: Router) {
    const defaultText = activatedRoute.snapshot.firstChild!.data['text'];
    this.heading$ = this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      map(() => activatedRoute.snapshot.firstChild!),
      map((c) => c.data['text']),
      startWith(defaultText)
    );
  }
}
