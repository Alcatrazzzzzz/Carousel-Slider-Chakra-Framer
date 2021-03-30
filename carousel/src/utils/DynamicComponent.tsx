import React from "react";

interface DynamicComponentProps {}

export const DynamicComponent: React.FC<DynamicComponentProps> = ({}) => {
  React.useEffect(() => {
    const jssStyles = document.querySelector(".alice-carousel __ssr");
    if (jssStyles) {
      (jssStyles as any).parentElement.removeChild(jssStyles);
    }
  }, []);

  return <></>;
};
