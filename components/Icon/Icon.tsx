import styles from './Icon.module.scss';
import { icons } from '.';
import { Color } from '@/lib/types/color';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

export interface Props extends React.SVGAttributes<SVGSVGElement> {
  color?: Color;
  name: string;
  size?: number;
  strokeWidth?: number;
  className?: string;
  shape?: 'line' | 'solid';
}

const Icon = ({
  color = 'black',
  name,
  size = 32,
  strokeWidth,
  shape = 'line',
  className,
  ...attr
}: Props) => {
  const Component = icons[name.charAt(0).toUpperCase() + name.slice(1)];

  return (
    <Component
      color={color}
      className={cx('icon', `${shape}`, `color-${color}`)}
      size={size}
      strokeWidth={
        strokeWidth
          ? strokeWidth
          : size === 32
            ? 2
            : size === 24
              ? 1.8
              : size === 22
                ? 1.7
                : size === 20
                  ? 1.6
                  : size === 18
                    ? 1.4
                    : size === 16
                      ? 1.25
                      : size === 14
                        ? 1.1
                        : 1
      }
      shape={shape}
      {...attr}
    />
  );
};

export default Icon;
