import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage implements OnInit {
  todos: { task: string, completed: boolean }[] = [];
  newTodo: string = '';

  constructor(private toastController: ToastController,
              private storage: Storage)
              {
                this.storage.create();
                this.getItem();
              }

  ngOnInit() {}

  setItem(){
    // this.storage.set('task', JSON.stringify(this.todos));
    localStorage.setItem('task',JSON.stringify(this.todos))
  }

  getItem(){
    // var task = this.storage.get('task')
    // console.log("la tarea es:" + task);

    var proyect = localStorage.getItem('task')

    if (proyect == null) return;

    this.todos = JSON.parse(proyect);
    console.log(proyect)
  }

  async addToDo() {
    if (this.newTodo.trim().length > 0) {
      this.todos.push({ task: this.newTodo, completed: false });
      this.newTodo = '';
      this.setItem();
      this.getItem();
    } else {
      const toast = await this.toastController.create({
        color: 'danger',
        message: '¡Llena el campo antes de agregar la tarea!',
        duration: 4000, 
        position: 'top'
      });
      toast.present();
    }
  }

  toggleComplete(index: number) {
    this.todos[index].completed = !this.todos[index].completed;
  }

  editTask(index: number){

  }

  async removeTask(index: number) {
    this.todos.splice(index, 1);
    localStorage.removeItem('task');
    const toast = await this.toastController.create({
      color: 'success',
      message: '¡Tarea Eliminada!',
      duration: 4000, 
      position: 'top',
      icon: 'trash'
    });
    toast.present();
  }
}