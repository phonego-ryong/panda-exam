import { NormalText } from '@/components/text/NomalText';
import { RedText } from '@/components/text/RedText';
import { SmallText } from '@/components/text/SmallText';
import Image from 'next/image';
import { vstack } from '../../styled-system/patterns';

export default function Home() {
  return (
    <div className={vstack()}>
      <NormalText />
      <RedText />
      <SmallText />
    </div>
  );
}
