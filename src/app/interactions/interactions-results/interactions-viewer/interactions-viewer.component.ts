import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'iv-interactions-viewer',
  templateUrl: './interactions-viewer.component.html',
  styleUrls: ['./interactions-viewer.component.css']
})
export class InteractionsViewerComponent implements OnInit {

  @Input() interactorsSelected: string[];

  constructor() { }

  ngOnInit() {
  }

}
