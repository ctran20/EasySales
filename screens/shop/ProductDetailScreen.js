import React from 'react';
import {
  View,
  Text,
  Image,
  Button,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { useSelector } from 'react-redux';

const ProductDetailScreen = (props) => {
  const productId = props.navigation.getParam('productId');
  const selectedProduct = useSelector((state) =>
    state.products.availableProducts.find((prod) => prod.id === productId)
  );

  return (
    <View>
      <Text>{selectedProduct.title}</Text>
    </View>
  );
};

ProductDetailScreen.navigationOptions = (navData) => {
  return {
    headerTitle: navData.navigation.getParam('productTitle'),
  };
};

const styles = StyleSheet.create({});

export default ProductDetailScreen;
