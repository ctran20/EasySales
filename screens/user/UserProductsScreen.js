import React from 'react';
import { View, FlatList, Button, Platform, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import ProductItem from '../../components/shop/ProductItem';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../../components/UI/HeaderButton';
import Colors from '../../constants/Colors';

const UserProductsScreen = () => {
  const userProducts = useSelector((state) => state.products.userProducts);
  return (
    <FlatList
      data={userProducts}
      renderItem={(itemData) => (
        <ProductItem
          image={itemData.item.imageUrl}
          title={itemData.item.title}
          price={itemData.item.price}
          onSelect={() => {}}
        >
          <View style={styles.buttonContainer}>
            <Button color={Colors.extra} title="Edt" onPress={() => {}} />
          </View>
          <View style={styles.buttonContainer}>
            <Button color={'red'} title="Delete" onPress={() => {}} />
          </View>
        </ProductItem>
      )}
    />
  );
};

UserProductsScreen.navigationOptions = (navdata) => {
  return {
    headerTitle: 'Your Products',
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
          onPress={() => {
            navdata.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
    headerStyle: {
      backgroundColor: Platform.OS === 'android' ? Colors.extra : '',
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.extra,
  };
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: 100,
  },
});

export default UserProductsScreen;
