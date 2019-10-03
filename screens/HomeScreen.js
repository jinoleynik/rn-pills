import React from 'react';
import {
  Image,
  StyleSheet,
  View,
} from 'react-native';
import { Container, Content, Card, CardItem, Body, Text } from 'native-base';


export default function HomeScreen() {

  const userName = "Eugene";

  return (
    <Container>
      <Content style={styles.wraper}>
        <View style={styles.userHead}>
          <Image
            source={require('../assets/images/ava1.png')}
            style={styles.welcomeImage} />
          <View style={styles.centerWrap}>
            <Text style={styles.userText}>Good day, {userName}</Text>
          </View>
        </View>
        
        <Card style={styles.cardWrap}>
          <CardItem bordered title>
            <Text>Messages</Text>
          </CardItem>
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
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
});
