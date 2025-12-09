import { Component, effect, input, output, signal } from '@angular/core';

@Component({
  selector: 'input-search',
  imports: [],
  templateUrl: './input-search.html',
})
export class InputSearch {
  placeholder = input<string>('Buscar');
  inputBuscar = output<string>();

  inputValue = signal<string>('');

  debounceEffect = effect((onCleanup)=>{
    const value = this.inputValue();
    const timeout = setTimeout(()=>{
      this.inputBuscar.emit(value);
    }, 500);

    onCleanup(()=>{
      clearTimeout(timeout);
    })
  })
}
