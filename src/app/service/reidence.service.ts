
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Residence } from '../Core/Models/residence';


@Injectable({
  providedIn: 'root'
})
export class ResidenceService {

  constructor(private http : HttpClient) { }

  getResidence(): Observable <Residence[]> {
    return this.http.get<Residence[]>('http://localhost:3000/residences');
  }
  getResidenceById(id:number):Observable<Residence> {
    return this.http.get<Residence>('http://localhost:3000/residences/'+id)
  }
  addResidence(res:Residence):Observable<Residence>{
    return this.http.post<Residence>('http://localhost:3000/residences',res)
  }
  DeleteResidence(id:number):Observable<Residence>{
    return this.http.delete<Residence>('http://localhost:3000/residences/'+id)
  }

  updateResidence(rs:Residence, id:number):Observable<Residence>{
    return this.http.put<Residence>('http://localhost:3000/residences/'+id,rs)
  }
}
