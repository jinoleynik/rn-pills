import React from 'react';
import { StyleSheet } from 'react-native';
import { Card, CardItem, Container, Content, Text } from 'native-base';
import { useSelector } from "react-redux";


export default function UserScreen({ navigation }) {

  const { userName } = useSelector(state => ({
    userName: state.user.userName
  }));

  return <Container>
    <Content style={styles.cardWrap} >
      <Card style={styles.centerWrap} >
        <CardItem >
          <Text style={styles.cardText}>{userName}</Text>
        </CardItem>
      </Card>
    </Content>
  </Container>;
}

UserScreen.navigationOptions = {
  title: 'User',
};


const styles = StyleSheet.create({
  cardText: {
    fontSize: 24
  },   
  cardWrap: {
    padding: 16
  },
  centerWrap: {
    paddingTop: 24,
    paddingBottom: 24,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
});
