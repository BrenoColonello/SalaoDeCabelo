import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import CabeleleiraScreen from './src/screens/CabeleleiraScreen';
import ClienteScreen from './src/screens/ClienteScreen';
import LoginScreen from './src/screens/LoginScreen';
import { colors } from './src/theme/colors';
import { Role } from './src/types';

export default function App() {
  const [role, setRole] = useState<Role>(null);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      {role === null && <LoginScreen onSelectRole={setRole} />}
      {role === 'cliente' && <ClienteScreen onBack={() => setRole(null)} />}
      {role === 'cabeleleira' && <CabeleleiraScreen />}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
