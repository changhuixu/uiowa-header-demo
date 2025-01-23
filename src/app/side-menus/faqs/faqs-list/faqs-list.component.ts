import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

interface Movie {
  id: number;
  title: string;
}

@Component({
    selector: 'app-faqs-list',
    templateUrl: './faqs-list.component.html',
    styleUrls: ['./faqs-list.component.css'],
    standalone: false
})
export class FaqsListComponent implements OnInit {
  movies: Movie[] = [
    { id: 1, title: 'Episode I - The Phantom Menace' },
    { id: 2, title: 'Episode II - Attack of the Clones' },
    { id: 3, title: 'Episode III - Revenge of the Sith' },
    { id: 4, title: 'Episode IV - A New Hope' },
    { id: 5, title: 'Episode V - The Empire Strikes Back' },
    { id: 6, title: 'Episode VI - Return of the Jedi' },
    { id: 7, title: 'Episode VII - The Force Awakens' },
    { id: 8, title: 'Episode VII - The Force Awakens' },
    { id: 9, title: 'Episode VIII - The Last Jedi' },
    { id: 10, title: 'Episode IX – The Rise of Skywalker' },
  ];

  constructor() {}

  ngOnInit() {}

  drop(event: CdkDragDrop<Movie[]>) {
    moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
    console.log(this.movies);
  }
}
