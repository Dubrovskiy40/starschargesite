import { useEffect, useState } from "react";

export function getScreenWidth(Component) {
  let WrapperContainer = (props) => {
    const [widthScreen, setWidthScreen] = useState(window.innerWidth);
    const [deviceType, setDeviceType] = useState("desctop"); //desctop, tablet, mobile

    const updateDimensions = () => {
      setWidthScreen(window.innerWidth);
    };

    useEffect(() => {
      window.addEventListener("resize", updateDimensions);
      if (widthScreen >= 2000) {
        setDeviceType("superdesctop");
      } else if (widthScreen >= 1190) {
        setDeviceType("desctop");
      } else if (widthScreen >= 768) {
        setDeviceType("tablet");
      } else {
        setDeviceType("mobile");
      }
      return () => window.removeEventListener("resize", updateDimensions);
    }, [widthScreen]);

    return (
      <Component {...props} deviceType={deviceType} widthScreen={widthScreen} />
    );
  };

  return WrapperContainer;
}
