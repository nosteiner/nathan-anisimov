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
  markers = data.markers as IMarker[];
  site: IMarker;
  constructor(private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.site = find(this.markers, (site: IMarker) => site.id === Number(this.route.snapshot.paramMap.get('siteId')));
  }
}
