import React from 'react';
import {KeyboardAvoidingView, View, Text, TextInput, TouchableOpacity, Image, StyleSheet} from 'react-native';

export default function LinkedInLogin() {
  return (
    <KeyboardAvoidingView>
    <View style={styles.container}>

    <Image
    style={styles.logo}
    source={{ uri: "https://www.tmf-group.com/-/media/images/logos/case-study-logos/linkedin.png" }}
    />

    </View>

    <View style={styles.card}>

    <Text style={styles.hello}>Olá novamente!</Text>

    <Image 
      style={styles.profilephoto}
      source={{ uri: "https://i.pinimg.com/474x/5c/0b/85/5c0b85b2c3c15e896d04db8854b9f8cc.jpg" }}
    />

    <Text style={styles.name}>Gustavo Luiz</Text>
    <Text style={styles.email}>g*****@gmail.com</Text>

    <Text style={styles.ret}>...</Text>

    <TextInput
      style={styles.input}
      secureTextEntry={true}
      placeholder=" Senha"
    />

    <TouchableOpacity>
      <Text style={styles.esqueceusenha}>Esqueceu a senha?</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.botao}>
      <Text style={styles.botaotxt}>Entrar</Text>
    </TouchableOpacity>

    <Text style={styles.ou01}>ou</Text>

    <TouchableOpacity style={styles.botaolink}>
      <Text style={styles.entrarlink}>Entre com um link de acesso único</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.botaogoogle}>
      <Text style={styles.entrargoogle}>Entrar com o Google</Text>
    </TouchableOpacity>

    <Text style={styles.ou02}>ou</Text>

    <TouchableOpacity style={styles.outraconta}>
      <Text style={styles.outracontatxt}>Entrar com outra conta</Text>
    </TouchableOpacity>

    </View>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white"
  },
  card: {
    height: 460,
    borderRadius: 6,
    elevation: 3,
    backgroundColor: "#fff",
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#333",
    shadowOpacity: 0.3,
    shadowRadius: 10,
    marginHorizontal: 4,
    marginVertical: 6,
    marginTop: 20
  },
  logo: {
    width: 150,
    height: 40,
    marginLeft: 80
  },
  hello: {
    fontSize: 24,
    marginLeft: 20,
    marginTop: 20
  },
  profilephoto: {
    width: 60,
    height: 60,
    marginLeft: 20,
    marginTop: 25,
    borderRadius: 70
  },
  name: {
    fontWeight: "bold",
    fontSize: 15,
    marginLeft: 95,
    marginTop: -60
  },
  email: {
    fontSize: 15,
    marginLeft: 95,
    marginTop: -3
  },
  ret: {
    fontSize: 25,
    marginLeft: 280,
    marginTop: -45
  },
  input: {
    width: 294,
    height: 42,
    marginTop: 50,
    marginLeft: 15,
    padding: 2,
    borderWidth: 1, //Linhas do input completo!
    fontSize: 16,
    fontWeight: "bold",
    borderRadius: 5,
    borderBottomWidth: 1, //Linha no input. Linha única!
    alignItems: "center"
  },
  esqueceusenha: {
    fontSize: 15,
    marginLeft: 15,
    marginTop: 10,
    fontWeight: "bold",
    color: "#4169E1"
  },
  botao: {
    width: 270,
    height: 40,
    marginLeft: 25,
    marginTop: 20,
    backgroundColor: "#4169E1",
    borderRadius: 25
  },
  botaotxt: {
    fontSize: 17,
    fontWeight: "bold",
    color: "white",
    marginLeft: 108,
    marginTop: 7
  },
  ou01: {
    fontSize: 15,
    marginLeft: 150,
    marginTop: 2    
  },
  botaolink: {
    width: 270,
    height: 40,
    marginLeft: 25,
    marginTop: 5,
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 25
  },
  entrarlink: {
    fontSize: 15,
    fontWeight: "light",
    color: "black",
    marginLeft: 15,
    marginTop: 8
  },
  botaogoogle: {
    width: 270,
    height: 40,
    marginLeft: 25,
    marginTop: 8,
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 25
  },
  entrargoogle: {
    fontSize: 15,
    fontWeight: "light",
    color: "black",
    marginLeft: 60,
    marginTop: 8
  },
  ou02: {
    fontSize: 15,
    marginLeft: 150,
    marginTop: 2     
  },
  outracontatxt: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#4169E1",
    marginLeft: 80,
    marginTop: 4
  }
})
