import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { apiRoutes } from '../routes';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PaymentsService {
  private baseUrl = environment.apiURL; // Replace with your actual API URL

  constructor(private http: HttpClient) {}

  // Subscriptions
  getSubscriptions(): Observable<any> {
    return this.http.get(`${this.baseUrl}${apiRoutes.subscriptions.listCreate}`);
  }

  getSubscription(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}${apiRoutes.subscriptions.detail(id)}`);
  }

  createSubscription(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}${apiRoutes.subscriptions.listCreate}`, data);
  }

  updateSubscription(id: number, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}${apiRoutes.subscriptions.detail(id)}`, data);
  }

  deleteSubscription(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}${apiRoutes.subscriptions.detail(id)}`);
  }

  // Payments
  getPayments(): Observable<any> {
    return this.http.get(`${this.baseUrl}${apiRoutes.payments.listCreate}`);
  }

  getPayment(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}${apiRoutes.payments.detail(id)}`);
  }

  createPayment(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}${apiRoutes.payments.createPayment}`, data);
  }

  // Payouts
  createPayout(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}${apiRoutes.payments.createPayout}`, data);
  }

  // Transfers
  createTransfer(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}${apiRoutes.payments.createTransfer}`, data);
  }

  // Process Automatic Payments
  processAutomaticPayments(): Observable<any> {
    return this.http.post(`${this.baseUrl}${apiRoutes.payments.processAutomaticPayments}`, {});
  }
}
