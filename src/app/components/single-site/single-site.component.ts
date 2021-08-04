import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { IMarker } from '../../interfaces';
import data from '../../../assets/map.data.json';
import { find } from 'lodash';

@Component({
  selector: 'app-single-site',
  templateUrl: './single-site.component.html',
  styleUrls: ['./single-site.component.scss']
})
export class SingleSiteComponent implements OnInit {
  markers: IMarker[]
  site: IMarker;
  constructor(private route: ActivatedRoute, private dataService: DataService) {
    this.markers = dataService.data.markers
  }

  ngOnInit(): void {
    this.site = find(this.markers, (site: IMarker) => site.id === Number(this.route.snapshot.paramMap.get('siteId')));
  }
}
