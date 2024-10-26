import { NgIf, NgStyle } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  standalone: true,
  imports: [NgIf, NgStyle],
  templateUrl: './lazy-image.component.html',
})
export class LazyImageComponent implements OnInit {
  @Input()
  public url!: string;

  @Input()
  public alt: string = '';

  public hasLoaded: boolean = false;

  ngOnInit(): void {
    if (!this.url) throw new Error('Method not implemented.');
  }

  onLoad() {
    this.hasLoaded = true;
  }
}
