import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { Container, Header, Content, Card, CardItem, Body, Text, Row } from 'native-base';


export default function HomeScreen() {

  const handleHelpPress = function () {
    console.log('click')
  }

  const userName = "Eugene";

  return (
    <Container>
      <Content style={styles.wraper}>
        <View style={styles.userHead}>
          <Image
            source={require('../assets/images/ava1.png')}
            style={styles.welcomeImage}
          />
          <View style={styles.centerWrap}>
            <Text style={styles.userText} >Good day, {userName}</Text>
          </View>

        </View>
        <Card style={styles.cardWrap}>
          <CardItem bordered title><Text>Messages</Text></CardItem>
          <CardItem>
            <Body>
              <Text>
                No sympotoms today
              </Text>
            </Body>
          </CardItem>
        </Card>
      </Content>
    </Container>   
  );
}



HomeScreen.navigationOptions = {
  title: "Dashboard",
};


const styles = StyleSheet.create({
  wraper: {
    padding: 8
  },
  userHead: {
    flex: 1,
    flexDirection: "row"
  },
  centerWrap: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  userText: {
    fontSize: 24,
    fontWeight: "bold"
  },
  cardWrap: {
    marginTop: 16
  },

  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
