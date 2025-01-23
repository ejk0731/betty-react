import type { Props } from './Icon';

const Search = ({ size, strokeWidth, ...attr }: Props) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      {...attr}
    >
      <path
        strokeWidth={strokeWidth}
        fill="none"
        d="M13.5095 23.0047C18.7562 23.0021 23.0074 18.7466 23.0048 13.4999C23.0022 8.25323 18.7468 4.00204 13.5001 4.00464C8.25334 4.00724 4.00216 8.26264 4.00476 13.5093C4.00736 18.756 8.26276 23.0073 13.5095 23.0047Z"
      />
      <path
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        d="M28.4852 28.4854L20.7071 20.7072"
      />
    </svg>
  );
};

export default Search;
