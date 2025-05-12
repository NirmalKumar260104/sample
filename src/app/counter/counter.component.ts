import { CommonModule } from '@angular/common';
import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-counter',
  imports: [RouterModule,CommonModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent implements OnChanges{
// count=0
ngOnChanges(changes: SimpleChanges): void {
  if (condition) {
    
  }
}




}
