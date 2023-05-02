import { Injectable } from '@angular/core';
import { Hero } from '../hero';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  heroList:Hero[]=[]
  private url="http://127.0.0.1:3000/";

  constructor(private http:HttpClient) { }

 createHero(x:FormData){
  return this.http.post(this.url + 'hero/create', x);
 }
 getAllHeros(){
  return this.http.get(this.url+'hero/all');
 }
 deleteHero(id:any){
  return this.http.delete(this.url + 'hero/supprimer/'+id);
 }
 getHeroById(id:any){
 return this.http.get(this.url + 'hero/getbyid/' + id)
 }
 updateHero(id:any,hero:Hero){
 return this.http.put(this.url + 'hero/update/' + id, hero)
 }

}
