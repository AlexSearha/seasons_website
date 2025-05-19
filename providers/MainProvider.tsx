'use client';

import { ModalProvider } from './ModalProviders';
import QueryProvider from './QueryProvider';

const MainProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryProvider>
      <ModalProvider>{children}</ModalProvider>
    </QueryProvider>
  );
};

export default MainProvider;
