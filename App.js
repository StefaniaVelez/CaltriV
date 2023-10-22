import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  KeyboardAvoidingView,
  Image,
  ScrollView
} from "react-native";

import React from 'react';
import { useState } from "react";

export default function App() {
  const [text, setText] = useState("Hola");
  const [data, setData] = useState({});

  const App = () => {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        {/* Aquí va tu interfaz */}
        <TextInput style={styles.input} placeholder="Ingresa texto" />
      </KeyboardAvoidingView>
    );
  };
  
  const Enviar = () => {
    fetch("https://manukga.onrender.com", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      // body: JSON.stringify(data), // Convierte los datos a JSON 
    })
      .then((response) => response.json())
      .then((responseData) => {
        setText("Respuesta de la API:" + responseData[0]);
        console.log("Respuesta de la API:", responseData)
        // Puedes realizar acciones adicionales aquí, como mostrar un mensaje al usuario. 
      })
      .catch((error) => {
        console.error("Error al enviar el formulario:", error);
      });
  };

  return (
    <View style={styles.container}>
      
      <View style={styles.marco}>
      </View>

      <View style={styles.marco2}>
      </View>

      <View style={styles.Padre}>
        <View style={styles.tio1}>
          <Text style={styles.texto1}>Radio externo</Text>
          <View style={styles.verde}></View>
          <TextInput
            style={styles.inputs1}
            keyboardType="numeric"
            onChangeText={(texto) => setData({ ...data, logintud: texto })}
            placeholder="0.00"
          />
        </View>
        <View style={styles.tio2}>
          <Text style={styles.texto2}>Radio interno</Text>
          <View style={styles.azul}></View>
          <TextInput
            style={styles.inputs1}
            keyboardType="numeric"
            keyboard
            onChangeText={(texto) => setData({ ...data, logintud: texto })}
            placeholder="0.00"
          />
        </View>
        <View style={styles.circulo}>
          <View style={styles.circulito}>
            <View style={styles.circulitoCobre}>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.Fre}>
        <Text style={styles.texto3}>Frecuencia</Text>
          <TextInput
            style={styles.inputs1}
            keyboardType="numeric"
            onChangeText={(text) => setData({ ...data, frecuencia: text })}
            placeholder="Frecuencia"
          />
      </View>

      <View style={styles.Fre}>
      <Text style={styles.texto3}>Longitud</Text>
      <TextInput
          style={styles.inputs1}
          keyboardType="numeric"
          onChangeText={(texto) => setData({ ...data, logintud: texto })}
          placeholder="Longitud"
        />
      </View>

      
      <View style={styles.Fre}>
      <Text style={styles.texto3}>Permitividad relativa</Text>
      <TextInput
          style={styles.inputs1}
          keyboardType="numeric"
          onChangeText={(texto) => setData({ ...data, logintud: texto })}
          placeholder="e"
        />
      </View>

      <View style={styles.Fre}>
      <Text style={styles.texto3}>Permeabilidad relativa</Text>
      <TextInput
          style={styles.inputs1}
          keyboardType="numeric"
          onChangeText={(texto) => setData({ ...data, logintud: texto })}
          placeholder="u"
        />
      </View>

      


      <View style={styles.Fre}>
      <Text style={styles.texto3}>Conductividad electrica</Text>
      <TextInput
          style={styles.inputs1}
          keyboardType="numeric"
          onChangeText={(texto) => setData({ ...data, logintud: texto })}
          placeholder="o"
        />
      </View>

      <View style={styles.inputsDiv}>
      </View>

      <View style={styles.inputsDiv}>
        <TouchableOpacity
          style={styles.botonEnviar}
          onPress={Enviar()}
        >
          <Text style={styles.textBtn1}>Enviar</Text>
        </TouchableOpacity>
        <Button title="Encender foco" />
      </View>
    </View>

    
  );
}

const styles = StyleSheet.create({
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    paddingHorizontal: 10,
    marginBottom: 10,
  },

  img: {
    width: '100%',
    height: '100%'
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  marco: {
    width: '100%',
    height: 50,
    backgroundColor: '#4D4D4D',
    position: 'absolute',
    top: 0
  },

  marco2: {
    width: '100%',
    height: 50,
    backgroundColor: '#4D4D4D',
    position: 'absolute',
    bottom: 0,
  },

  Padre: {
    width: '100%',
    height: 100,
    marginBottom:130,
    marginRight: -30,
    position: 'relative',
    marginTop:-100,
  },

  tio1: {
    position:'absolute',
    width:'30%',
    height:100,
    right: 50,
    bottom: -10,
  },

  verde: {
    width:'100%',
    height:8,
    backgroundColor: '#4FCF8F',
  },

  texto1: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center'
  },


  tio2: {
    position:'absolute',
    width:'30%',
    height:100,
    right: 50,
    bottom: -110,
  },

  azul: {
    width:'100%',
    height:8,
    backgroundColor: '#286F96',
  },

  texto2: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center'
  },

  circulo: {
    width: '50%',
    height: 200,
    backgroundColor: '#9D9A9A',
    borderRadius: 150,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 110,
    marginBottom: 5
  },

  circulito: {
    width: '83%',
    height: '83%',
    backgroundColor: '#ECECEC',
    borderRadius: 110,
    borderColor: 'red',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },

  circulitoCobre: {
    width: '40%',
    height: '40%',
    backgroundColor: '#D07131',
    borderRadius: 100,
    borderColor: 'red',
    borderwidth: '10px',
  },

  itemName: {
    alignSelf: "center",
    color: "red",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "500",
    letterSpacing: -0.16,
  },

  Fre:{
    width: '100%',
    height: 30,
    marginBottom: 5,
    flexDirection:'row',
    justifyContent:'center',
    marginTop:10,
    gap:50
  },

  texto3: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    width:'30%',
    height:50
  },

  /*inputsDiv: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginBottom: 20,
  },*/

  inputs1: {
    height: 40,
    width: 100,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 10,
    padding: 10,
    marginTop: 5,
  },

  botonEnviar: {
    backgroundColor: "green",
    padding: 5,
    width: 100,
    color: "white",
    textAlign: "center",
    borderRadius: 10,
  },

  textBtn1: {
    color: "white",
    textAlign: "center",
  },
});