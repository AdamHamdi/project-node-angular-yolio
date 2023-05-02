import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Hero } from 'src/app/hero';
import { HeroService } from 'src/app/services/hero.service';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {
  heroList: any
  constructor( private _hs:HeroService) { }
urlImg ='http://127.0.01:3000/getimage/'
  ngOnInit(): void {
  this._hs.getAllHeros().subscribe(
    res=>{ 
   
      this.heroList= res 
      console.log(this.heroList  );
      
    },
    err=>{
      console.log(err);
      
    }
  )
  }
  deleteHero(id:any){
    this._hs.deleteHero(id).subscribe(
      res=>{
        this.ngOnInit() 
      },
      err=>{
        console.log(err);
        
      }
    )
  }
  updateHero(id:any){}

}
