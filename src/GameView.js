/**
 * rn-cyoa -> GameView
 * Created by Tim Raveling on 3/23/20
 * Copyright 2020 Firemark Foundry LLC
 */

import React, {Component} from 'react';
import NodeView from './NodeView';
const gameNodes = require('./content/game').nodes;

class GameView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentNode: 0,
    };
  }

  selectNodeWithId(id) {
    const index = gameNodes.findIndex(room => room.id === id) || 0;
    this.setState({currentNode: index});
  }

  render() {
    const node = gameNodes[this.state.currentNode];
    return (
      <NodeView
        room={node.room}
        doors={node.doors}
        onDoor={id => this.selectNodeWithId(id)}
      />
    );
  }
}

export default GameView;
