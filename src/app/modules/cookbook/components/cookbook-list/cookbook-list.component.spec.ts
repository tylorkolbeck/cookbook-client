import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CookbookListComponent } from './cookbook-list.component';

describe('CookbookListComponent', () => {
  let component: CookbookListComponent;
  let fixture: ComponentFixture<CookbookListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CookbookListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CookbookListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
