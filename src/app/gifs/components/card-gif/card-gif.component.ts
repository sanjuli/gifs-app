import { NgFor } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Gifs } from '../../interfaces/gifs-interfaces';
import { CardListComponent } from '../card-list/card-list.component';
import { LazyImageComponent } from '../../../shared/components/lazy-image/lazy-image.component';

@Component({
  selector: 'card-gif',
  standalone: true,
  imports: [NgFor, LazyImageComponent],
  templateUrl: './card-gif.component.html',
})
export class CardGifComponent implements OnInit {
  @Input()
  public gif!: Gifs;
  constructor() {}
  ngOnInit(): void {
    if (!this.gif) throw new Error('Gif property is required');
  }
}
