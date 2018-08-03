import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {MovieService} from './../../services/movie.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
content:any;
moviesfetched:any;
  constructor(private router: Router,private mservice:MovieService) { }

  ngOnInit() {
    this.moviesfetched=this.mservice.getMovies();
    console.log(this.moviesfetched);
  }
  onSubmit(){
    console.log(this.content);

    for(var i=0;i<this.moviesfetched.length;i++){
      if(this.moviesfetched[i].name==this.content.trim()){
        this.router.navigate(['/theatre',this.content.trim()]);
        break;
      }
      else{
        console.log("move not found");
      

      }
    }
    
  }

}
