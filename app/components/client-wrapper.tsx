// components/ClientWrapper.tsx
"use client";

import React from "react";
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
