import React from 'react';
import { View, FlatList, Button, Platform, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import ProductItem from '../../components/shop/ProductItem';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../../components/UI/HeaderButton';
import Colors from '../../constants/Colors';
import * as productsActions from '../../store/actions/product';

const UserProductsScreen = (props) => {
  const userProducts = useSelector((state) => state.products.userProducts);
  const dispatch = useDispatch();

  const editProductHandler = (id) => {
    props.navigation.navigate('EditProduct', { productId: id });
  };

  return (
    <FlatList
      data={userProducts}
      renderItem={(itemData) => (
        <ProductItem
          image={itemData.item.imageUrl}
          title={itemData.item.title}
          price={itemData.item.price}
          onSelect={() => {
            editProductHandler(itemData.item.id);
          }}
        >
          <View style={styles.buttonContainer}>
            <Button
              color={Colors.extra}
              title="Edt"
              onPress={() => {
                editProductHandler(itemData.item.id);
              }}
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button
              color={'red'}
              title="Delete"
              onPress={() => {
                dispatch(productsActions.deleteProduct(itemData.item.id));
              }}
            />
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
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Add"
          iconName={Platform.OS === 'android' ? 'md-create' : 'ios-create'}
          onPress={() => {
            navdata.navigation.navigate('EditProduct');
          }}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: 100,
  },
});

export default UserProductsScreen;
