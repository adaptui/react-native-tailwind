import { isNull } from 'lodash';
import * as React from 'react';
import tailwind from 'twrnc';
import { Box } from '../../../primitives/Box';
import { Button } from '../../button';
import { CircularProgress, CircularProgressProps } from '../CircularProgress';

export type CircularProgressBasicProps = CircularProgressProps;

export const CircularProgressBasic: React.FC<CircularProgressBasicProps> = (
  props
) => {
  const [value, setValue] = useCircularProgressState();

  return (
    <Box style={tailwind.style('flex flex-col items-center')}>
      <CircularProgress value={value} {...props} />
      <ActionButtons setValue={setValue} />
    </Box>
  );
};

export default CircularProgressBasic;

const useCircularProgressState = (initialValue: number | null = 0) => {
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
    <>
      <Box style={tailwind.style('mt-4')}>
        <Button onPress={() => setValue(0)}>Restart CircularProgress</Button>
      </Box>
      <Box style={tailwind.style('mt-2')}>
        <Button onPress={() => setValue(null)}>
          Make Indeterminate - Sets value to `null`
        </Button>
      </Box>
    </>
  );
};
