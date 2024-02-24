import { Component } from '@angular/core';
import { BookComponent } from './book/book.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'book-management-system';
}
