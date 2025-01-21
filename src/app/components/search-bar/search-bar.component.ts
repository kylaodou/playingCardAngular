import { NotExpr } from '@angular/compiler';
import { Component, EventEmitter, input, Input, model, output, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  imports: [FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {
  /* @Input() search = '';
  @Output() searchChange = new EventEmitter<string>();
  @Output('submit') searchButtonCliked = new EventEmitter(); */
  //Les signals input
  /* search = input<string>('');
  searchChange = output<string>(); */
  search = model<string>('');
  searchButtonCliked = output({alias:"submit"});
  searchClick(){
    this.searchButtonCliked.emit();
  }
  /* updateSearch(value : string){
    this.search.set(value);
  } */
}
