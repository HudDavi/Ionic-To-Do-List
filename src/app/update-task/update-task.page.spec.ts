import { NO_ERRORS_SCHEMA } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { IonicModule } from "@ionic/angular";
import { Storage } from "@ionic/storage-angular";
import { UpdateTaskPage } from "./update-task.page";

describe("Serviço de Edição de Tarefas", () => {
  let component: UpdateTaskPage;
  let fixture: ComponentFixture<UpdateTaskPage>;
  let storage: Storage;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateTaskPage],
      imports: [IonicModule.forRoot()],
      providers: [{ provide: Storage, useClass: Storage }],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(UpdateTaskPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
    storage = TestBed.inject(Storage);
  });

  it("Deve ser Criado", () => {
    expect(component).toBeTruthy();
    expect(storage).toBeTruthy();
  });
});
