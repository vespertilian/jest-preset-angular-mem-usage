import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  function setup() {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
    });

    const fixture = TestBed.createComponent(AppComponent);
    return { fixture };
  }

  it('dummy test', () => {
    const { fixture } = setup();
    expect(fixture).toBeTruthy();
  });
});
