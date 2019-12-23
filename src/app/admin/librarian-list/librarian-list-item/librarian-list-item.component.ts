import { Component, OnInit, Input } from '@angular/core';
import { Librarian } from 'src/app/_shared/_models/librarian';
import { Router } from '@angular/router';

@Component({
  selector: 'app-librarian-list-item',
  templateUrl: './librarian-list-item.component.html',
  styleUrls: ['./librarian-list-item.component.css']
})
export class LibrarianListItemComponent implements OnInit {

  @Input() librarian: Librarian
  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }
}