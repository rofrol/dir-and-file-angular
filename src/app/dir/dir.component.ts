import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dir',
  templateUrl: './dir.component.html',
  styleUrls: ['./dir.component.scss']
})
export class DirComponent implements OnInit {

  expanded = true;
  @Input() data: any = {};
  constructor() { }

  ngOnInit(): void {
  }

}
