import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export abstract class GenericApiService {

  abstract sourceUrl: string;

  constructor(protected http: HttpClient) {
  }

  public getUrlList() {
    return `/api/${ this.sourceUrl }/`;
  }

  public getUrlObject(id) {
    return `/api/${ this.sourceUrl }/${ id }/`;
  }

  public getListWithParams(currentPage: number, pagesLimit: number, attrs: object = {}) {
    const params = {
      ...attrs,
      limit: pagesLimit.toString(),
      offset: ((currentPage - 1) * pagesLimit).toString()
    };
    return this.http.get(this.getUrlList(), { params });
  }

  public getObject(id: number) {
    return this.http.get(this.getUrlObject(id));
  }

  public addNewObject(attrs: object) {
    return this.http.post(this.getUrlList(), attrs);
  }

  public deleteObject(id: number) {
    return this.http.delete(this.getUrlObject(id));
  }

  public editObject(id: number, attrs: object) {
    return this.http.patch(this.getUrlObject(id), attrs);
  }

}
