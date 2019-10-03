import React from 'react';
import { Card, CardItem, Container, Content, Text } from 'native-base';
import { StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';

export default function CalendarScreen() {
  return <Container>
    <Content style={styles.cardWrap} >
      <Calendar />
    </Content>
  </Container>;
}

CalendarScreen.navigationOptions = {
  title: 'Calendar'
};



const styles = StyleSheet.create({
  cardText: {
    fontSize: 24
  }
});