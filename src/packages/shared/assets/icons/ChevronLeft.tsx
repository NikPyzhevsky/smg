import { FC } from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const SvgComponent: FC<SvgProps> = ({ height = 16, width = 16, ...props }) => (
  <Svg fill="none" height={height} viewBox="0 0 16 16" width={width} {...props}>
    <Path
      d="M10.216 13.544L4.664 7.992l5.552-5.552"
      stroke="#020100"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.8}
    />
  </Svg>
);

export default SvgComponent;
