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
import { HttpClient } from '@angular/common/http';

interface City {
  state: string;
  cities: string[];
}

interface CityScore {
  city: string;
  score: number;
}

@Component({
    selector: 'app-typeahead',
    templateUrl: './typeahead.component.html',
    styleUrls: ['./typeahead.component.css'],
    standalone: false
})
export class TypeaheadComponent implements OnInit {
  dept!: OrgDeptNode;
  depts: OrgDeptNode[] = [];
  allCities: City[] = [];
  cities: CityScore[] = [];
  destination = '';

  states: string[] = [];
  citiesFiltered: string[] = [];
  state = '';
  city = '';

  constructor(private http: HttpClient) {}

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

    this.http.get<City[]>('assets/cities.json').subscribe((x) => {
      this.allCities = x;
      x.forEach((s) => {
        this.states.push(s.state);
        s.cities.forEach((c) => {
          this.cities.push({
            city: `${c}, ${s.state}`,
            score: 0,
          });
        });
      });
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

  formatter2 = (city: string) => city;

  search2 = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      filter((term) => term.trim().length >= 2),
      map((term) => {
        const terms = [
          ...new Set(
            term
              .toLocaleLowerCase()
              .replace(/[^a-z]+/gi, ' ')
              .split(' ')
              .filter((s) => s)
          ),
        ];
        this.cities.forEach((x) => {
          x.score = 0;
          terms.forEach((t) => {
            x.city
              .replace(/[^a-z]+/gi, ' ')
              .split(' ')
              .map((cp) => cp.toLocaleLowerCase())
              .forEach((cp) => {
                if (t === cp) {
                  x.score += 20 * t.length;
                } else {
                  const i = cp.indexOf(t);
                  if (i >= 0 && i < 10) {
                    x.score += (10 - i) * t.length;
                  }
                }
              });
          });
        });
        return this.cities
          .filter((x) => x.score > 0)
          .sort((a, b) => b.score - a.score)
          .map((x) => x.city)
          .slice(0, 10);
      })
    );

  validate(el: HTMLInputElement) {
    if (!this.destination) {
      el.classList.add('is-invalid');
    } else {
      el.classList.remove('is-invalid');
    }
  }

  filter() {
    this.city = '';
    this.citiesFiltered =
      this.allCities.find((x) => x.state === this.state)?.cities ?? [];
  }
}
