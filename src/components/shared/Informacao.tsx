export interface InformacaoProps {
  label: string
  children: any
}

export default function Informacao(props: InformacaoProps) {
  return (
    <div className='flex-1 flex flex-col items-start border border-zinc-700 px-6 py-3 rounded-lg gap-2'>
      <span className='text-xl text-zinc-400 font-bold'>{props.label}</span>
      <div className='text-2xl text-zinc-100'>{props.children}</div>
    </div>
  )
}
