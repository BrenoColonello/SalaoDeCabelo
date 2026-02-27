import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

type Role = 'cliente' | 'cabeleleira' | null;

export default function App() {
  const [role, setRole] = useState<Role>(null);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      {role === null ? (
        <LoginScreen onSelectRole={setRole} />
      ) : (
        <BlankScreen role={role} onBack={() => setRole(null)} />
      )}
    </SafeAreaView>
  );
}

function LoginScreen({ onSelectRole }: { onSelectRole: (role: Role) => void }) {
  return (
    <View style={styles.loginWrap}>
      <View style={styles.bgBlobGold} />
      <View style={styles.bgBlobPink} />

      <View style={styles.header}>
        <View style={styles.logoPlaceholder}>
          <Image
            source={require('./assets/logo.png')}
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

function BlankScreen({ role, onBack }: { role: Exclude<Role, null>; onBack: () => void }) {
  const isCliente = role === 'cliente';
  return (
    <View style={styles.blankWrap}>
      <View style={styles.blankHeader}>
        <Text style={styles.blankTitle}>
          {isCliente ? 'Area do Cliente' : 'Area da Cabeleleira'}
        </Text>
        <Text style={styles.blankSubtitle}>Tela em branco para configurar depois</Text>
      </View>
      <TouchableOpacity style={styles.backBtn} onPress={onBack}>
        <Text style={styles.backBtnText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  loginWrap: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: 'center',
  },
  bgBlobGold: {
    position: 'absolute',
    top: -60,
    right: -40,
    width: 220,
    height: 220,
    borderRadius: 140,
    backgroundColor: '#E7C872',
    opacity: 0.45,
  },
  bgBlobPink: {
    position: 'absolute',
    bottom: -80,
    left: -60,
    width: 260,
    height: 260,
    borderRadius: 160,
    backgroundColor: '#F2A6C1',
    opacity: 0.35,
  },
  header: {
    alignItems: 'center',
    marginBottom: 24,
  },
  logoPlaceholder: {
    width: 128,
    height: 128,
    borderRadius: 64,
    borderWidth: 2,
    borderColor: '#E7C872',
    backgroundColor: '#FFF6DB',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -90,
    marginBottom: 16,
  },
  logoImage: {
    width: 210,
    height: 210,
  },
  title: {
    fontSize: 26,
    fontWeight: '800',
    color: '#1f1a14',
    letterSpacing: 0.5,
  },
  subtitle: {
    marginTop: 6,
    fontSize: 14,
    color: '#6b5e52',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    borderColor: '#F0E2C2',
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
    marginBottom: 12,
  },
  roleBtn: {
    height: 52,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  roleBtnGold: {
    backgroundColor: '#E7C872',
  },
  roleBtnPink: {
    backgroundColor: '#F2A6C1',
  },
  roleBtnText: {
    color: '#2b2219',
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  blankWrap: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 40,
    justifyContent: 'space-between',
  },
  blankHeader: {
    alignItems: 'center',
  },
  blankTitle: {
    fontSize: 24,
    fontWeight: '800',
    color: '#1f1a14',
  },
  blankSubtitle: {
    marginTop: 8,
    fontSize: 14,
    color: '#6b5e52',
  },
  backBtn: {
    height: 48,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E7C872',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
  },
  backBtnText: {
    color: '#9B7A1A',
    fontWeight: '700',
  },
});
