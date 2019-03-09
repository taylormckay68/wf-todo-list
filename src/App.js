import React, { Component} from "react";
import {hot} from "react-hot-loader";
import {Header} from './components/styled-components/App';
import Navbar from './components/Navbar';
import TaskModal from './components/TaskModal';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            taskModal: false,
            taskArr: [],
            category: '',
            description: '',
            info: ''
        }
    }

    toggleModal = () => this.setState({taskModal: !this.state.taskModal})

    handleChange = (event) => {
        console.log(event.target.value);
        this.setState({[event.target.name]: event.target.value});
      }
    
    handleSubmit = (event) => {
        let {category, info, description, taskArr} = this.state;
        this.setState({
            taskArr: [...this.state.taskArr, {category, info, description}],
            category: '',
            info: ''
        })
        this.toggleModal();
        event.preventDefault();
    }

    render(){
        let {taskModal} = this.state;
        return(
        <div className="App">
            <TaskModal {...this.state} toggle={this.toggleModal} handleChange={this.handleChange} handleSubmit={this.handleSubmit} className="task-modal"/>
            <Navbar className="navbar" toggle={this.toggleModal}/>
            {JSON.stringify(this.state.taskArr)}
        </div>
        );
    }
}

export default hot(module)(App);