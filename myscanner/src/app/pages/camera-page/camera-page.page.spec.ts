import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CameraPagePage } from './camera-page.page';

describe('CameraPagePage', () => {
  let component: CameraPagePage;
  let fixture: ComponentFixture<CameraPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CameraPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CameraPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
