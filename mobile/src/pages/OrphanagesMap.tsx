import React from 'react';
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps';
import { Feather } from '@expo/vector-icons';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import mapMarker from '../images/map-marker.png';

export default function OrphanagesMap() {
  const navigation = useNavigation();

  function handleNavigationToDetail() {
    navigation.navigate('OrphanageDetail');
  };

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={{
          latitude: -22.3909612,
          longitude: -47.5570119,
          latitudeDelta: 0.008,
          longitudeDelta: 0.008,
        }}
      >
        <Marker
          calloutAnchor={{
            x: 2.7,
            y: 0.8
          }}
          icon={mapMarker}
          coordinate={{
            latitude: -22.3909612,
            longitude: -47.5570119,
          }}
        >
          <Callout tooltip onPress={handleNavigationToDetail}>
            <View style={styles.calloutContainer}>
              <Text style={styles.calloutText}>COISA PA KRAIO</Text>
            </View>
          </Callout>
        </Marker>
      </MapView>

      <View style={styles.footer}>
        <Text style={styles.footerText}>2 orfanatos encontrados!</Text>

        <TouchableOpacity style={styles.createOrphanageButton} onPress={() => { }}>
          <Feather name="plus" size={20} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,    
  },

  calloutContainer: {
    width: 160,
    height: 46,
    paddingHorizontal: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 16,
    justifyContent: 'center',
  },

  calloutText: {
    fontFamily: 'Nunito_700Bold',
    color: '#0089a5',
    fontSize: 14,
  },

  footer: {
    position: 'absolute',
    left: 24,
    right: 24,
    bottom: 32,

    backgroundColor: '#fff',
    borderRadius: 20,
    height: 56,
    paddingLeft: 24,
    
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    elevation: 3,
  },

  footerText: {
    fontFamily: 'Nunito_700Bold',
    color: '#8fa7b3'
  },

  createOrphanageButton: {
    height: 56,
    width: 56,
    backgroundColor: '#15c3d6',
    borderRadius: 20,
    
    justifyContent: 'center',
    alignItems: 'center',
  }
});
