import { Inject, Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import { HttpService } from "../../core/services/http.service";
import { RepositoryModel } from "../../shared/models/repositoryModel";

@Injectable()
export class RepositoryService {
    rep: RepositoryModel;
    constructor(private httpService: HttpService) {
    }

    //: Observable<RepositoryModel[]>
    loadRepositories(repository:string) {

        return this.httpService.get(repository)
             .map(res => res.items) 
            .catch(this.handleError);     
    }

    private handleError(error: Response) {
         return Observable.throw(error.statusText);
     }
}