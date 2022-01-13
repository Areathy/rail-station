import { Component, OnInit } from '@angular/core';
import { Rail } from 'src/app/models/rail';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss']
})
export class TicketsComponent implements OnInit {

  // Properties
  rails: Rail[] = [];
  ticketsLoadingStarted: boolean = false;
  legLength: number;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    //rail
    this.ticketsLoadingStarted = true;
    this.dataService.getRail().subscribe(
      (response: Rail[]) => {
        this.rails = response;
        this.ticketsLoadingStarted = false;
        console.log("qwerty", this.rails);

        // this.legLength = 
      },
      (error) => {
        console.log(error);
        this.ticketsLoadingStarted = false;
      }
    );

  }

}
