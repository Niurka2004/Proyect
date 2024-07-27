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
              }

  ngOnInit() {
    this.loadTask();
  }

  async addToDo() {
    if (this.newTodo.trim().length > 0) {
      this.todos.push({ task: this.newTodo, completed: false });
      this.newTodo = '';
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
    const updateTodo = prompt('Editar la tarea:',this.todos[index].task);
    if(updateTodo !== null)
      this.todos[index].task = updateTodo;
    this.save();
  }

  async removeTask(index: number) {
    this.todos.splice(index, 1);
    const toast = await this.toastController.create({
      color: 'success',
      message: '¡Tarea Eliminada!',
      duration: 4000, 
      position: 'top',
      icon: 'trash'
    });
    toast.present();
    this.save();
  }

  private save(){
    localStorage.setItem('todos','1'),JSON.stringify(this.todos)
  }

  private loadTask(){
    const storedTask = localStorage.getItem('todos');
    if(storedTask)
      this.todos = JSON.parse(storedTask);
  }

}