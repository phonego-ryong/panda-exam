'use client';

import { css } from '../../../styled-system/css';

export const smallTextStyle = css({
  fontSize: '8px',
});

export const normalTextStyle = css.raw({
  fontSize: '24px',
  color: 'blue.400',
});

export function NormalText() {
  return <span className={css(normalTextStyle)}>normalText</span>;
}
