import { Component, OnInit } from '@angular/core';
import {MovieService} from './../../services/movie.service';
@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {
result:any[]=[];
resulttl:any[]=[];
resulttle:any[]=[];
  constructor(private movieservice:MovieService) { }
    
  ngOnInit() {
    this.result=this.movieservice.getMovies();
    console.log(this.result);
    for (var x of this.result){
      this.resulttl.push(x["territoryLevel"]);
      console.log( this.resulttl);

    }
 
    

  }
    onTabChange(event) {
       console.log(event.index);
       for(var i=0;i<this.result.length;i++){
         if(i===event.index)
         {
           this.resulttl=this.result[i].territoryLevel;
           console.log(this.resulttl);
           
         }
       }
    }
       onTabChange2(event) {
       console.log(event.index);
       for(var i=0;i<this.resulttl.length;i++){
         if(i===event.index)
         {
           this.resulttle=this.resulttl[i].subTerritoryLevel;
           console.log(this.resulttle);
         }
       }
    }
    
 index: number = 0;

    openNext() {
        this.index = (this.index === 2) ? 0 : this.index + 1;
    }

    openPrev() {
        this.index = (this.index === 0) ? 2 : this.index - 1;
    }
}
