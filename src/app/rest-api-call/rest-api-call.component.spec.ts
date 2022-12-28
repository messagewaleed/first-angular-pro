import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestApiCallComponent } from './rest-api-call.component';

describe('RestApiCallComponent', () => {
  let component: RestApiCallComponent;
  let fixture: ComponentFixture<RestApiCallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestApiCallComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestApiCallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
