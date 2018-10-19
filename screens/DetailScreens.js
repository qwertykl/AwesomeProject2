import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class DetailsScreen extends Component {
    render() {
        return (
          <View style={styles.container}>
            <Text>This is the Details Screen</Text>
            <Button
              title="Go to ActivityIndicator"
              onPress={() => this.props.navigation.navigate('Activity')}
            />
          </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  

DetailsScreen.propTypes = {

};

export default DetailsScreen;