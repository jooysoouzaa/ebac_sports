import Produto from '../components/Produto'
import { useGetProdutosQuery } from '../services/api'

import * as S from './styles'

const ProdutosComponent = () => {
  const { data: produtos, isLoading } = useGetProdutosQuery()
  if (isLoading) return <h2> Carregndo...</h2>

  const favoritar = (produtoId: number) => {
    // lógica para favoritar um produto
  }

  const estaNosFavoritos = (produtoId: number) => {
    return false
  }

  return (
    <>
      <S.Produtos>
        {produtos?.map((produto) => (
          <Produto
            key={produto.id}
            produto={produto}
            favoritar={() => favoritar(produto.id)}
            estaNosFavoritos={estaNosFavoritos(produto.id)}
          />
        ))}
      </S.Produtos>
    </>
  )
}

export default ProdutosComponent
