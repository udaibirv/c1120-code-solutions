import React from 'react';
import PageTitle from './page-title';
import TodoList from './todo-list';
import TodoForm from './todo-form';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
    this.addTodo = this.addTodo.bind(this);
    this.toggleCompleted = this.toggleCompleted.bind(this);
  }

  componentDidMount() {
    this.getAllTodos();
  }

  getAllTodos() {
    fetch('/api/todos')
    .then(res => res.json())
    .then(data => {
      this.setState({todos: data});
    })

    /**
     * Use fetch to send a GET request to `/api/todos`.
     * Then 😉, once the response JSON is received and parsed,
     * update state with the received todos.
     */
  }

  addTodo(newTodo) {
    const newEntry= req.body;
    fetch('/api/todos', {
      method: 'POST',
      body: JSON.stringify(),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(data => this.setState({todos: newEntry}))
    /**
    * Use fetch to send a POST request to `/api/todos`.
    * Then 😉, once the response JSON is received and parsed,
    * add the created todo to the state array.
    *
    * TIP: Be sure to SERIALIZE the todo object in the body with JSON.stringify()
    * and specify the "Content-Type" header as "application/json"
    */
  }

  toggleCompleted(todoId) {
    let foundTodo;
    const newTodo =  this.state.todos.map(todo => {
      if(todo.todoId === todoId){
        foundTodo = todo.isCompleted;
      }
    })
    console.log(todoId);
    fetch(`/api/todos/${todoId}`, {
      method: 'PATCH',
      body: JSON.stringify({isCompleted: !foundTodo}),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(data => {
      const allTodos = this.state.todos;
      const mapTodos = allTodos.map(todo => {
        if(todo.todoId === todoId){
          return data;
        }else{
          return todo;
        }
      })

      this.setState({todos: mapTodos});


      // todos.map(id => {
      //   if(res.todos.todoId === id){
      //     this.setState({todos: res.todos, !this.state.isComplete})
      //   }
      })


    }

    /**
     * Find the index of the todo with the matching todoId in the state array.
     * Get its "isCompleted" status.
     * Make a new object containing the opposite "isCompleted" status.
     * Use fetch to send a PATCH request to `/api/todos/${todoId}`
     * Then 😉, once the response JSON is received and parsed,
     * replace the old todo in the state array.
     *
     * NOTE: "toggle" means to flip back and forth, so clicking a todo
     * in the list should "toggle" its isCompleted status back and forth.
     *
     * TIP: Be sure to SERIALIZE the updates in the body with JSON.stringify()
     * And specify the "Content-Type" header as "application/json"
     */


  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col pt-5">
            <PageTitle text="Todo App"/>
            <TodoForm onSubmit={this.addTodo}/>
            <TodoList todos={this.state.todos} toggleCompleted={this.toggleCompleted}/>
          </div>
        </div>
      </div>
    );
  }
}
