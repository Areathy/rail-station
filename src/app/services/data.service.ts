import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Rail } from '../models/rail';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  urlprefix: string = "http://localhost:7000";

  constructor(private httpClient: HttpClient) { }

  getRail(): Observable<Rail[]> {
    return this.httpClient.get<Rail[] | string>( this.urlprefix + `/rail`)
    .pipe(map(
      (rails: any) => {
        rails.forEach((rail: any) => {
          rail.Legs = rail.Legs;
          rail.Legs.DepTime = rail.Legs.DepTime;
          rail.Legs.RouteName = rail.Legs.RouteName;
          rail.Legs.TKTs = rail.Legs.TKTs;
          // rail.Legs.TKTs.Operator = rail.Legs.TKTs.Operator;
          // rail.Legs.TKTs.TravelTimes = rail.Legs.TKTs.TravelTimes;
          // rail.Legs.TKTs.ChdPrice = rail.Legs.TKTs.ChdPrice;
          // rail.Legs.TKTs.AdtPrice = rail.Legs.TKTs.AdtPrice;
        });
        return rails;
      }
    ));
  }
}
