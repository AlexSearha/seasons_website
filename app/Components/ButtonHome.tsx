'use client';
import useScrollPosition from '@/hooks/scroolDetect';
import { faArrowTurnUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/navigation';

const ButtonHome = () => {
  const router = useRouter();
  const scrool = useScrollPosition();

  return (
    <button
      {...(scrool > 675 ? null : { disabled: true })}
      className={`fixed bottom-0 right-0 m-6 transition duration-1000 ${
        scrool > 675 ? 'opacity-100 cursor-pointer' : 'opacity-0'
      } h-13 w-13 rounded-full bg-amber-100 border-2 border-muted/50 hover:bg-amber-300 `}
      onClick={() => router.push('/#home')}
    >
      <FontAwesomeIcon icon={faArrowTurnUp} />
    </button>
  );
};

export default ButtonHome;
