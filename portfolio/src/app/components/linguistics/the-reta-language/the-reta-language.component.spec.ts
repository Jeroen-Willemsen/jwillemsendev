import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheRetaLanguageComponent } from './the-reta-language.component';

describe('TheRetaLanguageComponent', () => {
  let component: TheRetaLanguageComponent;
  let fixture: ComponentFixture<TheRetaLanguageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheRetaLanguageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TheRetaLanguageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
