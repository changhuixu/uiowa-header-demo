import { Component } from '@angular/core';
import { ArticleContent } from '../../models/article';

@Component({
  selector: 'app-scoop',
  templateUrl: './scoop.component.html',
})
export class ScoopComponent {
  contents: ArticleContent[] = [
    {
      title: '[Scoop] Angular is Awesome',
      description: 'Angular is one of the most famous frontend framework',
      img: 'https://picsum.photos/50/50',
    },
    {
      title: '[Scoop] Angular is better than React? ...',
      description: 'It all comes down to the business needs',
      img: 'https://picsum.photos/50/50',
    },
  ];
}
