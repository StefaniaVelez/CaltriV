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
import confetti from "canvas-confetti";

import React from 'react';
import { useState } from "react";

export default function App() {
  const [text, setText] = useState("Hola");
  const [data, setData] = useState({});
  const [textos, setTextos] = useState('');
  const [textos1, setTextos1] = useState('');
  const [prueba, setPrueba] = useState({ texto1: '', texto2: '' })

  const Borrar = () => {
    // alert('hola')
  }

  const Enviar = async () => {
    console.log(typeof (data))
    // try {
    //   fetch("https://linea-transmision.onrender.com/Coaxial/Calculos", {
    //     method: "POST",
    //     body: data,
    //   })
    //     .then((response) => response.json())
    //     .then((responseData) => {
    //       console.log(responseData.detail[{msg}])
    //     })
    // } catch (error) {
    //   alert('El error es: '+error)
    // }
    for (key in data) {
      if (typeof data[key] === 'string') {
        data[key] = parseFloat(data[key])
      }
    }
    console.log(data)
    try {
      const req = await fetch('https://linea-transmision.onrender.com/Coaxial/Calculos',
        {
          headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
          method: 'POST',
          // body: JSON.stringify({ "a": 0.004, "b": 0.006, "l": 1.2, "f": 100000000, "sigma": 0, "Er": 1, "μr": 1 })
          body: JSON.stringify(data)
        });
      const resultado = await req.json();
      console.log(resultado)
    } catch (error) {
      console.log(error)
    }
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
            style={styles.inputs2}
            keyboardType="numeric"
            onChangeText={(texto) => {
              setData({ ...data, a: parseFloat(texto) })
              setTextos(texto)
            }}
            placeholder="0.00"
            value={textos}
          />
        </View>
        <View style={styles.tio2}>
          <Text style={styles.texto2}>Radio interno</Text>
          <View style={styles.azul}></View>
          <TextInput
            style={styles.inputs2}
            keyboardType="numeric"
            keyboard
            onChangeText={(texto) => {
              setData({ ...data, b: texto })
              setTextos1(texto)
            }}
            placeholder="0.00"
            value={textos1}
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
          onChangeText={(texto) => {
            setData({ ...data, l: texto })
            setTextos1(texto)
          }}
          placeholder="Frecuencia"
          value={null}
        />
      </View>

      <View style={styles.Fre}>
        <Text style={styles.texto3}>Longitud</Text>
        <TextInput
          style={styles.inputs1}
          keyboardType="numeric"
          onChangeText={(texto) => {
            setData({ ...data, f: texto })
          }}
          placeholder="Longitud"
        />
      </View>


      <View style={styles.Fre}>
        <Text style={styles.texto3}>Permitividad relativa</Text>
        <TextInput
          style={styles.inputs1}
          keyboardType="numeric"
          onChangeText={
            function (texto) {
              setData({ ...data, sigma: parseInt(texto) })
            }
          }
          placeholder="e"
          value={null}
        />
      </View>

      <View style={styles.Fre}>
        <Text style={styles.texto3}>Permeabilidad relativa</Text>
        <TextInput
          style={styles.inputs1}
          keyboardType="numeric"
          onChangeText={
            function (texto) {
              setData({ ...data, Er: parseInt(texto) })
            }
          }
          placeholder="u"
          value={null}
        />
      </View>

      <View style={styles.Fre}>
        <Text style={styles.texto3}>Conductividad electrica</Text>
        <TextInput
          style={styles.inputs1}
          keyboardType="numeric"
          onChangeText={
            (texto) => {
              setData({ ...data, μr: texto })
            }
          }
          placeholder="o"
          value={null}
        />
      </View>

      <View style={styles.inputsDiv}>
      </View>

      <View style={styles.inputsDiv}>
        <TouchableOpacity
          style={styles.botonEnviar}
          onPress={
            (e) => {
              e.preventDefault();
              Enviar()
              // confetti()
            }
          }

        >
          <Text style={styles.textBtn1}>Enviar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botonBorrar}
          onPressIn={(e) => {
            e.preventDefault();
            // alert("hola")
            setTextos('')
            setTextos1('')
          }}
        >
          <Text style={styles.textBtn2}>Borrar</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.btnDuda}>
        <Text style={styles.btnDudaText}>?</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  btnDuda: {
    width: 80,
    borderWidth: 8,
    borderColor: '#4D4D4D',
    flexDirection: 'row',
    justifyContent: 'center',
    height: 80,
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'white',
    borderRadius: 100,
  },

  btnDudaText: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#4D4D4D',
  },

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
    backgroundColor: '#F6F6F6',
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
    marginBottom: 130,
    marginRight: -30,
    position: 'relative',
    marginTop: -10,
    backgroundColor: '#F6F6F6',
  },

  tio1: {
    position: 'absolute',
    width: '30%',
    height: 100,
    right: 50,
    bottom: -10,
  },

  verde: {
    width: '100%',
    height: 8,
    backgroundColor: '#4FCF8F',
  },

  texto1: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center'
  },


  tio2: {
    position: 'absolute',
    width: '30%',
    height: 100,
    right: 50,
    bottom: -110,
  },

  azul: {
    width: '100%',
    height: 8,
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

  Fre: {
    width: '100%',
    height: 30,
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
    gap: 50
  },

  texto3: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    width: '30%',
    height: 50
  },

  inputsDiv: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginTop: 25,
  },

  inputs1: {
    height: 40,
    width: 100,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 10,
    padding: 10,
    marginTop: 5,
  },

  inputs2: {
    height: 40,
    width: '100%',
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 10,
    padding: 10,
    marginTop: 5,
  },

  botonEnviar: {
    backgroundColor: "#F6F6F6",
    padding: 5,
    width: 100,
    height: 50,
    textAlign: "center",
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 5,
    borderColor: '#64E1A2',
  },

  textBtn1: {
    color: "#64E1A2",
    textAlign: "center",
    fontWeight: 'bold',
    fontSize: 18,
  },

  botonBorrar: {
    backgroundColor: "#F6F6F6",
    padding: 5,
    width: 100,
    height: 50,
    textAlign: "center",
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 5,
    borderColor: '#FF3131',
  },

  textBtn2: {
    color: "#FF3131",
    textAlign: "center",
    fontWeight: 'bold',
    fontSize: 18,
  }
});