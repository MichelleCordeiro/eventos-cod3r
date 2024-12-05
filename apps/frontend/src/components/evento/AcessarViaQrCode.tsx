import { Evento } from 'core'
import QRCode from 'react-qr-code'

export interface AcessarViaQrCodeProps {
  evento: Evento
}

export default function AcessarViaQrCode(props: AcessarViaQrCodeProps) {
  return (
    <div className='flex flex-col items-center justify-center gap-6 border border-zinc-700 rounded-lg px-6'>
      <span className='text-sm font-light text-zinc-400'>
        Acesse via Mobile
      </span>
      <QRCode
        value={JSON.stringify({
          id: props.evento.id,
          senha: props.evento.senha
        })}
        className='w-36 h-36'
      />
    </div>
  )
}
