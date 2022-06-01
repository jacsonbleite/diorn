import React from "react";
import {View, Image, StyleSheet, SafeAreaView, StatusBar,Text, Pressable, Linking} from 'react-native';

const colorGitHub = '#010409'
const colorFontGithub = '#C9D1D9'
const colorFontGithubNikname = '#4F565E'
const imageProfileGitHub = 'https://avatars.githubusercontent.com/u/42217315?v=4'
const urlToGithub = 'https://github.com/jacsonbleite'

const App = () => {
  
  const handlePressGotToGithub = async () =>{
    console.log('Verificando link')
    const res = await Linking.canOpenURL(urlToGithub)
    console.log('Link aprovado')
    if(res){
      await Linking.openURL(urlToGithub)
    }
  }

  return (
    <SafeAreaView  style={style.container}>
      <StatusBar backgroundColor={colorGitHub} barStyle="light-content"/>
        <View style={style.content}>
          <Image 
            accessibilityLabel='Jacson com camisa preta'
            style={style.avatar}
            source={{uri:imageProfileGitHub, }} 
          />
          <Text
          accessibilityLabel='Nome Jacson Leite'
           style={[style.defaultText, style.name]}           
          >Jacson Leite</Text>
          <Text
            accessibilityLabel='Nikname jacsonleite'
            style={[style.defaultText, style.nikname]}
           >
             jacsonbleite
           </Text>

          <Text accessibilityLabel='Descrição: Estudande de Análise e Desenvolvimento de Sistemas na UniDomBosco'
            style={[style.defaultText, style.description]}
          >
            Estudande de Análise e Desenvolvimento de Sistemas na UniDomBosco
          </Text>
          <Pressable onPress={handlePressGotToGithub}>
              <View style={style.button}>
                  <Text style={[style.defaultText, style.textButton]}>Open in Github</Text>
              </View>
            </Pressable>
        </View>
    </SafeAreaView>
  )
}

export default App

const style = StyleSheet.create({
  container:{
    backgroundColor: colorGitHub,
    flex:1, //toda tela,
    justifyContent:'center',
    alignItems: 'center',
    padding: 20
  },
  content:{
    alignItems: 'center'
  }, 
  avatar:{
    height:200,
    width:200,
    borderRadius:100,
    borderColor: 'gray',
    borderWidth:1
  },
  defaultText:{
    color:colorFontGithub,
    marginBottom: 5
  },
  name:{
    marginTop: 20,
    fontWeight:'bold',
    fontSize: 24
  },
  nikname:{
    fontSize: 18,
    color:colorFontGithubNikname
  },
  description:{
    fontWeight:'bold',
    fontSize: 15
  },
  button:{
    backgroundColor: colorFontGithubNikname,
    borderRadius:10,
    padding:20,
    marginTop:20
  },
  textButton:{
    fontWeight:'bold',
    fontSize: 16
  }
  
})