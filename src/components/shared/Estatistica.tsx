import Image from 'next/image'

export interface EstatisticaProps {
  texto: string
  valor: any
  imagem: string
}

export default function Estatistica(props: EstatisticaProps) {
  return (
    <div className='flex items-center bg-zinc-800 rounded-lg px-6 py-2.5 gap-5 border border-zinc-700 border-b-foreground border-r-foreground border-b-zinc-500 border-r-zinc-500'>
      <div className='flex-1 flex flex-col gap-1'>
        <span className='font-light text-zinc-400'>{props.texto}</span>
        <span className='text-2xl font-black'>{props.valor}</span>
      </div>
      <Image src={props.imagem} width={80} height={80} alt='icone' />
    </div>
  )
}
