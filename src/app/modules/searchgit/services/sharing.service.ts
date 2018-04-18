import { Injectable } from '@angular/core';
import { BookmarkModel } from "../../shared/models/bookmarkModel";

@Injectable()
export class SharingService {
    public sharedData: BookmarkModel[];

    constructor() {
        this.sharedData = [];
    }

    setData(data) {
        this.sharedData = data;
    }
    getData() {
        return this.sharedData;
    }

}  