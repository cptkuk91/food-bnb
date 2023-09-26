// Next.js13 버전 새로고침 에러 방지
'use client';

import React, { useEffect, useState } from 'react';

interface clientOnlyProps {
  children: React.ReactNode;
}

const ClientOnly: React.FC<clientOnlyProps> = ({ children }) => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return <>{children}</>;
};

export default ClientOnly;
