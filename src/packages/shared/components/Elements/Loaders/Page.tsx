import { memo, type FC } from 'react';
import { type StyleProp, View, type ViewStyle } from 'react-native';
import { useStyles } from 'react-native-unistyles';

import Primary from './Primary';
import { stylesheet } from './styles';

interface PageProps {
  style?: StyleProp<ViewStyle>;
}

const Page: FC<PageProps> = ({ style }) => {
  const { styles, theme } = useStyles(stylesheet);

  return (
    <View style={[styles.page, style]}>
      <Primary color={theme.shared.loaders.brand} />
    </View>
  );
};

export default memo(Page);
