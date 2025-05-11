import { type FC } from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const SvgComponent: FC<SvgProps> = ({ height = 20, width = 20, ...props }) => (
  <Svg fill="none" height={height} viewBox="0 0 20 20" width={width} {...props}>
    <Path
      d="M2.06 8.88c2.01-2.05 4.82-3.33 7.93-3.33 3.11 0 5.91 1.27 7.93 3.33"
      stroke="#484643"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.67}
    />
    <Path
      d="M9.99 8.6a3.055 3.055 0 1 0 0 6.11 3.055 3.055 0 0 0 0-6.11ZM4.46 7.02l-1.41-2.3M8.1 5.71l-.53-2.64M15.52 7.02l1.41-2.3M11.88 5.71l.53-2.64"
      stroke="#484643"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.67}
    />
  </Svg>
);
export default SvgComponent;
