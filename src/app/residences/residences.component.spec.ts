import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResidenceComponent } from './residences.component';



describe('ResidencesComponent', () => {
  let component: ResidenceComponent;
  let fixture: ComponentFixture<ResidenceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResidenceComponent]
    });
    fixture = TestBed.createComponent(ResidenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
