import { Component, input, output } from '@angular/core';

@Component({
  selector: 'input-search',
  imports: [],
  templateUrl: './input-search.html',
})
export class InputSearch {
  placeholder = input<string>('Buscar');
  inputBuscar = output<string>();

}
