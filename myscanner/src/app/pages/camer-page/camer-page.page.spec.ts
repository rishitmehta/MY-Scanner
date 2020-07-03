import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CamerPagePage } from './camer-page.page';

describe('CamerPagePage', () => {
  let component: CamerPagePage;
  let fixture: ComponentFixture<CamerPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CamerPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CamerPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
