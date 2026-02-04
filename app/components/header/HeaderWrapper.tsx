'use client';

import { useScrollDirection } from '../../hooks/useScrollDirection';
import HeaderTopBar from '../HeaderTopBar/HeaderTopBar';
import Header from './Header';

export default function HeaderWrapper() {
  const { scrollDirection, isAtTop } = useScrollDirection();

  const isCollapsed = scrollDirection === 'down' && !isAtTop;

  return (
    <div className={`header-container ${isCollapsed ? 'header-collapsed' : ''}`}>
      <HeaderTopBar />
      <Header isCollapsed={isCollapsed} />
    </div>
  );
}