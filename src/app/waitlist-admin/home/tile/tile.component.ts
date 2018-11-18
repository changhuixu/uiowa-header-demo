import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input
} from '@angular/core';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TileComponent implements OnInit {
  @Input() type: 'primary' | 'success' | 'warning' | 'danger';
  @Input() icon: string;
  @Input() title: string;
  @Input() n: number;
  @Input() path: string;
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
