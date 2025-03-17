import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment';
import { apiRoutes } from '../../../../dataService/routes';
import { JobOpportunity, RequiredSkill, RequiredLanguage, JobApplication } from './employment.types';

@Injectable({
  providedIn: 'root'
})
export class EmploymentService {

  private apiUrl = `${environment.apiURL}`;

  constructor(private http: HttpClient) { }

  // Job Opportunities
  getJobOpportunities(): Observable<JobOpportunity[]> {
    return this.http.get<JobOpportunity[]>(`${this.apiUrl}${apiRoutes.emploiApp.jobOpportunitiesListCreate}`);
  }

  getJobOpportunity(id: number): Observable<JobOpportunity> {
    return this.http.get<JobOpportunity>(`${this.apiUrl}${apiRoutes.emploiApp.jobOpportunitiesDetail(id)}`);
  }

  createJobOpportunity(jobOpportunity: JobOpportunity): Observable<JobOpportunity> {
    return this.http.post<JobOpportunity>(`${this.apiUrl}${apiRoutes.emploiApp.jobOpportunitiesListCreate}`, jobOpportunity);
  }

  // Required Skills
  getRequiredSkills(): Observable<RequiredSkill[]> {
    return this.http.get<RequiredSkill[]>(`${this.apiUrl}${apiRoutes.emploiApp.requiredSkillsListCreate}`);
  }

  getRequiredSkill(id: number): Observable<RequiredSkill> {
    return this.http.get<RequiredSkill>(`${this.apiUrl}${apiRoutes.emploiApp.requiredSkillsDetail(id)}`);
  }

  createRequiredSkill(requiredSkill: RequiredSkill): Observable<RequiredSkill> {
    return this.http.post<RequiredSkill>(`${this.apiUrl}${apiRoutes.emploiApp.requiredSkillsListCreate}`, requiredSkill);
  }

  // Required Languages
  getRequiredLanguages(): Observable<RequiredLanguage[]> {
    return this.http.get<RequiredLanguage[]>(`${this.apiUrl}${apiRoutes.emploiApp.requiredLanguagesListCreate}`);
  }

  getRequiredLanguage(id: number): Observable<RequiredLanguage> {
    return this.http.get<RequiredLanguage>(`${this.apiUrl}${apiRoutes.emploiApp.requiredLanguagesDetail(id)}`);
  }

  createRequiredLanguage(requiredLanguage: RequiredLanguage): Observable<RequiredLanguage> {
    return this.http.post<RequiredLanguage>(`${this.apiUrl}${apiRoutes.emploiApp.requiredLanguagesListCreate}`, requiredLanguage);
  }

  // Job Applications
  getJobApplications(): Observable<JobApplication[]> {
    return this.http.get<JobApplication[]>(`${this.apiUrl}${apiRoutes.emploiApp.jobApplicationsListCreate}`);
  }

  getJobApplication(id: number): Observable<JobApplication> {
    return this.http.get<JobApplication>(`${this.apiUrl}${apiRoutes.emploiApp.jobApplicationsDetail(id)}`);
  }

  createJobApplication(jobApplication: JobApplication): Observable<JobApplication> {
    return this.http.post<JobApplication>(`${this.apiUrl}${apiRoutes.emploiApp.jobApplicationsListCreate}`, jobApplication);
  }
}
