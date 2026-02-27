import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { colors, spacing } from '../theme/colors';
import { Role } from '../types';

type LoginScreenProps = {
  onSelectRole: (role: Role) => void;
};

export default function LoginScreen({ onSelectRole }: LoginScreenProps) {
  return (
    <View style={styles.loginWrap}>
      <View style={styles.bgBlobGold} />
      <View style={styles.bgBlobPink} />

      <View style={styles.header}>
        <View style={styles.logoPlaceholder}>
          <Image
            source={require('../../assets/logo.png')}
            style={styles.logoImage}
            resizeMode="contain"
          />
        </View>
        <Text style={styles.title}>Espaco Jack Schultz</Text>
        <Text style={styles.subtitle}>Escolha seu acesso para continuar</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Entrar como</Text>
        <TouchableOpacity
          style={[styles.roleBtn, styles.roleBtnGold]}
          onPress={() => onSelectRole('cliente')}
        >
          <Text style={styles.roleBtnText}>Cliente</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.roleBtn, styles.roleBtnPink]}
          onPress={() => onSelectRole('cabeleleira')}
        >
          <Text style={styles.roleBtnText}>Cabeleleira</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  loginWrap: {
    flex: 1,
    paddingHorizontal: spacing.lg,
    justifyContent: 'center',
  },
  bgBlobGold: {
    position: 'absolute',
    top: -60,
    right: -40,
    width: 220,
    height: 220,
    borderRadius: 140,
    backgroundColor: colors.gold,
    opacity: 0.45,
  },
  bgBlobPink: {
    position: 'absolute',
    bottom: -80,
    left: -60,
    width: 260,
    height: 260,
    borderRadius: 160,
    backgroundColor: colors.pink,
    opacity: 0.35,
  },
  header: {
    alignItems: 'center',
    marginBottom: spacing.lg,
  },
  logoPlaceholder: {
    width: 128,
    height: 128,
    borderRadius: 64,
    borderWidth: 2,
    borderColor: colors.gold,
    backgroundColor: colors.surface,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -90,
    marginBottom: spacing.md,
  },
  logoImage: {
    width: 250,
    height: 250,
  },
  title: {
    fontSize: 26,
    fontWeight: '800',
    color: colors.text,
    letterSpacing: 0.5,
  },
  subtitle: {
    marginTop: spacing.xs,
    fontSize: 14,
    color: colors.textMuted,
  },
  card: {
    backgroundColor: colors.white,
    borderRadius: 16,
    padding: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
    elevation: 2,
    alignSelf: 'center',
    width: '100%',
    maxWidth: 360,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#3a2f23',
    marginBottom: spacing.sm,
  },
  roleBtn: {
    height: 52,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.sm,
  },
  roleBtnGold: {
    backgroundColor: colors.gold,
  },
  roleBtnPink: {
    backgroundColor: colors.pink,
  },
  roleBtnText: {
    color: '#2b2219',
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
});
