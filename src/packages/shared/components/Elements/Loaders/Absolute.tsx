import { memo, type FC } from 'react';
import { type StyleProp, View, type ViewStyle } from 'react-native';
import { useStyles } from 'react-native-unistyles';

import Primary from './Primary';
import { stylesheet } from './styles';

interface AbsoluteProps {
  style?: StyleProp<ViewStyle>;
}

const Absolute: FC<AbsoluteProps> = ({ style }) => {
  const { styles, theme } = useStyles(stylesheet);

  return (
    <View style={[styles.root, style]}>
      <Primary color={theme.shared.loaders.brand} />
    </View>
  );
};

export default memo(Absolute);
