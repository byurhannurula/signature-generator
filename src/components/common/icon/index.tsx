import React from 'react';

const components = require('./svg-icons');

const icons = {};
Object.entries(components).forEach((file) => {
  const key = file[0].toLowerCase();
  const value = file[1];
  icons[key] = value;
});

function Icon({ icon, ...props }) {
  const iconName = icon?.toLowerCase();

  if (icons[iconName]) {
    const Comp = icons[iconName];
    return <Comp {...props} />;
  }

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <></>;
}

export { Icon };
