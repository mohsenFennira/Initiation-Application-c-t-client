import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffresEmploiComponent } from './offres-emploi.component';

describe('OffresEmploiComponent', () => {
  let component: OffresEmploiComponent;
  let fixture: ComponentFixture<OffresEmploiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffresEmploiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OffresEmploiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
