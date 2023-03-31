import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Job } from 'src/app/Shared/Models/Job';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(private http:HttpClient) { }

  getAllJobs():Observable<Job[]> {
    let headers = new HttpHeaders();
    headers = headers.set('Ocp-Apim-Subscription-Key', 'abf0638effd54b229f79e147d6b06699');
    return this.http.get<Job[]>("https://netfullstackapigateway.azure-api.net/recruiting/api/jobs", {
      headers: {'Ocp-Apim-Subscription-Key':'abf0638effd54b229f79e147d6b06699'}
    });
  }
}