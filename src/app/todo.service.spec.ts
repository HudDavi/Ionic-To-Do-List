import { TestBed } from "@angular/core/testing";
import { TodoService } from "./todo.service";

describe("Serviço de Lista de Tarefas", () => {
  let service: TodoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoService);
  });

  it("Deve ser Criado", () => {
    expect(service).toBeTruthy();
  });
});
