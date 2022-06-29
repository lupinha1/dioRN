import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  StatusBar,
  Image,
  Pressable,
  Linking,
} from 'react-native';
const colorGitHub = '#010409';
const linkImagem = 'https://c.stocksy.com/a/XOL200/z9/558901.jpg';
const urlGithub = 'https://github.com/lupinha1';

const App = () => {
  const handlePressGoToGithub = async () => {
    const res = await Linking.canOpenURL(urlGithub);
    if (res) {
      await Linking.openURL(urlGithub);
    }
  };

  return (
    <SafeAreaView style={style.container}>
      <StatusBar backgroundColor={colorGitHub} barStyle="light-content" />
      <View style={style.content}>
        <Image style={style.avatar} source={{uri: linkImagem}} />
        <Text style={style.defaultText}>Lupinha1</Text>
        <Pressable onPress={handlePressGoToGithub}>
          <View style={style.button}>
            <Text style={style.defaultText}>Open in GitHub</Text>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: colorGitHub,
    flex: 1,
    justifyContent: 'center',
  },
  content: {
    alignItems: 'center',
    padding: 20,
  },
  avatar: {
    height: 200,
    width: 200,
    borderRadius: 100,
    borderColor: 'white',
    borderWidth: 2,
  },
  defaultText: {
    color: 'white',
  },
  button: {
    borderRadius: 10,
    backgroundColor: 'gray',
    padding: 20,
    marginTop: 20,
  },
});

export default App;
