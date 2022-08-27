import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, Text, View, Alert, SafeAreaView } from 'react-native';
import Constants from 'expo-constants';

function Separator() {
  return <View style={styles.separator} />
}

export default function App() {
  return (
    <SafeAreaView styles={styles.container} >
      <View>
        <Button title="Aperte aqui" onPress={() => {
          alert('Simples')
        }} />
      </View>
      <Separator />
      <View>
        <Text style={styles.title}>
          Adjust the color in a way that looks standard on each platform. On iOS, the color prop controls the color of the text. On Android, the color adjusts the background Color of the button.
        </Text>
        <Button
          title="Aperte aqui"
          color="black"
          onPress={() => { alert('Button with adjusted color pressed') }}
        />
      </View>
      <Separator />
      <View>
        <Text style={styles.title}>
          All interaction for the component are disabled.
        </Text>
        <Button
          title="Aperte Aqui"
          disabled
          onPress={() => { alert('Cannot press this one') }}
        />
      </View>
      <Separator />
      <View>
        <Text style={styles.title}>
          This layout strategy lets the title define the width of the button.
        </Text>
        <View style={styles.fixToText}>
          <Button
            title="Botão Esquerdo"
            onPress={() => { alert('Left button pressed') }}
          />
          <Button
            title="Botão Diretito"
            onPress={() => { alert('Right button pressed') }}
          />
        </View>
      </View>
      <Separator />
      <Separator />
      <Separator />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    marginHorizontal: 16,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
