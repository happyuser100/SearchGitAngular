import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmarksgitComponent } from './bookmarksgit.component';

describe('BookmarksgitComponent', () => {
  let component: BookmarksgitComponent;
  let fixture: ComponentFixture<BookmarksgitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookmarksgitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookmarksgitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
