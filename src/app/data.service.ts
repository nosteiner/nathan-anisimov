import { IMarker } from 'src/app/interfaces';
import { Injectable } from "@angular/core";
import data from "../assets/map.data.json";

@Injectable({
  providedIn: "root",
})
export class DataService {
  data: { markers: IMarker[] } = data
  dataDict: { [id: string]: IMarker } = data.markers.reduce((result, element) => {
    result[element.id] = element;
    return result;
  }, {});
  constructor() {
    console.log(this.dataDict)

  }
}
