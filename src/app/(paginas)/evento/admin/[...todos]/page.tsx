'use client'

import DashboardEvento from '@/components/evento/DashboardEvento'
import FormSenhaEvento from '@/components/evento/FormSenhaEvento'
import { Convidado, Evento, eventos } from '@/core'
import { use, useEffect, useState } from 'react'

export default function PaginaAdminEvento(props: any) {
  const params: any = use(props.params)

  const id = params.todos[0]
  const [evento, setEvento] = useState<Evento | null>(null)
  const [senha, setSenha] = useState<String | null>(params.todos[1] ?? null)
  // a senha será passada na url apenas durante a desenvolvimento. Na aplicação, a senha será solicitada, numa nova tela, na hora de acessar algum evento

  const presentes = evento?.convidados.filter(c => c.confirmado) ?? []
  const ausentes = evento?.convidados.filter(c => !c.confirmado) ?? []
  const totalGeral = evento?.convidados.reduce(
    (total: number, convidado: Convidado) => {
      return total + convidado.qtdeAcompanhantes + 1
      // return total + (convidado.confirmado ? convidado.qtdeAcompanhantes + 1 : 0)
    }, 0
  )

  function carregarEvento() {
    const evento = eventos.find((ev) => ev.id === id && ev.senha === senha)
    setEvento(evento ?? null)
  }

  // sempre q o id ou a senha mudarem ele carregar novamente um evento
  useEffect(() => {
    carregarEvento()
  }, [id, senha])

  console.log('presentes: ', presentes, 'ausentes: ', ausentes, 'totalGeral: ', totalGeral)

  return (
    <div className='flex flex-col items-center'>
      {evento ? <DashboardEvento evento={evento} /> : <FormSenhaEvento />}
    </div>
  )

  // return evento ? (
  //   <div className='flex flex-col'>
  //     <span>{evento.nome}</span>
  //   </div>
  // ) : null
}
