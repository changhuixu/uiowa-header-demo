import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map, Observable, startWith } from 'rxjs';
import { childRouteSideNavItems, SideNavItem } from '../child-routes';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
  standalone: false,
})
export class LayoutComponent {
  sideNavItems: SideNavItem[] = childRouteSideNavItems;
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
