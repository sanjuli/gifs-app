import { Component, Input, OnInit } from '@angular/core';
import { GifsService } from '../../services/service.service';
import { Gifs } from '../../interfaces/gifs-interfaces';
import { NgFor } from '@angular/common';
import { CardGifComponent } from '../card-gif/card-gif.component';
import { LazyImageComponent } from '../../../shared/components/lazy-image/lazy-image.component';

@Component({
  selector: 'gifs-card-list',
  standalone: true,
  imports: [NgFor, CardGifComponent, LazyImageComponent],
  templateUrl: './card-list.component.html',
})
export class CardListComponent {
  @Input()
  public gifs: Gifs[] = [];
  constructor() {}
}
