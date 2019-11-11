var todos = ['item1', 'item2'];

// Function to print out todo list
function displayTodos()
{
    console.log('My todos:', todos);
}

// Function to add things to the todo list
function addTodo(todo) // Adds stuff to the array
{
    todos.push(todo);
    displayTodos(); // Prints out the to-do list to confirm that we added something
}

// Function to change things in the todo list by taking in position and text
function changeTodo(position, newTodo)
{
    todos[position - 1] = newTodo;
    displayTodos();
}

// Function to delete things in todo list
function deleteTodo(position)
{
    todos.splice(position - 1, 1);
    displayTodos();
}