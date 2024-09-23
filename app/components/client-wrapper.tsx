// components/ClientWrapper.tsx
"use client";

import AnchorTemporaryDrawer from "./navigation";

const ClientWrapper = ({children}: {children: React.ReactNode}) => {
  return (
    <>
      <AnchorTemporaryDrawer />
      {children}
    </>
  );
};

export default ClientWrapper;
