import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HeaderBar from '../components/HeaderBar';
import { colors, spacing } from '../theme/colors';

export default function CabeleleiraScreen() {
  return (
    <View style={styles.wrap}>
      <HeaderBar title="Espaco Jack Schultz" onNotifications={() => {}} />
      <View style={styles.content}>
        <Text style={styles.title}>Area da Cabeleleira</Text>
        <Text style={styles.subtitle}>Tela em branco para configurar depois</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: spacing.lg,
  },
  title: {
    fontSize: 22,
    fontWeight: '800',
    color: colors.text,
  },
  subtitle: {
    marginTop: spacing.sm,
    fontSize: 14,
    color: colors.textMuted,
  },
});
