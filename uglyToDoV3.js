//  Making a to-do list using arrays

var todos = {
    todoList: ["item1", "item2", "item3"],
    printTodo: function() {
        console.log('My todos:', this.todoList);
    },
    addTodo: function(todo) {
        this.todos.push(todo);
        this.printTodo();
    },
    changeTodo: function(position, newTodo) {
        this.todos[position - 1] = newTodo;
        this.printTodo();
    },
    deleteTodo: function(position) {
        this.todos.splice(position - 1, 1);
        this.printTodo();
    }

}