import { Component } from '@angular/core';
import { Book } from '../models/book.model';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent implements OnInit{

  title: string = "";
  author: string = "";
  books: Book[] = [];


  ngOnInit(): void {
    let savedBooks = localStorage.getItem("books");
    this.books = savedBooks ? JSON.parse(savedBooks) : [];
  }

  addBook(){
    if(this.title.trim().length && this.author.trim().length){
      let newBook: Book = {
        id: Date.now(),
        title: this.title,
        author: this.author
      }
      this.books.push(newBook);
      localStorage.setItem('books',JSON.stringify(this.books));
      this.title="";
      this.author="";
    }

  }

  retrieveBook(){

  }

  deleteBook(index: number){
    this.books.splice(index,1);
    localStorage.setItem('books',JSON.stringify(this.books));
  }
}
