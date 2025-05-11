import Svg, { type SvgProps, Path } from 'react-native-svg';
import { useStyles } from 'react-native-unistyles';

const SvgComponent = ({ color: colorProp, height = 20, width = 20, ...props }: SvgProps) => {
  const { theme } = useStyles();

  const color = colorProp ?? theme.shared.icon.brand;

  return (
    <Svg fill="none" height={height} viewBox="0 0 20 20" width={width} {...props}>
      <Path
        d="M10 18.333c4.583 0 8.333-3.75 8.333-8.333S14.583 1.667 10 1.667 1.667 5.417 1.667 10s3.75 8.333 8.333 8.333Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.25}
      />
      <Path
        d="m6.458 10 2.359 2.358 4.725-4.716"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.25}
      />
    </Svg>
  );
};

export default SvgComponent;
