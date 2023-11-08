'use client';

import React from 'react';
import { useAppSelector } from '@/redux/store';

type Props = {};

function page({}: Props) {
  const email = useAppSelector((state) => state.authReducer.value.email);
  return <div>email: {email}</div>;
}

export default page;
