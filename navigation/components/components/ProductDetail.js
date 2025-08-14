// components/ProductDetail.js
import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import { db } from '../firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';

const ProductDetail = ({ route }) => {
  const { productId } = route.params;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const docRef = doc(db, "products", productId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setProduct(docSnap.data());
      } else {
        console.log("No such document!");
      }
    };
    fetchProduct();
  }, [productId]);

  return (
    <View>
      {product ? (
        <>
          <Text>{product.name}</Text>
          <Text>{product.description}</Text>
          <Text>${product.price}</Text>
          <Button title="Buy Now" onPress={() => {/* Handle payment */}} />
        </>
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
};

export default ProductDetail;
