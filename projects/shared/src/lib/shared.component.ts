import {
  ChangeDetectorRef,
  Component,
  Inject,
  OnInit,
  ViewChild,
  ViewContainerRef,
  Optional,
} from '@angular/core';

@Component({
  selector: 'lib-shared',
  template: `
    <div *ngIf="!extendComponent">core library component</div>
    <ng-container #container></ng-container>
  `,
})
export class SharedComponent implements OnInit {
  @ViewChild('container', { read: ViewContainerRef, static: true })
  public orderedViewContainer: ViewContainerRef | any;

  constructor(
    private cdr: ChangeDetectorRef,
    @Optional() @Inject('ExtendShared') public extendComponent?: Component
  ) {
    this.extendComponent = extendComponent;
  }

  loadComponent(extComponent: any) {
    this.orderedViewContainer.createComponent(extComponent);
    this.cdr.detectChanges();
  }

  ngOnInit(): void {
    if (this.extendComponent) {
      this.loadComponent(this.extendComponent);
    }
  }
}
