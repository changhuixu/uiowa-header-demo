import { Component } from '@angular/core';
import { ArticleContent } from '../../models/article';

@Component({
  selector: 'app-linkedin',
  templateUrl: './linkedin.component.html',
})
export class LinkedinComponent {
  contents: ArticleContent[] = [
    {
      title: '[LinkedIn] Angular is Awesome',
      description: 'Angular is one of the most famous frontend framework',
      img: 'https://picsum.photos/50/50',
    },
    {
      title: '[LinkedIn] Angular is better than React? ...',
      description: 'It all comes down to the business needs',
      img: 'https://picsum.photos/50/50',
    },
  ];
}
