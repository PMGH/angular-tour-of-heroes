import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { testModuleConfig } from '../test-ng-module-config';

import { HeroSearchComponent } from './hero-search.component';


describe('HeroSearchComponent', () => {
  let component: HeroSearchComponent;
  let fixture: ComponentFixture<HeroSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule(testModuleConfig)
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
