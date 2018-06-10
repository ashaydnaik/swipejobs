import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Job } from './job';


@Injectable()
export class JobMatchService {
  jobsUrl: string = 'api/jobs';

  constructor(private http: Http) { }

  getJobs(): Promise<Job[]> {
    return this.http
        .get(this.jobsUrl)
        .toPromise()
        .then(response => response.json() as Job[])
        .catch(this.handleError);
  }

  getJob(id: number): Promise<Job> {
    const url = `${this.jobsUrl}/${id}`;
    console.log(url);
    return this.http.get(url)
        .toPromise()
        .then(response => response.json() as Job)
        .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }


}
