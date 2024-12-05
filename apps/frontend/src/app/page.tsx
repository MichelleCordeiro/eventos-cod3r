import Logo from '@/components/template/Logo'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-10 bg-[url('/background-elementos.svg')] bg-cover bg-no-repeat bg-center">
      <div className='flex flex-col items-center gap-4'>
        <Logo classes='logo-large' />
        <p className='w-96 text-zinc-500 font-light text-center leading-6 select-none'>
          Crie e gerencie o convite do seu evento de forma rápida e fácil, sem complicações!
        </p>
      </div>
      <Link href='/evento' className='button blue text-lg uppercase'>
        Crie o seu Evento
      </Link>
    </div>
  );
}
