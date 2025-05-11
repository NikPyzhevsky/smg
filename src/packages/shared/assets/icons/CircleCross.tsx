import Svg, { type SvgProps, Path, Rect } from 'react-native-svg';
import { useStyles } from 'react-native-unistyles';

const SvgComponent = ({ color: colorProp, height = 20, width = 20, ...props }: SvgProps) => {
  const { theme } = useStyles();

  const color = colorProp ?? theme.shared.icon.brand;

  return (
    <Svg fill="none" height={height} viewBox="0 0 20 20" width={width} {...props}>
      <Rect fill={color} height={20} rx={10} width={20} />
      <Path
        d="M13.324 6.664l-6.66 6.66M6.664 6.664l6.66 6.66"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.4}
      />
    </Svg>
  );
};

export default SvgComponent;
