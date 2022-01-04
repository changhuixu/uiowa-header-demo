import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbTypeahead } from '@ng-bootstrap/ng-bootstrap';
import { Observable, Subject, merge } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
} from 'rxjs/operators';
import { orgChart } from '../models/org-chart';
import { OrgDeptNode } from '../models/org-dept-node';

@Component({
  selector: 'app-typeahead',
  templateUrl: './typeahead.component.html',
  styleUrls: ['./typeahead.component.css'],
})
export class TypeaheadComponent implements OnInit {
  dept!: OrgDeptNode;
  depts: OrgDeptNode[] = [];
  constructor() {}

  ngOnInit() {
    const nodes = orgChart
      .map((x) => x.children)
      .reduce((a, v) => a.concat(v), []);
    this.depts = nodes.map((x) => {
      const [org, dept] = x.id.split('-');
      const [_, name] = x.text.split(' - ');
      return {
        id: x.id,
        org: org,
        dept: dept,
        name: name,
        text: x.id + ' - ' + name,
        state: 0,
      } as OrgDeptNode;
    });
  }

  @ViewChild('instance', { static: true }) instance!: NgbTypeahead;
  focus$ = new Subject<string>();
  click$ = new Subject<string>();
  formatter = (result: OrgDeptNode) => result.text;

  search = (text$: Observable<string>) => {
    const debouncedText$ = text$.pipe(
      debounceTime(200),
      distinctUntilChanged()
    );
    const clicksWithClosedPopup$ = this.click$.pipe(
      filter(() => !this.instance.isPopupOpen())
    );
    const inputFocus$ = this.focus$;

    return merge(debouncedText$, inputFocus$, clicksWithClosedPopup$).pipe(
      map((term) =>
        (term === ''
          ? this.depts
          : this.depts.filter(
              (v) => v.text.toLowerCase().indexOf(term.toLowerCase()) > -1
            )
        ).slice(0, 10)
      )
    );
  };
}
