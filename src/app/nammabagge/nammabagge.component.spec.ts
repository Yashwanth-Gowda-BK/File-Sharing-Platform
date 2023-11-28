import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NammabaggeComponent } from './nammabagge.component';

describe('NammabaggeComponent', () => {
  let component: NammabaggeComponent;
  let fixture: ComponentFixture<NammabaggeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NammabaggeComponent]
    });
    fixture = TestBed.createComponent(NammabaggeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
