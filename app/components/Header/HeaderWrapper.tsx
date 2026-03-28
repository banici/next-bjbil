// HeaderWrapper.tsx
'use client';

import HeaderTopBar from '../HeaderTopBar/HeaderTopBar';
import Header from './Header';

export default function HeaderWrapper() {
  return (
    <div>
      <HeaderTopBar />
      <Header />
    </div>
  );
}