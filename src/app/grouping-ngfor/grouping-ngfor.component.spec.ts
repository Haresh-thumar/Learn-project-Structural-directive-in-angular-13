import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupingNgforComponent } from './grouping-ngfor.component';

describe('GroupingNgforComponent', () => {
  let component: GroupingNgforComponent;
  let fixture: ComponentFixture<GroupingNgforComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupingNgforComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupingNgforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
