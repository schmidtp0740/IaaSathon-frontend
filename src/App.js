import React, { Component } from 'react';
import { Row, Col } from 'antd';
import ImageBTN from './components/imagebtn';
import PollData from './components/PollData';
import './App.css';

  class App extends Component {
  render() {
    return (
      <div>
        <Row className="ButtowRow" type="flex" justify="space-around" align="middle" >
          <Col span={12} >
            <ImageBTN name="dog"/>
          </Col>
          <Col span={12}>
            <ImageBTN name="cat"/>
          </Col>
        </Row>
        <PollData/>
      </div>
    );
  }
}

export default App;
