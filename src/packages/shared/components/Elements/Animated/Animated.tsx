import { type ForwardedRef, type ReactElement } from 'react';
import { type DefaultSectionT, SectionList, type SectionListProps, TextInput } from 'react-native';
import Animated, { type AnimatedProps } from 'react-native-reanimated';
import Svg, { Circle, Path, Rect } from 'react-native-svg';

export {
  default as AnimatedPressableContainer,
  type AnimatedPressableContainerProps,
} from './AnimatedPressable';
export { default as AnimatedText } from './AnimatedText';

export const AnimatedView = Animated.View;
export const AnimatedImage = Animated.Image;
export const AnimatedFlatList = Animated.FlatList;
export const AnimatedScrollView = Animated.ScrollView;
export const AnimatedSectionList = Animated.createAnimatedComponent(SectionList) as unknown as <
  ItemT,
  SectionT = DefaultSectionT,
>(
  props: AnimatedProps<
    SectionListProps<ItemT, SectionT> & {
      ref?: ForwardedRef<SectionList> | undefined;
    }
  >
) => ReactElement;

export const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);
export const AnimatedSvg = Animated.createAnimatedComponent(Svg);
export const AnimatedPath = Animated.createAnimatedComponent(Path);
export const AnimatedRect = Animated.createAnimatedComponent(Rect);
export const AnimatedCircle = Animated.createAnimatedComponent(Circle);
