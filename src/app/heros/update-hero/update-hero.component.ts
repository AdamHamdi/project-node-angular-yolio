import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Hero } from 'src/app/hero';
import { HeroService } from 'src/app/services/hero.service';

@Component({
  selector: 'app-update-hero',
  templateUrl: './update-hero.component.html',
  styleUrls: ['./update-hero.component.css']
})
export class UpdateHeroComponent implements OnInit {
  heroForm!:FormGroup
  heroList :any

  id:any
  constructor(private activeRoute:ActivatedRoute, private hs:HeroService,private fb: FormBuilder,private router:Router) { }

  ngOnInit(): void {
 
    
    this.id = this.activeRoute.snapshot.paramMap.get('id');
    console.log('the activated route is', this.id);
  
    this.hs.getHeroById(this.id).subscribe( data => {
        this.heroList =  data;
       this.updateForm()
       
      },
      err => {
        console.log(err);
      }
    );
  }
 updateForm(){
 return  this.heroForm=  this.fb.group({
    name: [this.heroList.name],
    power: [this.heroList.power],
    image: [this.heroList.image], 
}); 
 }

  updateHero(){
    this.hs.updateHero(this.id, this.heroForm.value).subscribe(
      res=>{ 
        this.heroList=res 
       this.router.navigate(['hero-list'])
        
      },
      err=>{
        console.log(err);
        
      }
    )

  }
  onSubmit(){
    console.log(this.heroForm.value)
  }

}
