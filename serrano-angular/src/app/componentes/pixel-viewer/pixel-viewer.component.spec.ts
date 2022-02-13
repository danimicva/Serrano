import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PixelViewerComponent } from './pixel-viewer.component';

describe('PixelViewerComponent', () => {
  let component: PixelViewerComponent;
  let fixture: ComponentFixture<PixelViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PixelViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PixelViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
