import { Component, Input, Output } from '@angular/core';
import { InsertComponent } from '../insert/insert.component';
import { ListComponent } from '../list/list.component';

@Component({
  selector: 'app-to-do',
  standalone: true,
  imports: [InsertComponent, ListComponent],
  templateUrl: './to-do.component.html',
  styleUrl: './to-do.component.css'
})
export class ToDoComponent {
  // todo : string ='';
  arr : any[] = [];
  receiveandpush(input : string){
    let obj = {text:input,style:false};
    this.arr.push(obj)
    console.log(this.arr);
  }
  go_delete(i:number){
    this.arr = [...this.arr.slice(0,i),...this.arr.slice(i+1)]
  }
  get_anti(i:number){
    this.arr[i].style = !this.arr[i].style
  }
}
