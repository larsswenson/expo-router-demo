import React from 'react';
import { View, Text } from 'react-native';
import { Link } from 'expo-router';

export default function AboutPage() {
  return (
    <View>
      <Text>About Page</Text>
        <Link push href="/HomePage">Go back to Home - push</Link>
        <Link replace href="/HomePage">Go back to Home - replace</Link>
    </View>
  );
}
