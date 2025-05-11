import { FC } from 'react';
import Svg, { Rect, Path, SvgProps } from 'react-native-svg';

const SvgComponent: FC<SvgProps> = ({ color, height = 20, width = 20, ...props }) => (
  <Svg fill="none" height={height} viewBox="0 0 20 20" width={width} {...props}>
    <Rect fill={color} height={20} rx={10} width={20} />
    <Path
      d="M5.83 9.994c1.026 1.026 1.83 2.208 2.502 3.498 1.554-2.94 3.498-5.274 5.826-6.996"
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.67}
    />
  </Svg>
);

export default SvgComponent;
