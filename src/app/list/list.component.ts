import { Component, EventEmitter, Input, Output} from '@angular/core';
import {NgStyle} from '@angular/common';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  @Input() arrr : any;
  @Output() delete = new EventEmitter();
  @Output() markk = new EventEmitter();
  remove(i:number){
    this.delete.emit(i);
  }
  // style:boolean = false;
  mark(i:number){
    // if(this.arrr.$index == i)
    this.markk.emit(i)
    }
  }
