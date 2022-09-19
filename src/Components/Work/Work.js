import React, { Component } from 'react'
import axios from 'axios';
import './workstyle.css'
class Work extends Component {
 
  state = {
    works: []
  }

  componentDidMount() {
    axios.get('js/data.json').then((res) => this.setState({works: res.data.works}))
    console.log(this.state.works)
  }
  render () {
    const {works} = this.state;
    let workList = works.map((ele, i) => {
      return (
        <div id={ele.id} className='box' key={i}>
          <i className={ele.icon_name}/>
          <h3>{ele.title}</h3>
          <p>{ele.body}</p>
        </div>
      )
    })
    return (
      <div id='work' className='work'>
        <h2>My Works</h2>
        <div className='container'>
          {workList}
        </div>
      </div>
    )
  }
}

export default Work;
