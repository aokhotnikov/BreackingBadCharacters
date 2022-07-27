import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { from, Observable } from 'rxjs';
import { finalize, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DisplayEventsService {
  loading: HTMLIonLoadingElement;

  constructor(public loadingCtrl: LoadingController) {
    console.log('Init DisplayEventsService');
  }

  async showLoading(message?: string): Promise<any> {
    this.loading = await this.loadingCtrl.create({
      spinner: 'bubbles',
      message: message || 'Please wait...'
    });
    await this.loading.present();
    return this.loading;
  }

  hideLoading() {
    this.loading.dismiss();
  }

  runWithLoading<T>(obs: Observable<T>): Observable<T> {
    return from(this.showLoading()).pipe(
      switchMap(loader => obs.pipe(
        finalize(() => loader.dismiss())
      ))
    );
  }
}
