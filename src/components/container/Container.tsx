import React from "react";

interface IContainer {
  children: React.ReactNode;
}

function Container({ children }: IContainer) {
  return <div className="w-4/5 container mx-auto ">{children}</div>;
}

export default Container;
