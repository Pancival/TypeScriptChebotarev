enum Priority {
    LOW = 'low',
    MEDIUM = 'medium',
    HIGH = 'high'
}

enum Status {
    ACTIVE = 'active',
    INACTIVE = 'inactive'
}

interface Todo {
    task: string;
    priority: Priority;
}

interface User {
    name: string;
    status: Status;
    todos: Todo[];
    changeStatus(newStatus: Status): void;
    addTodo(task: string, priority?: Priority): void;
    displayTodos(): void;
    displayActiveTodos(): void;
}

const user: User = {
    name: '',
    status: Status.ACTIVE,
    todos: [],

    changeStatus(newStatus: Status) {
        this.status = newStatus;
        console.log(`User status changed to ${newStatus}`);
    },

    addTodo(task: string, priority: Priority = Priority.MEDIUM) {
        this.todos.push({ task, priority });
        console.log(`Todo added: ${task} (Priority: ${priority})`);
    },

    displayTodos() {
        console.log(`Todos for ${this.name}:`);
        this.todos.forEach(todo => 
            console.log(`${todo.task} (Priority: ${todo.priority})`)
        );
    },

    displayActiveTodos() {
        console.log(`Active Todos for ${this.name}:`);
        this.todos
            .filter(todo => todo.priority !== Priority.HIGH)
            .forEach(todo => 
                console.log(`${todo.task} (Priority: ${todo.priority})`)
            );
    }
};

user.name = 'John';
user.changeStatus(Status.ACTIVE);
user.addTodo('take delivery', Priority.HIGH);
user.addTodo('stocktaking', Priority.HIGH);
user.addTodo('collect the order');
user.addTodo('throw out the trash', Priority.LOW);
user.displayTodos();
user.displayActiveTodos();
user.changeStatus(Status.INACTIVE);

console.log(`Current status: ${user.status}`);
console.log(`Total todos: ${user.todos.length}`);
console.log(`Contains HIGH priority todos: ${user.todos.some(todo => todo.priority === Priority.HIGH)}`);
