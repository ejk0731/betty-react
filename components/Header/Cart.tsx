'use client';
import React from 'react';
import { useRecoilValue } from 'recoil';
import { cartState } from '@/lib/states/cartState';

export default function Cart() {
  const cartNum = useRecoilValue(cartState);
  return (
    <span>
      (<span>{cartNum}</span>)
    </span>
  );
}
