import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PdfPagePage } from './pdf-page.page';

describe('PdfPagePage', () => {
  let component: PdfPagePage;
  let fixture: ComponentFixture<PdfPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdfPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PdfPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
