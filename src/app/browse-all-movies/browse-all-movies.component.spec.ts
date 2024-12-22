import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseAllMoviesComponent } from './browse-all-movies.component';

describe('BrowseAllMoviesComponent', () => {
  let component: BrowseAllMoviesComponent;
  let fixture: ComponentFixture<BrowseAllMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BrowseAllMoviesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BrowseAllMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
