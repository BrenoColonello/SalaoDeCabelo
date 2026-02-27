import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors, spacing } from '../theme/colors';

type HeaderBarProps = {
  title: string;
  onNotifications?: () => void;
};

export default function HeaderBar({ title, onNotifications }: HeaderBarProps) {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <View style={styles.logoWrap}>
          <Image
            source={require('../../assets/logo.png')}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>
        <Text style={styles.title} numberOfLines={1}>
          {title}
        </Text>
      </View>
      <TouchableOpacity
        style={styles.notifyBtn}
        onPress={onNotifications}
        accessibilityLabel="Notificacoes"
      >
        <Text style={styles.notifyIcon}>!</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.md,
    paddingBottom: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    backgroundColor: colors.white,
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    flex: 1,
  },
  logoWrap: {
    width: 44,
    height: 44,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: colors.gold,
    backgroundColor: colors.surface,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 34,
    height: 34,
  },
  title: {
    fontSize: 18,
    fontWeight: '800',
    color: colors.text,
  },
  notifyBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.gold,
    backgroundColor: colors.pinkSoft,
  },
  notifyIcon: {
    fontSize: 16,
    fontWeight: '900',
    color: colors.goldDark,
  },
});
