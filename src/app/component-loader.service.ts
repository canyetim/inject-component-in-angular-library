import { Injectable, ViewContainerRef } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoadComponentService {
  constructor() {}

  async loadComponent(viewContainerRef: ViewContainerRef, extComponent: any) {
    viewContainerRef.clear();
    return viewContainerRef.createComponent(extComponent);
  }
}
