import React, { Component } from 'react';
import logo from './logo.svg';
import Main from './components/MainComponent';
import './App.css';
import Head from "./components/HeaderComponent";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="masthead">
          <Head/>
          <div className="container h-100">
            <div className="row h-100 align-items-center">
              <div className="col-12 text-center">
                <h1>Đoàn Văn Minh</h1>
                <p className="lead text-white">- nếu không được sống vì đam mê cuộc đời sẽ trở lên thật trống rỗng -</p>
                <img src="/asset/images/code.png" className="App-logo" alt=""/>
              </div>
            </div>
          </div>
        </header>
        <body className="mt-3">
          <Main/>
        </body>
        <div className="jumbotron mt-3">
        <h5>Developed by Minh Doan Van</h5>
        </div>
      </div>
    );
  }
}

export default App;
