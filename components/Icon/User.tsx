import colors from './Icon.module.scss';
import type { Props } from './Icon';

const User = ({
  size,
  strokeWidth,
  shape,
  color = 'black',
  ...attr
}: Props) => {
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
          d="M3.10156 28.3711C3.57429 25.6923 6.88338 20.3347 16.3379 20.3347"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M29.1015 28.3711C28.6288 25.6923 25.3197 20.3347 15.8652 20.3347"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15.8652 16.8365C19.5204 16.8365 22.4834 13.8734 22.4834 10.2183C22.4834 6.56316 19.5204 3.6001 15.8652 3.6001C12.2101 3.6001 9.24707 6.56316 9.24707 10.2183C9.24707 13.8734 12.2101 16.8365 15.8652 16.8365Z"
          strokeWidth={strokeWidth}
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
        d="M15.7579 20.2417C25.2165 20.2417 28.5271 25.6016 29 28.2815H3C3.548 25.6016 6.86678 20.2417 15.7579 20.2417Z"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="15.7578"
        cy="10.121"
        r="6.62105"
        fill={colors[color]}
        stroke={colors[color]}
        strokeWidth={strokeWidth}
      />
    </svg>
  );
};

export default User;
