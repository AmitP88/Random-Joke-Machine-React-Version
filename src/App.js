import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import $ from 'jquery';
import 'font-awesome/css/font-awesome.min.css';

$("document").ready(function() {
  setTimeout(function() {
      $("#new-quote").trigger('click');
  },10);
});

class Wrapper extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
      var joke = '';
      $("#new-quote").on("click", function() {
          $.getJSON("https://official-joke-api.herokuapp.com/random_joke", function(json) {
              joke = json.setup + " " + json.punchline;
              $("#text").html("Joke : " + JSON.stringify(json.setup));
              $("#author").html("Punchline : " + JSON.stringify(json.punchline));
              $("#tweet-quote").attr('href', 'https://twitter.com/intent/tweet?text='+joke).attr('target', '_blank');
            });
      });  
  }

  render() {
    return (
      <div id="quote-box">
        <div className="quote-box">
          <p className="setup" id="text"></p>
          <p className="punchline" id="author"></p>      
        </div>

        <div className="buttons">
          <button className="generate-button button" id="new-quote">New Joke</button>
          <a id="tweet-quote" href="https://twitter.com/intent/tweet" data-size="large" target="_blank">
            <button className="twitter-share-button button">
              <i className="fa fa-twitter fa-2x"></i>          
            </button>
          </a>     
        </div>
        <p className="api-source">Special thanks to David Katz for providing the <a href="https://github.com/15Dkatz/official_joke_api" target="_blank">Official Joke API</a> !</p>        
      </div>
    );
  }
}

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <footer>
          <a href="https://github.com/AmitP88/Random-Joke-Machine" target="_blank">
          <i className="fa fa-github fa-4x"></i>
          </a>      
          <p>Developed by <a href="https://github.com/AmitP88" target="_blank" className="github-profile-link">Amit Patel</a></p>      
      </footer>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Random Joke Machine</h1>
        </header>
        <Wrapper/>
        <Footer />
      </div>
    );
  }
}

export default App;
