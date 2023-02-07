import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvCreateComponent } from './inv-create.component';

describe('InvCreateComponent', () => {
  let component: InvCreateComponent;
  let fixture: ComponentFixture<InvCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
