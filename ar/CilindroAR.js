'use strict';

import React, { Component } from 'react';

import { StyleSheet } from 'react-native';

import {
  ViroARScene,
  ViroAmbientLight,
  ViroSpotLight,
  Viro3DObject
} from 'react-viro';

export default class CilindroAR extends Component {
  proximo() {
    if (this.state.indice < 3) {
        const i = this.state.indice;
        this.setState({ indice: i + 1 });
    } else {
        Actions.menu();
    }
  }
  render() {
    return (
      <ViroARScene onTrackingUpdated={this._onInitialized} >
        <ViroAmbientLight color={"#aaaaaa"} />
                <ViroSpotLight 
                  innerAngle={5} 
                  outerAngle={90} 
                  direction={[0,-1,-.2]}
                  position={[0, 3, 1]} 
                  castsShadow={true} 
                />
                <Viro3DObject
                  source={require('../obj/cilindro.obj')}
                  resources={[require('../obj/cilindro.mtl'),
                              require('../obj/cilindro.png')]}
                  position={[0, 0, -3]}
                  scale={[.2, .2, .2]}
                  styles={styles.object}
                  type="OBJ" 
                />
      </ViroARScene>
    );
  }
}

const styles = StyleSheet.create({
  object: {
    // color: 'red',
    // backgroundColor: 'blue'  
  },
});

module.exports = CilindroAR;
