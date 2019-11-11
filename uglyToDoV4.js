// Making a to-do list using objects

let todoList = {
    todos: [],
    printTodo: function() {
        console.log('My todos:', this.todos);
    },
    addTodo: function(todoText) {
        this.todos.push({
            todoText: todoText,
            completed: false
        });
        this.printTodo();
    },
    changeTodo: function(position, todoText) {
        this.todos[position].todoText = todoText;
        this.printTodo();
    },
    deleteTodo: function(position) {
        this.todos.splice(position, 1);
        this.printTodo();
    },
    toggleCompleted: function(position) {
        let todo = this.todos[position];
        todo.completed = !todo.completed;
        this.printTodo();
    }
}