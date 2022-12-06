
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DatamobilEditPage } from './datamobil_edit.page';

describe('DatamobilEditPage', () => {
  let component: DatamobilEditPage;
  let fixture: ComponentFixture<DatamobilEditPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DatamobilEditPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DatamobilEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});





/* End of file  */

/* Created at 2022-12-06 13:27:53 */
/* Mohammad Irham Akbar CRUD IONIC 6 Angular */