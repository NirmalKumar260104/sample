import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule,FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent  {
  title = 'pro_ject';
  products = [
    {
      product_id: 1,
      product_name: "FirstProj",
      image_url: "samplepic1.jpg",
      altimage: "FirstProduct"
    },
    {
      product_id: 2,
      product_name: "SecondProj",
      image_url: "assets/samplepic1.jpg",altimage: "SecondProduct"
    },
    {
      product_id: 3,
      product_name: "ThirdProduct",
      image_url: "https://picsum.photos/200/300",      altimage: "ThirdProduct"
    }
  ];
}



