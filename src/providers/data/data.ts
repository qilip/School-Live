import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

import { Storage } from '@ionic/storage';

@Injectable()
export class DataProvider {

  constructor(public storage: Storage){
    
     }
    
     getData() {
       return this.storage.get('todos');  
     }
    
     save(data){
       let newData = JSON.stringify(data);
       this.storage.set('todos', newData);
     }
     clear(){
       return this.storage.clear();
     }

     //레거시
     getTodos(){
      return this.storage.get('todos');
  }
  setTodos(todos){
      return this.storage.set('todos',JSON.stringify(todos));
  }
   

}
