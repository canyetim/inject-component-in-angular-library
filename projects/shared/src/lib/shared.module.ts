import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { SharedComponent } from './shared.component';

@NgModule({
  declarations: [SharedComponent],
  imports: [CommonModule],
  exports: [SharedComponent],
})
export class SharedModule {
  static withExtendComponent(
    component: any
  ): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: [
        { provide: 'ExtendShared', useValue: component ? component : null },
      ],
    };
  }
}
