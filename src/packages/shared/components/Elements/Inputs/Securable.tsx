import { type FC, useCallback, useState } from 'react';

import { SecurityHide, SecurityShow } from '@/packages/shared/assets/icons';
import PressableContainer from '@/packages/shared/components/Containers/Pressable';
import { type InputProps } from '@/packages/shared/components/Elements/Inputs/interfaces';

import Primary from './Primary';

const Securable: FC<InputProps> = ({ value, ...props }) => {
  const [isSecured, setIsSecured] = useState(true);

  const toggleSecure = useCallback(() => {
    setIsSecured((prevState) => !prevState);
  }, []);

  const renderRightContent = useCallback(
    () => (
      <PressableContainer onPress={toggleSecure}>
        {isSecured ? <SecurityShow /> : <SecurityHide />}
      </PressableContainer>
    ),
    [toggleSecure, isSecured]
  );

  return (
    <Primary
      {...props}
      renderRightContent={renderRightContent}
      secureTextEntry={isSecured}
      value={value}
    />
  );
};

export default Securable;
