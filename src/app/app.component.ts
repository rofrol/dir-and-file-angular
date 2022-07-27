import { Component } from '@angular/core';

const files = [
  {
    type: 'directory',
    name: 'directory-1',
    contents: [
      { type: 'file', name: 'file-1.js' },
      { type: 'file', name: 'file-2.js' },
    ]
  },
  {
    type: 'directory',
    name: 'directory-2',
    contents: [
      { type: 'file', name: 'file-3.js' },
      {
        type: 'directory',
        name: 'directory-3',
        contents: [
          { type: 'file', name: 'file-4.js' },
          {
            type: 'directory',
            name: 'directory-4',
            contents: [
              { type: 'file', name: 'file-5.js' }
            ]
          },
        ]
      },
    ]
  },
  { type: 'file', name: 'file-6.js' }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dir-and-file-angular';
  files = files;
}
