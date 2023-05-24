import { NO_ERRORS_SCHEMA } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { IonicModule } from "@ionic/angular";
import { Storage } from "@ionic/storage-angular";
import { HomePage } from "./home.page";

describe("Serviço de Home Page", () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;
  let storage: Storage;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomePage],
      imports: [IonicModule.forRoot()],
      providers: [{ provide: Storage, useClass: Storage }],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
    storage = TestBed.inject(Storage);
  });

  it("Deve ser Criado", () => {
    expect(component).toBeTruthy();
    expect(storage).toBeTruthy();
  });
});
