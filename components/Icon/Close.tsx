import type { Props } from './Icon';

const Close = ({ size, strokeWidth, ...attr }: Props) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...attr}
    >
      <path d="M4.5 4.1001L27.5 27.1001" strokeWidth={strokeWidth} />
      <path d="M27.5 4.1001L4.5 27.1001" strokeWidth={strokeWidth} />
    </svg>
  );
};

export default Close;
