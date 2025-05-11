import { type FC, memo, type ReactNode } from 'react';
import { type StyleProp, View, type ViewStyle } from 'react-native';
import Svg, { Defs, LinearGradient, Rect, Stop } from 'react-native-svg';
import { useStyles } from 'react-native-unistyles';

import Primary, { type PrimaryProps } from './Primary';
import { stylesheet } from './styles';

const size = 512;

interface FloatingProps extends PrimaryProps {
  additional?: ReactNode;
  containerStyle?: StyleProp<ViewStyle>;
}

const Floating: FC<FloatingProps> = ({ additional, containerStyle, ...props }) => {
  const { styles, theme } = useStyles(stylesheet);

  return (
    <View style={[styles.floatRoot, containerStyle]}>
      <View style={styles.svg}>
        <Svg preserveAspectRatio="none" viewBox="0 0 512 512">
          <Rect fill="url(#gr)" height={size} width={size} x={0} y={0} />

          <Defs>
            <LinearGradient gradientUnits="userSpaceOnUse" id="gr" x1={0} x2={0} y1={0} y2={size}>
              <Stop stopColor={theme.shared.buttons.floating.primary} stopOpacity={0} />

              <Stop offset={1} stopColor={theme.shared.buttons.floating.primary} stopOpacity={1} />
            </LinearGradient>
          </Defs>
        </Svg>
      </View>

      <Primary {...props} />

      {additional}
    </View>
  );
};

export default memo(Floating);
