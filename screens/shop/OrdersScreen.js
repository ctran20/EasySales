import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

const OrdersScreen = (props) => {
  const orders = useSelector((state) => state.orders.orders);

  return (
    <FlatList
      data={orders}
      renderItem={(itemData) => <Text>{itemData.item.totalAmount}</Text>}
    />
  );
};

const styles = StyleSheet.create({});

export default OrdersScreen;
