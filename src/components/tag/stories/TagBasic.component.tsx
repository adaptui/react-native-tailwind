import * as React from 'react';

import { Tag, TagProps } from '../../tag';

export type TagBasicProps = TagProps;

export const TagBasic: React.FC<Partial<TagBasicProps>> = (props) => {
  return <Tag {...props}>Images</Tag>;
};

export default TagBasic;
