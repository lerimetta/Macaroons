import { Component, Input, OnInit } from '@angular/core';
import { AdvantageType } from 'src/app/types/advantage.type';

@Component({
  selector: 'advantages',
  templateUrl: './advantages.component.html',
  styleUrls: ['./advantages.component.css']
})
export class AdvantagesComponent implements OnInit {

  @Input() advantage: AdvantageType;
  @Input() i!: number;

  constructor() {
    this.advantage = {
      title: '',
      description: '',
    }
  }

  ngOnInit(): void {
  }

}
