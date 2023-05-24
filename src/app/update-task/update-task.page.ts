import { Component, Input, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { TodoService } from "../todo.service";

@Component({
  selector: "app-update-task",
  templateUrl: "./update-task.page.html",
  styleUrls: ["./update-task.page.scss"],
})
export class UpdateTaskPage implements OnInit {
  @Input()
  task: {
    value: {
      itemName: string;
      itemDueDate: string;
      itemPriority: string;
      itemCategory: string;
    };
    key: string;
  } = {
    value: {
      itemName: "",
      itemDueDate: "",
      itemPriority: "",
      itemCategory: "",
    },
    key: "",
  };
  categories: string[] = [];
  categorySelectedCategory: string = "";

  newTaskObj = {};
  itemName: string = "";
  itemDueDate: string = "";
  itemPriority: string = "";
  itemCategory: string = "";

  constructor(
    public modalCtlr: ModalController,
    public todoServive: TodoService
  ) {}

  ngOnInit() {
    this.categories.push("Concluída");
    this.categories.push("Não Concluída");
    this.categories.push("Em Andamento");

    this.itemName = this.task.value.itemName;
    this.itemDueDate = this.task.value.itemDueDate;
    this.itemPriority = this.task.value.itemPriority;
    this.categorySelectedCategory = this.task.value.itemCategory;
  }
  selectCategory(index: number) {
    this.categorySelectedCategory = this.categories[index];
  }

  async dismis() {
    await this.modalCtlr.dismiss();
  }

  async update() {
    this.newTaskObj = {
      itemName: this.itemName,
      itemDueDate: this.itemDueDate,
      itemPriority: this.itemPriority,
      itemCategory: this.categorySelectedCategory,
    };
    let uid = this.task.key;
    this.todoServive.updateTask(uid, this.newTaskObj);
    this.dismis();
  }
}
