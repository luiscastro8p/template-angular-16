import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.html',
  styleUrls: ['./title.scss'],
})
export class TitleComponent implements OnInit {
  @Input() text: String = 'No hay texto';
  constructor() {}

  ngOnInit(): void {}
}
