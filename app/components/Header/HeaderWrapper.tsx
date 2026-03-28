'use client';

import { useRef, useState } from 'react';
import HeaderTopBar from '../HeaderTopBar/HeaderTopBar';
import Header from './Header';

export default function HeaderWrapper({ children }: any) {

  const [headerHeight, setHeaderHeight] = useState(0);
  const [navHeight, setNavHeight] = useState(0);
  const [headerFixed, setHeaderFixed] = useState(false);
  const [navFixed, setNavFixed] = useState(false);

  return (
    <>
      {/* Spacer BEFORE content */}
      {navFixed && <div style={{ height: navHeight }} />}
      {headerFixed && <div style={{ height: headerHeight }} />}

      <HeaderTopBar />

      <Header
        setHeaderHeight={setHeaderHeight}
        setNavHeight={setNavHeight}
        setHeaderFixed={setHeaderFixed}
        setNavFixed={setNavFixed}
      />

      <main id="main-content">
        {children}
      </main>
    </>
  );
}