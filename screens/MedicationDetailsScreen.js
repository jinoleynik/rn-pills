import React from 'react';
import { StyleSheet } from 'react-native';
import { Card, CardItem,  Container, Content, Text } from 'native-base';

export default function MedicationDetailsScreen({ navigation }) {
  const med = navigation.getParam("med");

  
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

MedicationDetailsScreen.navigationOptions = {
  title: 'Medication details',
};


const styles = StyleSheet.create({
  cardText: {
    fontSize: 24
  },
  cardTextConfirm: {
    fontSize: 24,
    color: "green"
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
