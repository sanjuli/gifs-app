import { Component } from '@angular/core';
import { GifsService } from '../../../gifs/services/service.service';
import { NgFor, TitleCasePipe } from '@angular/common';
import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';
import { Gifs, SearchResponse } from '../../../gifs/interfaces/gifs-interfaces';
import { SearchBoxComponent } from '../../../gifs/components/search-box/search-box.component';

@Component({
  selector: 'shared-sidebar',
  standalone: true,
  imports: [NgFor, TitleCasePipe],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  public tag: string[] = this.gifsService.tagsHistory;

  public gifsList: Gifs[] = [];
  constructor(private gifsService: GifsService) {}

  get tags() {
    return this.gifsService.tagsHistory;
  }
  get gifs(): Gifs[] {
    return this.gifsService.gifsList;
  }

  putInHome(tag: string): void {
    //guarda el valor del TagInput

    this.gifsService.searchTag(tag);
  }
}
