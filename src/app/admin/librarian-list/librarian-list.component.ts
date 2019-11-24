import { Component, OnInit } from '@angular/core';
import { Librarian } from 'src/app/_models/librarian';


@Component({
  selector: 'app-librarian-list',
  templateUrl: './librarian-list.component.html',
  styleUrls: ['./librarian-list.component.css']
})
export class LibrarianListComponent implements OnInit {
    
  plants: Librarian[] = [];

  constructor() { }

  ngOnInit(){}
}
