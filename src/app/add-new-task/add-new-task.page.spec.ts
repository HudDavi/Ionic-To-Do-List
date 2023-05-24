import { NO_ERRORS_SCHEMA } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { IonicModule } from "@ionic/angular";
import { Storage } from "@ionic/storage-angular";
import { AddNewTaskPage } from "./add-new-task.page";

describe("Serviço de Adição de Tarefas", () => {
  let component: AddNewTaskPage;
  let fixture: ComponentFixture<AddNewTaskPage>;
  let storage: Storage;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddNewTaskPage],
      imports: [IonicModule.forRoot()],
      providers: [{ provide: Storage, useClass: Storage }],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(AddNewTaskPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
    storage = TestBed.inject(Storage);
  });

  it("Deve ser Criado", () => {
    expect(component).toBeTruthy();
    expect(storage).toBeTruthy();
  });
});
