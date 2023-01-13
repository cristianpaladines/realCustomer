import { Component, OnInit } from '@angular/core';
import { ScriptsService } from './../../scripts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private _Scripts:ScriptsService)
  {
    _Scripts.Carga(["app"]);
  }

  ngOnInit() {
  }
}