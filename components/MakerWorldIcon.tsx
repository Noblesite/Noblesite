import Image from 'next/image';

type MakerWorldIconProps = {
  className?: string;
};

const MakerWorldIcon = ({ className = '' }: MakerWorldIconProps) => (
  <Image
    src="/icons/makerworld.png"
    alt=""
    width={512}
    height={512}
    className={`inline-block aspect-square h-auto w-10 ${className}`}
  />
);

export default MakerWorldIcon;
