import React from 'react';
import { HomeView } from './wonder/apps/UserSpace';
/* import { HomeView } from './wonder/apps/Home/index'; */
import {
  SafeAreaView,
  SafeAreaProvider,
  SafeAreaInsetsContext,
  useSafeAreaInsets,
  initialWindowMetrics,
} from 'react-native-safe-area-context';
import { ProfileView } from './wonder/apps/UserSpace';

export default function App() {
  return (
      <ProfileView />
  );
}

