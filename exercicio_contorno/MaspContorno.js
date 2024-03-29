import React, { Component } from 'react';
import {
    View,
    ImageBackground,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image
} from 'react-native';

import { Actions } from 'react-native-router-flux';

import next from '../images/icons/next.png';
import conversa from '../images/mascote/talesfinal.png';
import masp from '../images/monumentos/MASP-Contorno300.png';

import logo from '../images/logo/fundonova.png';

let falas = [];

export default class Apresentacao extends Component {

    constructor(props) {
        super(props);
        falas = [
            'Parabéns. Você acertou',
            'vamos aprender mais sobre o paralelepípedo...'

             
        ];
        this.state = { indice: 0 };
    }

    proximo() {
        if (this.state.indice < 1) {
            const i = this.state.indice;
            this.setState({ indice: i + 1 });
        } else {
            Actions.paralelepipedo();
        }
    }

    render() {
        return (
              <ImageBackground source={logo} style={style.container} >
                <View 
                    style={
                            [style.innerContainer, 
                            { alignItems: 'center', paddingTop: 20, height: '50%', }]
                            }
                >
                   
                     <View style={style.button}>
                            <TouchableOpacity onPress={() => this.proximo()}>
                                <Image source={next} size={32} />
                            </TouchableOpacity>
                        </View>

                    <Image source={masp} />
                </View>

                <View style={[style.innerContainer, { height: '55%' }]}>
                    <ImageBackground source={conversa} style={{ flex: 1 }}>
                        <View style={style.texto}>
                            <Text style={style.fala}>
                                {falas[this.state.indice]}
                            </Text>
                        </View>

                      
                    </ImageBackground>

                   
                </View>
            </ImageBackground>
        );
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
    },

    innerContainer: {
        width: '100%',
    },

    titulo: {
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center',
    },

    texto: {
        // borderWidth: 1,
        width: '66%',
        height: '23%',
        marginLeft: '25%',
        marginTop: '3%',
    },

    fala: {
        fontSize: 18,
    },

    button: {
        alignItems: 'center',
        marginLeft: '85%',
        borderRadius: 20,
    },
});
