import { Evento } from '@/core'
import Informacao from '../shared/Informacao'

export interface InformacoesEventoProps {
  evento: Evento
  className?: string
}

export default function InformacoesEvento(props: InformacoesEventoProps) {
  const { evento } = props

  return (
    <div className={`flex flex-col gap-2 ${props.className ?? ''}`}>
      <div className='flex-1 flex flex-col items-start gap-4 border border-zinc-700 px-6 py-3 rounded-lg'>
        <span className='text-xl text-zinc-400 font-bold'>{evento.alias}: </span>
        <span className='text-3xl text-zinc-100 font-black'>{evento.nome}</span>
      </div>

      <div className='flex gap-2'>
        <Informacao label='Data:'>
          <span>
            {new Date(evento.data!).toLocaleDateString()}
            {' às '}
            {new Date(evento.data!).toLocaleTimeString()}
          </span>
        </Informacao>
        <Informacao label='Local:'>{evento.local}</Informacao>
      </div>
      <Informacao label='Descrição:'>{evento.descricao}</Informacao>
    </div>
  )
}
