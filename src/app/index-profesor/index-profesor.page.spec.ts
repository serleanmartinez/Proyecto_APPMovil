import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IndexProfesorPage } from './index-profesor.page';

describe('IndexProfesorPage', () => {
  let component: IndexProfesorPage;
  let fixture: ComponentFixture<IndexProfesorPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(IndexProfesorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
