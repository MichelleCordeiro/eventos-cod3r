export default async function PaginaAdminEvento(props: any) {
  const params = await props.params

  const id = params.todos[0]
  const senha = params.todos[1] // a senha será passada na url apenas durante a desenvolvimento. Na aplicação, a senha será solicitada, numa nova tela, na hora de acessar algum evento

  return (
    <div className='flex flex-col'>
      <span>Id: {id}</span>
      <span>Senha: {senha}</span>
    </div>
  )
}
