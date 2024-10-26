import { Component } from '@angular/core';
import { SearchBoxComponent } from '../../components/search-box/search-box.component';
import { CardListComponent } from '../../components/card-list/card-list.component';
import { GifsService } from '../../services/service.service';
import { Gifs } from '../../interfaces/gifs-interfaces';
import { CardGifComponent } from '../../components/card-gif/card-gif.component';
import { LazyImageComponent } from '../../../shared/components/lazy-image/lazy-image.component';

@Component({
  selector: 'gifs-home-page',
  standalone: true,
  imports: [
    SearchBoxComponent,
    CardListComponent,
    CardGifComponent,
    LazyImageComponent,
  ],
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {
  constructor(private gifsService: GifsService) {}

  get gif(): Gifs[] {
    return this.gifsService.gifsList;
  }
}
