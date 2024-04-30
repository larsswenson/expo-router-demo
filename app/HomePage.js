import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { Link } from 'expo-router';

export default function HomePage() {
  return (
    <View>
      <Text>Home Page</Text>
      <Link href="/AboutPage" asChild>
        <Pressable>
          <Text>Go to About Page</Text>
        </Pressable>  
      </Link>
      <Link href="/UserProfilePage" asChild>
        <Pressable>
          <Text>Go to User Profile Page</Text>
        </Pressable>
      </Link>
    </View>
  );
}
