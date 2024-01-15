import { Component, EventEmitter, Output} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-insert',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './insert.component.html',
  styleUrl: './insert.component.css'
})
export class InsertComponent {
  value = '';
  @Output() new_to_do = new EventEmitter();
  send(input:string) {
    if (this.value!='')
    { this.new_to_do.emit(input); }
    this.value=''
  }
}
