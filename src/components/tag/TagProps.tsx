import { pick } from 'lodash';
import { TagProps } from './Tag';
import { TAG_LIB_KEYS } from './__keys';

interface TagPropsReturnType {
  _tagLibProps: TagProps;
}

export const useTagProps = (
  props: React.PropsWithChildren<Partial<TagProps>>
): TagPropsReturnType => {
  props = {
    size: 'lg',
    variant: 'solid',
    closable: false,
    ...props,
  };
  const _tagLibProps = pick(props, TAG_LIB_KEYS) as TagProps;
  return { _tagLibProps };
};
