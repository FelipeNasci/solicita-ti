import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';

interface BaseLayoutProps {
  children: any;
  isScrollable?: boolean;
}

export const BaseLayout = ({ children, isScrollable }: BaseLayoutProps) => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

      {isScrollable ? (
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={backgroundStyle}>
          <View style={styles.layout}>{children}</View>
        </ScrollView>
      ) : (
        <View style={styles.layout}>{children}</View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  layout: {
    height: '100%',
    backgroundColor: 'red',
  },
});
