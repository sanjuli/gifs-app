import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/service.service';
import { NgFor } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'gifs-search-box',
  standalone: true,
  imports: [NgFor],
  templateUrl: './search-box.component.html',
})
export class SearchBoxComponent {
  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>; //Guarda los elementos que se mandan con el keyup.enter

  constructor(private gifsService: GifsService) {} //importa el servicio(inyeccion)

  searchTag() {
    const newTag = this.tagInput.nativeElement.value; //guarda el valor del TagInput
    this.gifsService.searchTag(newTag); //guarda ese valor en el arreglo que se creo en el servicio
    this.tagInput.nativeElement.value = '';
  }
}
