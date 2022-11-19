import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniViewerComponent } from './mini-viewer.component';

describe('MiniViewerComponent', () => {
  let component: MiniViewerComponent;
  let fixture: ComponentFixture<MiniViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiniViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
