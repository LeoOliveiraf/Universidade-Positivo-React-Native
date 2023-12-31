import React from "react";
import { StyleSheet, Image, Dimensions, Text } from "react-native";// Utiliza chaves {} pq estamos pegando um componente que foi exportado do React

import topo from '../../assets/topo.png';
// Dimensions.get pega o tamanho do dispositivo
const width = Dimensions.get('screen').width;

export default function Cesta() {
    return <>
        <Image source={topo} style={estilos.topo}/>
        <Text style={estilos.titulo}>Detalhes da Cesta</Text>
        </> // Esse é um fragmento que vai servir para agrupar os componentes sem a necessidade de criar outra camada
}

const estilos = StyleSheet.create({
    topo: {
        width: "100%",
        height: (578 / 768) * width, // Pega a altura divide pelo tamanho e multiplica pelo width
    },
    titulo: {
        width: "100%",
        position: "absolute",
        textAlign: "center",
        fontSize: 16,
        lineHeight: 26,
        color: "white",
        fontWeight: "bold",
        padding: 65
    }
});