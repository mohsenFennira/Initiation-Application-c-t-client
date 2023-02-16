import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDrivenForComponent } from './template-driven-for.component';

describe('TemplateDrivenForComponent', () => {
  let component: TemplateDrivenForComponent;
  let fixture: ComponentFixture<TemplateDrivenForComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateDrivenForComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateDrivenForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
