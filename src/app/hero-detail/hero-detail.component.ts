import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'uss-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero?: Hero;

  constructor() { }

  ngOnInit(): void {
  }

}
