import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import { Box } from '../Box';

export function Tabs({
  children,
  ...props
}) {
  return <Box is='div' rcx-tabs {...props}>
    <Box is='div' rcx-tabs__scroll-box>
      <Box is='div' p='x4' rcx-tabs__wrapper children={children} role='tablist'/>
    </Box>
  </Box>;
}

export const TabsItem = forwardRef(function TabsItem({
  selected,
  ...props
}, ref) {
  return <Box
    is='button'
    rcx-tabs__item
    rcx-tabs__item--selected={selected}
    aria-selected={selected ? 'true' : 'false'}
    ref={ref}
    role='tab'
    {...props}
  />;
});

TabsItem.propTypes = {
  selected: PropTypes.bool,
};

Tabs.Item = TabsItem;
