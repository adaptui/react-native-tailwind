import { isNull } from 'lodash';
import * as React from 'react';
import tailwind from 'twrnc';
import { Box } from '../../../primitives/Box';
import { Button } from '../../button';
import { ProgressBar, ProgressProps } from '../ProgressBar';

export type ProgressBasicProps = ProgressProps;

export const ProgressBasic: React.FC<Partial<ProgressBasicProps>> = (props) => {
  const [localValue, setValue] = useProgressState();

  return (
    <Box style={tailwind.style('w-80')}>
      <ProgressBar value={localValue} {...props} />
      <ActionButtons setValue={setValue} />
    </Box>
  );
};

export default ProgressBasic;

const useProgressState = (initialValue: number | null = 0) => {
  const [value, setValue] = React.useState<number | null>(initialValue);

  React.useEffect(() => {
    const clearId = setInterval(() => {
      setValue((prevValue) => {
        if (isNull(prevValue)) {
          return prevValue;
        }
        return prevValue + 5;
      });
    }, 500);

    if (value === 100) {
      clearInterval(clearId);
    }

    return () => {
      clearInterval(clearId);
    };
  }, [setValue, value]);

  return [value, setValue] as const;
};

const ActionButtons: React.FC<{
  setValue: React.Dispatch<React.SetStateAction<number | null>>;
}> = ({ setValue }) => {
  return (
    <Box style={tailwind.style('my-2')}>
      <Box style={tailwind.style('m-2')}>
        <Button onPress={() => setValue(0)}>Restart Progress</Button>
      </Box>
      <Box style={tailwind.style('m-2')}>
        <Button onPress={() => setValue(null)}>
          Make Indeterminate - Sets value to `null`
        </Button>
      </Box>
    </Box>
  );
};
