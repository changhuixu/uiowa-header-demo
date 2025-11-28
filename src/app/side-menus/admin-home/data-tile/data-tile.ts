import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-data-tile',
  imports: [FontAwesomeModule, RouterLink],
  templateUrl: './data-tile.html',
  styleUrl: './data-tile.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DataTile implements OnInit {
  @Input() type!: 'primary' | 'success' | 'warning' | 'danger';
  @Input() icon!: IconDefinition;
  @Input() title!: string;
  @Input() n!: number;
  @Input() path!: string;
  number = '';
  constructor() {}

  ngOnInit() {
    if (this.n >= 10000) {
      this.number = (+this.n).toExponential(0);
    } else {
      this.number = this.n.toString();
    }
  }
}
