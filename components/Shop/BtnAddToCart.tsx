'use client';
import { cartState } from '@/lib/states/cartState';
import React from 'react';
import { useSetRecoilState } from 'recoil';

export default function BtnAddToCart() {
  const setCartNum = useSetRecoilState(cartState);
  const addCartNum = () => {
    setCartNum(prev => prev + 1);
  };
  return (
    <button type="button" onClick={addCartNum}>
      Add to cart
    </button>
  );
}
