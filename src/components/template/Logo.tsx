import { Righteous } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'

const font = Righteous({
  subsets: ["latin"],
  weight: "400"
})

interface LogoProps {
  classes?: string;
  adjustedImgSize?: number;
}

export default function Logo({
  classes = 'logo-small',
  adjustedImgSize = 50
}: LogoProps) {
  const ImgSize = classes === 'logo-large' ? 100 : adjustedImgSize;

  return (
    <Link
      href='/'
      className={`${font.className} ${classes}`}
    >
      <Image src='/logo.svg' width={ImgSize} height={ImgSize} alt='Logo' />
      <h1 className={`flex ${classes === 'logo-small' ? 'flex-col' : 'flex-row'}`}>
        <div>
          CONVIT
          <span className='text-blue-500'>3</span>
        </div>
        <div>DIGITAL</div>
      </h1>
    </Link>
  );
}
