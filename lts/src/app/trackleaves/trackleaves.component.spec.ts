import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackleavesComponent } from './trackleaves.component';

describe('TrackleavesComponent', () => {
  let component: TrackleavesComponent;
  let fixture: ComponentFixture<TrackleavesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrackleavesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackleavesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
