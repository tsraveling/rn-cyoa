/**
 * rn-cyoa -> NodeView
 * Created by Tim Raveling on 3/23/20
 * Copyright 2020 Firemark Foundry LLC
 */

import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button} from 'native-base';

class NodeView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text style={styles.room}>{this.props.room}</Text>
        {this.props.doors.map(door => (
          <Button
            key={door.id}
            style={styles.door}
            onPress={() => this.props.onDoor(door.id)}
          >
            <Text style={styles.doorTitle}>{door.choice}</Text>
          </Button>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  room: {
    fontSize: 18,
    fontFamily: 'Cochin',
    marginTop: 20
  },
  door: {
    marginTop: 8,
    paddingLeft: 8,
    paddingRight: 8,
  },
  doorTitle: {
    color: 'white',
    fontFamily: 'Cochin',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default NodeView;
