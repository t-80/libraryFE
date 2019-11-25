import { Component, OnInit, Input} from '@angular/core';
import { Librarian } from 'src/app/_models/librarian';

@Component({
  selector: 'app-librarian-list-item',
  templateUrl: './librarian-list-item.component.html',
  styleUrls: ['./librarian-list-item.component.css']
})
export class LibrarianListItemComponent implements OnInit {

  @Input () librarian: Librarian
  constructor() { }

  ngOnInit() {
  }

}
