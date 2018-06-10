import { Component, OnInit } from '@angular/core';
import { JobMatchService } from './job-match.service';
import { Job } from './job';

@Component({
  selector: 'app-job-match',
  templateUrl: './job-match.component.html',
  styleUrls: ['./job-match.component.css']
})
export class JobMatchComponent implements OnInit {
  jobs: Job[];
  jobDetails: any;
  startDate: Date;
  endDate: Date;

  constructor(private jobMatchService: JobMatchService) { }

  ngOnInit() {
    this.getJob();
  }

  getJobs() {
    this.jobMatchService
        .getJobs()
        .then(jobs => this.jobs = jobs);
  }

  getJob() {
    this.jobMatchService
        .getJob(1)
        .then(job => {
          console.log('job', job);
          let shifts = job.jobDetails.shifts;
          this.startDate = new Date(shifts[0].startDate);
          this.endDate = new Date(shifts[shifts.length - 1].endDate);
          this.jobDetails = job.jobDetails;
        });

  }
}
