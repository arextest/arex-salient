import Icon from '@ant-design/icons';

export const IconHollowCircleSvg = () => (
  <div className={'w-[24px]'}>
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'
      className='icon-lg text-palette-blue10 dark:text-palette-blue9'
      role='img'
    >
      <g id='circle'>
        <path
          id='Icon'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          d='M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z'
        ></path>
      </g>
    </svg>
  </div>
);
const IconHollowCircle = () => {
  return (
    <div>
      s
      <Icon component={IconHollowCircleSvg} />
    </div>
  );
};

export default IconHollowCircle;
