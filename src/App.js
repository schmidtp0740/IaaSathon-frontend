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
            <ImageBTN name="angular"/>
          </Col>
          <Col span={12}>
            <ImageBTN name="ember"/>
          </Col>
          <Col span={12}>
            <ImageBTN name="react"/>
          </Col>
          <Col span={12}>
            <ImageBTN name="vue"/>
          </Col>
        </Row>
        <PollData/>
      </div>
    );
  }
}

export default App;
