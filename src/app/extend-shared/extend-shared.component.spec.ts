import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtendSharedComponent } from './extend-shared.component';

describe('ExtendSharedComponent', () => {
  let component: ExtendSharedComponent;
  let fixture: ComponentFixture<ExtendSharedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtendSharedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExtendSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
