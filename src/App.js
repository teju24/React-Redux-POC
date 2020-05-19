import React from 'react';
import './App.css';
import Dashboard from "./components/Dashboard";
import Header from "./components/Layout/Header";
import Addproject from "./components/Projects/Addproject";
import updateProject from "./components/Projects/updateProject";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import ProjectBoard from './components/Tasks/ProjectBoard';
import AddTask from './components/Tasks/AddTask';


class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Header />
          </div>
          <Route exact path="/" component={Dashboard}/>
          <Route exact path="/dashboard" component={Dashboard} />
          <Route path="/addproject" component={Addproject} />
          <Route path="/updateproject/:id" component={updateProject} />
          <Route path="/projectBoard/:id" component={ProjectBoard} />
          <Route path="/addtask/:id" component={AddTask}/>
        </Router>
      </Provider>
    );
  }
}

export default App;

