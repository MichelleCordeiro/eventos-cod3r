import Evento from "./model/Evento"
import Convidado from "./model/Convidado"

import criarEventoVazio from "./functions/criarEventoVazio"
import complementarEvento from './functions/complementarEvento'

import criarConvidadoVazio from './functions/criarConvidadoVazio'
import complementarConvidado from './functions/complementarConvidado'

export type { Evento, Convidado }
// precisa do export TYPE pq ta exportando 2 interfaces

export {
  criarEventoVazio,
  complementarEvento,
  criarConvidadoVazio,
  complementarConvidado,
}
