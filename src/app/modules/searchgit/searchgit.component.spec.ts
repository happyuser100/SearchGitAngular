import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchgitComponent } from './searchgit.component';

describe('SearchgitComponent', () => {
  let component: SearchgitComponent;
  let fixture: ComponentFixture<SearchgitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchgitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchgitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
