export default async function PaginaConvite(props: any) {
  const params = await props.params
  // console.log("PaginaConvite: ", props)

  return (
    <div>
      <span>{params.alias}</span>
    </div>
  )
}
