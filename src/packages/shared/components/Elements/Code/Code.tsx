import { type FC, memo, type Ref, useCallback, useRef, useState } from 'react';
import { type TextInput, TouchableWithoutFeedback, View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

import { Primary as PrimaryInput } from '@/packages/shared/components/Elements/Inputs';
import { CODE_LENGTH } from '@/packages/shared/constants/code';
import { combineRef } from '@/packages/shared/utils/combineRef';

import Item from './Item';

const stylesheet = createStyleSheet(() => ({
  root: {
    alignItems: 'center',
    columnGap: 8,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  textInput: {
    bottom: 0,
    left: 0,
    opacity: 0,
    position: 'absolute',
    right: 0,
    top: 0,
    zIndex: 1,
  },
}));

interface CodeProps {
  onChange: (value: string) => void;
  value: string;
  autoFocus?: boolean;
  error?: boolean;
  inputRef?: Ref<TextInput>;
  numOfDigits?: number;
}

const Code: FC<CodeProps> = ({
  autoFocus = false,
  error = false,
  inputRef: inputRefProp,
  numOfDigits = CODE_LENGTH,
  onChange,
  value,
}) => {
  const { styles } = useStyles(stylesheet);

  const inputRef = useRef<TextInput>(null);

  const [focused, setFocused] = useState(autoFocus);

  const handleTextChange = useCallback(
    (text: string) => {
      if (text.length > numOfDigits) {
        onChange(text.substring(0, numOfDigits));

        return;
      }

      onChange(text);
    },
    [onChange, numOfDigits]
  );

  const handlePress = useCallback(() => {
    inputRef.current?.focus();
  }, []);

  const handleFocus = useCallback(() => {
    setFocused(true);
  }, []);

  const handleBlur = useCallback(() => {
    setFocused(false);
  }, []);

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View collapsable={false} style={styles.root}>
        {[...Array(numOfDigits)].map((_, index) => (
          <Item
            key={index} // eslint-disable-line react/no-array-index-key
            error={error}
            selected={index === value.length && focused}
            value={value[index]}
          />
        ))}

        <View style={styles.textInput}>
          <PrimaryInput
            caretHidden
            autoFocus={autoFocus}
            clearable={false}
            /* eslint-disable-next-line react-compiler/react-compiler */
            inputRef={combineRef(inputRef, inputRefProp)}
            keyboardType="decimal-pad"
            spellCheck={false}
            value={value}
            onBlur={handleBlur}
            onChangeText={handleTextChange}
            onFocus={handleFocus}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default memo(Code);
