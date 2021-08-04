import { Component, OnInit } from '@angular/core';
import SwiperCore, { Navigation, Pagination } from "swiper/core";

import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { IMarker } from '../../interfaces';
import { S3_API } from 'src/app/consts';
import data from '../../../assets/map.data.json';
import { find } from 'lodash';

// import Swiper core and required modules


// install Swiper modules
SwiperCore.use([Navigation, Pagination]);

@Component({
  selector: 'app-single-site',
  templateUrl: './single-site.component.html',
  styleUrls: ['./single-site.component.scss']
})
export class SingleSiteComponent implements OnInit {
  markers: IMarker[]
  site: IMarker;
  S3_API = S3_API
  constructor(private route: ActivatedRoute, private dataService: DataService) {
    this.markers = dataService.data.markers
  }

  ngOnInit(): void {
    this.site = find(this.markers, (site: IMarker) => site.id === Number(this.route.snapshot.paramMap.get('siteId')));
  }
}
