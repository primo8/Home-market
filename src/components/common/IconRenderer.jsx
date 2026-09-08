import React from 'react';
import * as Icons from 'lucide-react';

export const IconRenderer = ({ name, size = 18, className = "", color, style = {} }) => {
  const iconMap = {
    'Sparkle': Icons.Sparkles,
    'CarTaxiFront': Icons.Car,
    'MonitorSpeaker': Icons.Tv || Icons.Monitor,
    'Footprints': Icons.Footprints || Icons.Footprints,
    'Droplets': Icons.Droplets,
    'SunMedium': Icons.Sun,
    'ShieldAlert': Icons.ShieldAlert || Icons.Shield,
    'ChefHat': Icons.ChefHat || Icons.Utensils,
    'Church': Icons.Church || Icons.Building,
    'PartyPopper': Icons.PartyPopper || Icons.Sparkles,
    'Boxes': Icons.Boxes || Icons.Package
  };

  const IconComponent = iconMap[name] || Icons[name] || Icons.ShoppingBag || Icons.HelpCircle;
  return <IconComponent size={size} className={className} color={color} style={style} />;
};
