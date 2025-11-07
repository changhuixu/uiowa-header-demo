import { Component, Input, TemplateRef } from '@angular/core';
import { ArticleContent } from '../models/article';

@Component({
    selector: 'app-article',
    template: `
    <ng-container *ngIf="contents?.length">
      <ng-container [ngTemplateOutlet]="templateRef"> </ng-container>
    </ng-container>
  `,
    standalone: false
})
export class ArticleComponent {
  @Input() contents: ArticleContent[] = [];
  @Input('template') templateRef!: TemplateRef<any>;
}
