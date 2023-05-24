import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { TodoService } from "../todo.service";

@Component({
  selector: "app-add-new-task",
  templateUrl: "./add-new-task.page.html",
  styleUrls: ["./add-new-task.page.scss"],
})
export class AddNewTaskPage implements OnInit {
  categories: string[] = [];
  categorySelectedCategory: string = "";

  newTaskObj = {};
  itemName: string = "";
  itemDueDate: string = "";
  itemPriority: string = "";
  itemCategory: string = "";

  constructor(
    public modalCtlr: ModalController,
    public todoService: TodoService
  ) {}

  ngOnInit() {
    this.categories.push("Concluída");
    this.categories.push("Não Concluída");
    this.categories.push("Em Andamento");
  }

  async add() {
    this.newTaskObj = {
      itemName: this.itemName,
      itemDueDate: this.itemDueDate,
      itemPriority: this.itemPriority,
      itemCategory: this.categorySelectedCategory,
    };
    console.log(this.newTaskObj);
    let uid = this.itemName + this.itemDueDate;

    if (uid) {
      this.todoService.addTask(uid, this.newTaskObj);
    } else {
      console.log("Tarefa Vazia não Pode ser Salva");
    }

    this.dismis();
  }

  selectCategory(index: number) {
    this.categorySelectedCategory = this.categories[index];
    console.log(this.categorySelectedCategory);
  }

  async dismis() {
    await this.modalCtlr.dismiss(this.newTaskObj);
  }
}
