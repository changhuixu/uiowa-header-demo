import { ChangeDetectionStrategy, Component, OnInit, input } from '@angular/core';
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
  readonly type = input.required<'primary' | 'success' | 'warning' | 'danger'>();
  readonly icon = input.required<IconDefinition>();
  readonly title = input.required<string>();
  readonly n = input.required<number>();
  readonly path = input.required<string>();
  number = '';
  constructor() {}

  ngOnInit() {
    if (this.n() >= 10000) {
      this.number = (+this.n()).toExponential(0);
    } else {
      this.number = this.n().toString();
    }
  }
}
