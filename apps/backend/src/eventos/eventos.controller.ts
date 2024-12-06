import { Body, Controller, Get, HttpException, Param, Post } from '@nestjs/common'
import { complementarConvidado, complementarEvento, Convidado, Data, Evento, eventos, Id } from 'core'

@Controller('eventos')
export class EventosController {
  @Get()
  async buscarEventos() {
    return eventos.map(this.serializar)
  }

  @Get(':idOuAlias')
  async buscarEvento(@Param('idOuAlias') idOuAlias: string) {
    if (Id.valido(idOuAlias)) {
      return this.serializar(eventos.find((evento) => evento.id === idOuAlias))
    } else {
      return this.serializar(
        eventos.find((evento) => evento.alias === idOuAlias),
      )
    }
  }

  @Get('validar/:alias/:id')
  async validarAlias(@Param('alias') alias: string, @Param('id') id: string) {
    const evento = eventos.find((evento) => evento.alias === alias)
    return { valido: !evento || evento.id !== id }
  }

  @Post('acessar')
  async acessarEvento(@Body() dados: { id: string; senha: string }) {
    const evento = eventos.find(
      (evento) => evento.id === dados.id && evento.senha === dados.senha,
    )

    if (!evento) {
      throw new Error('Evento não encontrado.')
    }

    return this.serializar(evento)
  }

  @Post(':alias/convidado')
  async salvarConvidado(
    @Param('alias') alias: string,
    @Body() convidado: Convidado,
  ) {
    const evento = eventos.find((evento) => evento.alias === alias)

    if (!evento) {
      throw new Error('Evento não encontrado.')
    }
    evento.convidados.push(complementarConvidado(convidado))
    return this.serializar(evento)
  }

  @Post()
  async salvarEvento(@Body() evento: Evento) {
    const eventoCadastrado = eventos.find((ev) => ev.alias === evento.alias)

    if (eventoCadastrado && eventoCadastrado.id !== evento.id) {
      throw new Error('Já existe um evento com esse alias.')
    }

    const eventoCompleto = complementarEvento(this.deserializar(evento))
    eventos.push(eventoCompleto)
    return this.serializar(eventoCompleto)
  }

  private serializar(evento: Evento) {
    if (!evento) return null

    return {
      ...evento,
      data: Data.formatar(evento.data),
    }
  }

  private deserializar(evento: any): Evento {
    if (!evento) return null

    return {
      ...evento,
      data: Data.desformatar(evento.data),
    }
  }
}
