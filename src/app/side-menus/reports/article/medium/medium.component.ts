import { Component } from '@angular/core';
import { ArticleContent } from '../../models/article';

@Component({
    selector: 'app-medium',
    templateUrl: './medium.component.html',
    standalone: false
})
export class MediumComponent {
  contents: ArticleContent[] = [
    {
      title: '[Medium] Angular is Awesome',
      description: 'Angular is one of the most famous frontend framework',
      img: 'https://picsum.photos/50/50',
    },
    {
      title: '[Medium] Angular is better than React? ...',
      description: 'It all comes down to the business needs',
      img: 'https://picsum.photos/50/50',
    },
  ];
}
