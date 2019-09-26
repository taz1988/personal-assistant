import React from 'react';
import '../css/tasklist.scss'
import addTaskImage from '../images/plus-circle.png';

class TaskList extends React.Component {

  constructor(props)
  {
    super(props);
    this.state = {
        tasks : [],
        newTaskName : ""
    }
    this.addTask = this.addTask.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  render() {
    return <div class="box task-box">
        <h1 class="content is-large task-title">{this.props.title}</h1>
        <div class="columns is-mobile">
        <div class="field column is-four-fifths">
        <p class="control">
          <input class="input" name="newTaskName" value={this.state.newTaskName} onChange={this.handleInputChange} type="text" placeholder="Task name" />
        </p>
        <p class="control">

         </p>
        </div>
        <div class="column">
             <img src={addTaskImage} onClick={this.addTask} />
         </div>
         </div>

        <hr />
        {this.renderTasks()}
    </div>;
  }

  handleInputChange(event) {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;

      this.setState({
        [name]: value
      });
    }

  addTask(event) {
     let updatedTasks = [... this.state.tasks];
     updatedTasks.push({name: this.state.newTaskName});
     this.setState({
        tasks : updatedTasks,
        newTaskName : ""
     });
  }

  deleteTask(name)
  {
     let updatedTasks = this.state.tasks.filter(task => task.name !== name);
     this.setState({
        tasks : updatedTasks
     });
  }

  renderTasks()
  {
    let taskItems = [];
    this.state.tasks.forEach(task => {
        taskItems.push(<li>{task.name}<a class="delete delete-task" onClick={() => this.deleteTask(task.name)}></a></li>);
    });

    return <ul>{taskItems}</ul>;
  }

}

export default TaskList;