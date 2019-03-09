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
        }
    }

    toggleModal = () => this.setState({taskModal: !this.state.taskModal})

    render(){
        let {taskModal} = this.state;
        return(
        <div className="App">
            {taskModal && <TaskModal taskModal={taskModal} className="task-modal"/>}
            <Navbar className="navbar" toggle={this.toggleModal}/>
            {/* <Header> Hello, World! </Header> */}
        </div>
        );
    }
}

export default hot(module)(App);