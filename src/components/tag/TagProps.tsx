import { pick } from 'lodash';
import { TagProps } from './Tag';
import { TAG_LIB_KEYS, TAG_OPTION_KEYS } from './__keys';

type TagOptions = Pick<TagProps, 'suffix' | 'prefix' | 'closable'>;
interface TagPropsReturnType {
  _tagLibProps: TagProps;
  _tagOptions: TagOptions;
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
  const _tagOptions = pick(props, TAG_OPTION_KEYS) as TagOptions;
  return { _tagLibProps, _tagOptions };
};
