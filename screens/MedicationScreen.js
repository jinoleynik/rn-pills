import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { CheckBox, Card, CardItem, Container,  Content,  Text } from 'native-base';

const medications = [
  "Acetaminophen",
  "Adderall",
  "Alprazolam",
  "Amitriptyline",
  "Amlodipine",
  "Amoxicillin",
  "Ativan",
  "Atorvastatin",
  "Azithromycin",
  "Ciprofloxacin",
  "Citalopram",
  "Metoprolol",
  "Naproxen",
  "Omeprazole",
  "Oxycodone",
  "Pantoprazole",
  "Prednisone",
  "Tramadol",
  "Trazodone",
  "Viagra",
  "Wellbutrin",
  "Xanax",
  "Zoloft"
]

const Min15 = 1000 * 60 * 15;

export default function MedicationScreen({ navigation }) {

  const [items, setItems] = useState([]);
  useEffect(() => {
    const count = 5 + parseInt(Math.random() * 20);
    let list = [];
    let date = new Date() 
    for (let i = 0; i < count; i++) {     
      date.setTime(date.getTime() + i*Min15)
      const [hour, minute] = date.toLocaleTimeString().split(":")
      list.push({
        id: i,
        name: medications[i % medications.length],
        checked: false,
        date: hour + ":" + minute 
      });
    }
    setItems(list);
  }, []);

  const handleCheck = (item) => {
    const index = items.findIndex(med => med.id === item.id);
    if (index !== -1) {
      items[index].checked = !items[index].checked;
      setItems([...items])
    }
  }

  const handleClickItem = (item) => {
    navigation.navigate('MedicationDetails', { med: item })
  }


  return (
    <Container>
      <Content style={styles.cardWrap} >
        <Card >
          <CardItem bordered title><Text>Medications</Text></CardItem>
          {items.map((item, index) => {
            return <CardItem button onPress={() => handleClickItem(item)}  key={index} style={styles.medRow}>
              <Text style={styles.rowTime}>{item.date}</Text>
              <View style={styles.rowName}>
                <Text >{item.name}</Text>
              </View>
              <CheckBox onPress={() => handleCheck(item)} checked={item.checked} />
            </CardItem>
          })}

        </Card>
      </Content>
    </Container>
  );
}

MedicationScreen.navigationOptions = {
  title: 'Medication',
};

const styles = StyleSheet.create({
  cardWrap: {
    padding: 16
  },
  medRow: {
    flex: 1
  },
  rowTime: {
    flex: 1,
    color: "#cacaca"
  },
  rowName: {
    flex: 3,
    paddingStart: 8,
    paddingEnd: 8
  }
});
