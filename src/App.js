import React, { Component } from 'react';
import './App.css';
import marked from 'marked'
import { sampleText } from './sampleText'
import Title from './components/Title';

class App extends Component {
  state = {
    text: sampleText
  }

  handleChange = (event) => {
    const value = event.target.value
    this.setState({
      text: value
    })
  }



  componentDidMount() {
    const text = localStorage.getItem('text')
    if (text) {
      this.setState({
        text: text
      })
    } else {
      this.setState({
        text: sampleText
      })
    }
  }
  componentDidUpdate() {
    const text = this.state.text
    localStorage.setItem('text', text)
  }

  renderMarked = (text) => {
    return (
      marked(text, { sanitize: true })
    )
  }

  render() {
    return (
      <div className="container" >
        <Title name="Editor" />
        <div className="row">
          <div className="col-sm-6">
            <textarea className="form-control" rows="30" value={this.state.text} onChange={this.handleChange} />
          </div>
          <div className="col-sm-6">
            <div dangerouslySetInnerHTML={{ __html: this.renderMarked(this.state.text) }}>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
