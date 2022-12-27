import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProjectsNewComponent } from './admin-projects-new.component';

describe('AdminProjectsNewComponent', () => {
  let component: AdminProjectsNewComponent;
  let fixture: ComponentFixture<AdminProjectsNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminProjectsNewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminProjectsNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
