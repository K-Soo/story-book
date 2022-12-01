import React from 'react';
import styled from 'styled-components';
import * as svg from './svg';

export type IconType = keyof typeof svg;

interface ISvgIcon {
  name?: IconType;
  color?: string;
  width?: number;
}

export default function SvgIcon({ color, width, name }: ISvgIcon) {
  const [el, setEl] = React.useState<null | any>(null);

  React.useEffect(() => {
    import(`src/icons/svg`).then(res => {
      console.log('res: ', res.ArrowLeft);
      const Icon = res.ArrowLeft.ReactComponent;
      setEl(Icon);
    });
  }, [name, color, width]);

  const renderFloor = () => {
    if (!el) return null;
    const Floor = el.ReactComponent as any;
    return <Floor />;
  };

  console.log('el: ', el);

  return <>{renderFloor()}</>;
}

const S = {
  SvgIcon: styled.div``,
};
