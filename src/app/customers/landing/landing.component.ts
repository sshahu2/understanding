import { Component, OnInit } from '@angular/core';
import {MovieService} from './../../services/movie.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
movielist:any[]=[];
display=false;
  constructor(private movieservice:MovieService) { }

  ngOnInit() {
   this.movielist= this.movieservice.getMovies();
   console.log(this.movielist);
  }
  displayTable(){
    this.display=((this.display===false)?true:false);

  }


}
