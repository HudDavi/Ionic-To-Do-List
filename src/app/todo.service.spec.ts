import { NO_ERRORS_SCHEMA } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { Storage } from "@ionic/storage-angular";
import { TodoService } from "./todo.service";

describe("Serviço de Lista de Tarefas", () => {
  let service: TodoService;
  let storage: Storage;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: Storage, useClass: Storage }],
      schemas: [NO_ERRORS_SCHEMA],
    });
    service = TestBed.inject(TodoService);
    storage = TestBed.inject(Storage);
  });

  it("Deve ser Criado", () => {
    expect(service).toBeTruthy();
    expect(storage).toBeTruthy();
  });
});
