import { Component, OnInit } from '@angular/core';
import { groupBy } from 'lodash';

import data from '../../../assets/map.data.json';
import { IInfo } from '../../interfaces';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  data = groupBy(data.markers.map(marker => ({ id: marker.id, ...marker.info })), (info: IInfo) => info.category);
  constructor() { }

  ngOnInit(): void {
    // console.log(this.data);
  }

}
