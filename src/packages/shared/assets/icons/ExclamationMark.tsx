import Svg, { type SvgProps, Path } from 'react-native-svg';
import { useStyles } from 'react-native-unistyles';

const SvgComponent = ({ color: colorProp, height = 20, width = 20, ...props }: SvgProps) => {
  const { theme } = useStyles();

  const color = colorProp ?? theme.shared.icon.brand;

  return (
    <Svg fill="none" height={height} viewBox="0 0 24 24" width={width} {...props}>
      <Path
        d="M10 18.333c4.583 0 8.333-3.75 8.333-8.333S14.583 1.667 10 1.667 1.667 5.417 1.667 10s3.75 8.333 8.333 8.333ZM10 6.667v4.166"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.25}
      />
      <Path
        d="M9.995 13.333h.008"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.667}
      />
    </Svg>
  );
};

export default SvgComponent;
