import React from 'react';
import * as Icons from 'lucide-react';

export const IconRenderer = ({ name, size = 18, className = "", color }) => {
  const IconComponent = Icons[name] || Icons.HelpCircle;
  return <IconComponent size={size} className={className} color={color} />;
};
