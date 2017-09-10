import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';

@Injectable()
export class TodoService {
    constructor(public storage: Storage) {
    }
    getTodos(){
        return this.storage.get('todos');
    }
    setTodos(todos){
        return this.storage.set('todos',JSON.stringify(todos));
    }
}