// Making a to-do list using objects

let todoList = {
    todos: [],

    // Display todos
    printTodo: function() {
        console.log('My todos: ');

        // If todo list is empty, print that the list is empty
        if (this.todos.length === 0) {
            console.log("Your todo list is empty.");
        }

        // If to do list is not empty, print the to-dos out
        else {
            for (let i = 0; i < this.todos.length; i++) {

                // If todo is completed
                if (this.todos[i].completed === true) {
                    console.log('(x)', this.todos[i].todoText);
                }

                // If todo is NOT completed
                else {
                    console.log('( )',this.todos[i].todoText);
                }
            };
        }   
    },

    // Add a todo
    addTodo: function(todoText) {
        this.todos.push({
            todoText: todoText,
            completed: false
        });
        this.printTodo();
    },

    // Change a todo
    changeTodo: function(position, todoText) {
        this.todos[position].todoText = todoText;
        this.printTodo();
    },

    // Delete a todo
    deleteTodo: function(position) {
        this.todos.splice(position, 1);
        this.printTodo();
    },

    // Toggle a todo to completed or not completed
    toggleCompleted: function(position) {
        let todo = this.todos[position];
        todo.completed = !todo.completed;
        this.printTodo();
    },

    // Toggle all todos as completed or not 
    toggleAll: function() {
        let completedTodos = 0;
        let totalTodos = this.todos.length;

        // Get number of completed todos
        for (let i = 0; i < totalTodos; i++) {
            if (this.todos[i].completed === true) {
                completedTodos++;
            }
        }
        // Case 1: If everything is true, make everything false
        if (completedTodos === totalTodos) {
            for (let i = 0; i < totalTodos; i++) {
                this.todos[i].completed = false;
            }
        }
        // Case 2: Otherwise, make everything true
        else {
            for (let i = 0; i < totalTodos; i++) {
                this.todos[i].completed = true;
            }
        }
        this.printTodo();
    }
}

// Click Display Todos Button
let displayTodosButton = document.getElementById('display-btn');
displayTodosButton.addEventListener('click', function() {
    todoList.printTodo();
});

// Click Toggle All button
let toggleAllButton = document.getElementById('toggle-btn');

toggleAllButton.addEventListener('click', function() {
    todoList.toggleAll();
});

// Want to run toggle all when someone clicks