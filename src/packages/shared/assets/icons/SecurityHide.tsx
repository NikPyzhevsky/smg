import { type FC } from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const SvgComponent: FC<SvgProps> = ({ height = 20, width = 20, ...props }) => (
  <Svg fill="none" height={height} viewBox="0 0 20 20" width={width} {...props}>
    <Path
      d="M2.06 8.07c2.01 2.05 4.82 3.33 7.93 3.33 3.11 0 5.91-1.27 7.93-3.33M4.46 9.93l-1.41 2.3M8.1 11.24l-.53 2.64M15.52 9.93l1.41 2.3M11.88 11.24l.53 2.64"
      stroke="#8E8B86"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.67}
    />
  </Svg>
);
export default SvgComponent;
