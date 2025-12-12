import { Component, effect, input, linkedSignal, output, signal } from '@angular/core';

@Component({
  selector: 'input-search',
  imports: [],
  templateUrl: './input-search.html',
})
export class InputSearch {
  placeholder = input<string>('Buscar');
  inputBuscar = output<string>();
  initialValue = input<string>();

  inputValue = linkedSignal<string>(() => this.initialValue() ?? '');

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
