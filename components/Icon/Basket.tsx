import type { Props } from './Icon';

const Basket = ({ size, strokeWidth, shape, ...attr }: Props) => {
  if (shape === 'line') {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...attr}
      >
        <path
          d="M25.8801 8.4314H6.09161L3.73584 28.691H28.2358L25.8801 8.4314Z"
          strokeWidth={strokeWidth}
          strokeLinejoin="round"
        />
        <path
          d="M20.5333 11V7.26667C20.5333 4.91025 18.6231 3 16.2667 3V3C13.9103 3 12 4.91025 12 7.26667V11"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
        />
      </svg>
    );
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...attr}
    >
      <path
        d="M25.8801 8.4314H6.09161L3.73584 28.691H28.2358L25.8801 8.4314Z"
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
      <path
        d="M20.5333 11V7.26667C20.5333 4.91025 18.6231 3 16.2667 3V3C13.9103 3 12 4.91025 12 7.26667V11"
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Basket;
