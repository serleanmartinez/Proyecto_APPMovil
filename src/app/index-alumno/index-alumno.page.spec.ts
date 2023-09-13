import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IndexAlumnoPage } from './index-alumno.page';

describe('IndexAlumnoPage', () => {
  let component: IndexAlumnoPage;
  let fixture: ComponentFixture<IndexAlumnoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(IndexAlumnoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
