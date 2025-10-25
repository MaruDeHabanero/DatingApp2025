import 'reflect-metadata';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Nav } from './nav';

describe('Nav Component', () => {
  let component: Nav;
  let fixture: ComponentFixture<Nav>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Nav],
    }).compileComponents();

    fixture = TestBed.createComponent(Nav);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the Nav component', () => {
    expect(component).toBeTruthy();
  });

  it('should have the correct selector', () => {
    const metadata = Reflect.getMetadata('annotations', Nav)[0];
    expect(metadata.selector).toBe('app-nav');
  });

  it('should render the template', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled).toBeDefined();
  });
});
