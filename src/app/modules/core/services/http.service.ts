import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable()
export class HttpService {
    //baseurl: string = "https://api.github.com/search/repositories?q=";
    baseurl: string = "https://api.github.com/search/repositories";    
    
    constructor(public http: HttpClient) {
    }

    get(repository: string) {
        
        //const url = "https://api.github.com/search/repositories?q=moshe" + "&callback=JSONP_CALLBACK";
        let url = "https://api.github.com/search/repositories?q=" + repository;

        return this.http.get(url).catch(this.handleError);
    }

    private handleError(error: Response) {
        return Observable.throw(error.statusText);
    }

}