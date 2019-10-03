import React from 'react';
import { Card, CardItem, Container, Content, Text } from 'native-base';
import { StyleSheet } from 'react-native';

export default function SettingsScreen() {
  return <Container>
    <Content style={styles.cardWrap} >
      <Card style={styles.centerWrap} >
        <CardItem>
          <Text style={styles.cardText}>{med.name}</Text>
        </CardItem>
        <CardItem>
          <Text style={styles.cardText}>{med.date}</Text>
        </CardItem>
        {med.checked && <CardItem>
          <Text style={styles.cardTextConfirm}>Confirmed!</Text>
        </CardItem>}
      </Card>
    </Content>
  </Container>;
}

SettingsScreen.navigationOptions = {
  title: 'app.json',
};



const styles = StyleSheet.create({
  cardText: {
    fontSize: 24
  }
});