import React from 'react'
import { View, Text, Button } from 'react-native'
import { styles } from '../theme/appTheme'
import { NativeStackScreenProps } from '@react-navigation/native-stack';



export const PageThreeScreen = ({navigation}) => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Page 3</Text>
      <Button
        title="Back"
        onPress={() => navigation.pop()}
      />

      <Button
        title="Page 1"
        onPress={() => navigation.popToTop()}
      />
    </View>
  )
}