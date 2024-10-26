import { HttpClient, HttpParams } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Gifs, SearchResponse } from '../interfaces/gifs-interfaces';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  public gifsList: Gifs[] = [];
  private _tagsHistory: string[] = [];
  private apiKey: string = 'dmBmm19LGXB50oRGBMkiaF1FbN7ISfxd';
  public url: string = 'https://api.giphy.com/v1/gifs';

  constructor(private http: HttpClient) {
    this.loadLocalStorage();
  }

  get tagsHistory() {
    return [...this._tagsHistory];
  }
  private organizeHistory(tag: string): void {
    tag = tag.toLowerCase();

    if (this._tagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter((oldTag) => oldTag !== tag);
    }
    this._tagsHistory.unshift(tag);
    this._tagsHistory = this._tagsHistory.splice(0, 10);
    this.saveLocalStorage();
  }

  searchTag(Tag: string): void {
    if (Tag.length === 0) return;
    this.organizeHistory(Tag);

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', 10)
      .set('q', Tag);

    this.http
      .get<SearchResponse>(`${this.url}/search`, { params })
      .subscribe((resp) => {
        this.gifsList = resp.data;
      });

    // '
  }

  private saveLocalStorage(): void {
    localStorage.setItem('history', JSON.stringify(this._tagsHistory));
  }

  private loadLocalStorage(): void {
    if (!localStorage.getItem('history') || !localStorage.getItem('first-item'))
      return;

    this._tagsHistory = JSON.parse(localStorage.getItem('history')!);
    if (this._tagsHistory.length === 0) return;
    this.searchTag(this._tagsHistory[0]);
  }
}
