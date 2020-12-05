import { Injectable } from '@angular/core';

import data from '../assets/map.data.json';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  data = data;
  constructor() { }
}
