import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { find } from 'lodash';

import data from '../../../assets/map.data.json';
import { IMarker } from '../../interfaces';

@Component({
  selector: 'app-single-site',
  templateUrl: './single-site.component.html',
  styleUrls: ['./single-site.component.scss']
})
export class SingleSiteComponent implements OnInit {
  site: IMarker;
  constructor(private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    console.log(this.route.snapshot.paramMap.get('siteId'));
    this.site = find(data.markers, (site: IMarker) => site.id === Number(this.route.snapshot.paramMap.get('siteId')));
    console.log(data.markers);
  }

}
