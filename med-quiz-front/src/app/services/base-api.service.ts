import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class BaseApiService {
  private baseUrl: string = 'http://localhost:3500/';

  constructor(protected http: Http) {
  }

  protected getUrl(url: string = ''): string {
    return this.baseUrl + url;
  }

  public get(url: string = ''): Observable<any> {
    return this.http.get(this.getUrl(url))
      .map((response: Response) => response.json());
  }

  public post(url: string = '', data: any = {}): Observable<any> {
    return this.http.post(this.getUrl(url), data)
      .map((response: Response) => response.json());
  }

  public put(url: string = '', data: any = {}): Observable<any> {
    return this.http.put(this.getUrl(url), data)
      .map((response: Response) => response.json());
  }
}
