import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bus',
  templateUrl: './bus.component.html',
  styleUrls: ['./bus.component.css']
})
export class BusComponent implements OnInit {
  height: any;
  seatArr: any;
  seatbg: any;
  selectedSeatCount: any;
  displayBookBtn: any;
  bgPermanent: any;

  constructor() {
    this.height = "0"
    this.seatArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
    this.seatbg = [];
    this.selectedSeatCount = 0;
    this.displayBookBtn = "none";
    this.bgPermanent = [];
  }


  ngOnInit(): void {
    
    this.seatbg = localStorage.getItem("bus")?.split(",")
    console.log(this.seatbg);
  }
  viewBusSeats() {
    if (this.height == "0") {
      this.height = "200px"
    }
    else {
      this.height = "0"
    }


  }

  seatSelect(color: any) {
    if (this.seatbg[color] == "green") {
      alert("Already Booked");
      return;
      
    };

    if (this.selectedSeatCount < 6  ) {
      if (!this.seatbg[color]) {
        this.seatbg[color] = "orange";
        this.selectedSeatCount++;
        this.displayBookBtn = "block";


      }
      else {
        this.seatbg[color] = ""
        this.selectedSeatCount--;
      }
    }
    else {
      alert("The maximum number of seats that can be selected is 6")
    }
  }

  bookticket() {

    for (let i = 0; i < this.seatbg.length; i++) {
      if (this.seatbg[i] == "orange") {
        this.seatbg[i] = "green";
      }
    }
    this.selectedSeatCount = 0;
    localStorage.setItem("bus",this.seatbg.toString())

  }
}
