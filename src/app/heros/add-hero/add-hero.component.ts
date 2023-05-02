import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Hero } from 'src/app/hero';
import { HeroService } from 'src/app/services/hero.service';

@Component({
  selector: 'app-add-hero',
  templateUrl: './add-hero.component.html',
  styleUrls: ['./add-hero.component.css']
})
export class AddHeroComponent implements OnInit {

  heroList:any
  heroForm!:FormGroup
  imag : any
  constructor(private fb:FormBuilder, private hs:HeroService,private router:Router) { }

  ngOnInit(): void {
    this.heroForm= this.fb.group({
      name:[''],
      power:[''],
      image:[''],
      
   })
  }
  selectImage(event: any) {
    this.imag = event.target.files[0];
    this.heroForm.patchValue({
      img: this.imag
    });
    event.target.value = ''; // clear the selected file(s)
    console.log('image', this.imag);
  }
 
 onSaveForm(): void { 
  //on utilise formData car on ne peux pas envoyé image ('file') dans un objet
  let formData:any = new FormData()
  formData.append('name', this.heroForm.get('name')?.value);
  formData.append('power', this.heroForm.get('power')?.value);
  formData.append('image', this.imag);
  // Convert FormData to Hero object
 

  if(this.heroForm.valid){
    this.hs.createHero(formData).subscribe(
      res=>{

        console.log(res)
      },
      errors=>{
        console.log(errors);
        
      }
    )
  }
  else { 
    this.heroForm.markAllAsTouched()
    this.heroForm.markAsDirty() 
  } 
  this.router.navigate(['/hero-list']);
  this.heroForm.reset();
 }

 
  onSubmit(){
    console.log(this.heroForm.value)
  }
}
