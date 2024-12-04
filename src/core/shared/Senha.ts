export default class Senha {
  static criar(tamanho: number = 15): string {
    const minusculas = "abcdefghijklmnopqrstuvwxyz"
    const maiuscula = minusculas.toLocaleUpperCase()
    const numeros = "0123456789"
    const especiais = "!@#$%&*"

    const grupos = [minusculas, maiuscula, numeros, especiais]
    const senha = []

    for (let i = 0; i < tamanho; i++) {
      const grupo = grupos[Math.floor(Math.random() * grupos.length)]
      senha.push(grupo[Math.floor(Math.random() * grupo.length)])
    }

    return senha.join("")
  }
}

console.log(Senha.criar())
