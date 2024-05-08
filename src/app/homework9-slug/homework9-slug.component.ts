import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-homework9-slug',
  templateUrl: './homework9-slug.component.html',
  styleUrls: ['./homework9-slug.component.css'],
})
export class Homework9SlugComponent implements OnInit {
  protected slug: string = '';

  constructor(private readonly route: ActivatedRoute) {}

  ngOnInit(): void {
    this.slug = this.route.snapshot.paramMap.get('slug') || '';
  }
}
