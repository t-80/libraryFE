import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RefreshService } from 'src/app/_shared/_services/refresh.service';

@Component({
  selector: 'app-refresh',
  templateUrl: './refresh.component.html',
  styleUrls: ['./refresh.component.css']
})
export class RefreshComponent implements OnInit {


  constructor(private refreshService : RefreshService) { }

  ngOnInit() {
  }

  refresh(){
    this.refreshService.refresh();
  }
}
