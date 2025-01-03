'use client';
import { cartState, optionState } from '@/lib/states/cartState';
import React from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';

export default function BtnAddToCart() {
  const setCartNum = useSetRecoilState(cartState);
  const isOptionSelected = useRecoilValue(optionState);
  const addCartNum = () => {
    if (!isOptionSelected) {
      alert('Please select color and size option');
    } else {
      setCartNum(prev => prev + 1);
    }
  };
  return (
    <button type="button" onClick={addCartNum}>
      Add to cart
    </button>
  );
}
