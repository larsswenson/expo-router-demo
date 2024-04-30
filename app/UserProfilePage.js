import React from 'react';
import { View, Text } from 'react-native';
import { Link } from 'expo-router';

export default function UserProfilePage() {  
  return (
    <View>
      <Text>User Profile Page</Text>
        <Link href={{ pathname: "/user/[id]", params: {id: 123} }}>
          View user 123
        </Link>
    </View>
  );
}
