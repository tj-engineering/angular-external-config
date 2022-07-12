import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Config {
  description: string
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(private http: HttpClient) { }

  loadConfig(): Observable<Config> {
    return this.http.get<Config>("/assets/data/appConfig.json")
  }
}
