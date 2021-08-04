import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { filter, map } from 'rxjs/operators';

import { DataService } from 'src/app/data.service';
import { Location } from '@angular/common';
import { S3_API } from 'src/app/consts';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
	siteId = ''
	title = ''
	S3_API = S3_API
	img
	constructor(
		private router: Router,
		private route: ActivatedRoute,
		private data: DataService,
		private location: Location
	) { }

	ngOnInit(): void {
		this.router.events.pipe(
			// identify navigation end
			filter((event) => event instanceof NavigationEnd),
			// now query the activated route
			map(() => this.rootRoute(this.route)),
			filter((route: ActivatedRoute) => route.outlet === 'primary'),
		).subscribe((route: ActivatedRoute) => {
			this.siteId = route.snapshot.paramMap.get('siteId')
			this.img = (this.data.dataDict[this.siteId]?.info.mainImg?.path || this.data.dataDict[this.siteId]?.info.imgs[0]?.path) || ''

		});
	}

	private rootRoute(route: ActivatedRoute): ActivatedRoute {
		while (route.firstChild) {
			route = route.firstChild;
		}
		return route;
	}

	onBack() {
		this.router.navigate(['sites'])

	}
}
