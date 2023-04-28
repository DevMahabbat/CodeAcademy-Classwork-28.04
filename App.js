import { FlatList, StyleSheet, View } from 'react-native';
import Card from './src/components/Card';
import Header from './src/components/Header';
import { useState } from 'react';

const data = [
  {
    id: 1,
    iconUri: 'https://a.slack-edge.com/80588/marketing/img/meta/slack_hash_256.png',
    appTitle: 'Slack',
    appSize: 101,
    lastUseDate: 'Used Month Ago',
    isOpen: false
  },
  {
    id: 2,
    iconUri: 'https://a.slack-edge.com/80588/marketing/img/meta/slack_hash_256.png',
    appTitle: 'Slack',
    appSize: 101,
    lastUseDate: 'Used Month Ago',
    isOpen: true
  }
]

export default function App() {

  const [allData, setNewData] = useState(data)

  return (
    <View style={styles.container}>
      <Header />
      <FlatList 
        data={allData}
        keyExtractor={data => data.id}
        renderItem={({item}) => <Card  id={item.id} iconUri={item.iconUri} appTitle={item.appTitle} appSize={item.appSize} lastUseDate={item.lastUseDate} isOpen={item.isOpen} setNewData={setNewData} allData={allData} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEEEEE',
    marginHorizontal: 10,
    marginTop: 50
  },
});
