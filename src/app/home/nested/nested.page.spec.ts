import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NestedPage } from './nested.page';

describe('NestedPage', () => {
  let component: NestedPage;
  let fixture: ComponentFixture<NestedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NestedPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NestedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
