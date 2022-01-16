import { useMemo } from "react";

export type IconType = 'facebook' | 'instagram' | 'twitter' | 'whatsapp';

export interface IconProps {
  iconName: IconType;
  size?: number;
}

const iconIndex: Record<IconType, number> = {
  facebook: 0,
  instagram: 1,
  twitter: 2,
  whatsapp: 3,
}
const iconSize = 32;

export const Icon = ({ iconName, size = iconSize }: IconProps) => {
  const positionStyle = useMemo(() => {
    return {
      backgroundPosition: `-0px -${iconIndex[iconName] * iconSize}px`,
      transform: `scale(${size / iconSize})`,
    }
  }, [iconName, size]);

  return (
    <div className="icon" style={positionStyle} />
  )
}