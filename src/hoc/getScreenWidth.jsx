import React, {useEffect, useState} from 'react';

export function getScreenWidth(Component) {
  let WrapperContainer = (props) => {
    const [widthScreen, setWidthScreen] = useState(window.innerWidth);
    const [deviceType, setDeviceType] = useState("desctop"); //desctop, tablet, mobile

    const updateDimensions = () => {
      setWidthScreen(window.innerWidth);
    };

    useEffect(() => {
      window.addEventListener("resize", updateDimensions);

      if (widthScreen > 1190) {
        setDeviceType("desctop");
      }
      if (widthScreen > 768 && widthScreen <= 1190) {
        setDeviceType("tablet");
      }
      if (widthScreen <= 768) {
        setDeviceType("mobile");
      }
      return () => window.removeEventListener("resize", updateDimensions);
    }, []);

    return (
      <Component {...props} deviceType={deviceType} widthScreen={widthScreen} />
    )
  }

  return WrapperContainer;
};
