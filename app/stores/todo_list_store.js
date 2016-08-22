import {observable, computed} from 'mobx'

class TodoListStore {
  @observable todos = [];

  @computed get total() {
    return this.todos.length;
  }

  @computed get doneTotal() {
    return this.todos.filter( (todo)=> {
      return todo.done == true;
    }).length;
  }
}

const todoListStore = new TodoListStore();

export default todoListStore;
