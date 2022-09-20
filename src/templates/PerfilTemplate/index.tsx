/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSession } from 'next-auth/react'
import MyArticleItem from 'components/MyArticleItem'
import Header from 'components/Header'
import api from 'services/api'

import * as S from './styles'
import { useSnackbar } from 'notistack'
import { useEffect, useState } from 'react'
import { Daum, IArticle, ISubscription } from './types'
import SubscriptionItem from 'components/SubscriptionItem'

const MeusArtigosTemplate = () => {
  const { data: session } = useSession()
  const { enqueueSnackbar } = useSnackbar()

  const [articles, setArticles] = useState<Daum[] | null>(null)
  const [inscricao, setInscricao] = useState<any>(null)

  async function fetchArticles() {
    try {
      const response = await api.get<IArticle>(
        `/articles?filters[email][$eq]=${session?.user?.email}`
      )

      setArticles(response.data.data)
    } catch {
      enqueueSnackbar('Falha ao buscar artigos', { variant: 'error' })
    }
  }

  async function fetchSubscription() {
    try {
      const response = await api.get<ISubscription>(
        `/subscriptions?filters[email][$eq]=${session?.user?.email}`
      )

      setInscricao(response.data)
    } catch {
      enqueueSnackbar('Falha ao buscar artigos', { variant: 'error' })
    }
  }

  useEffect(() => {
    if (session) {
      fetchSubscription()
      fetchArticles()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session])

  return (
    <S.Wrapper>
      <S.HeadingWrapper>
        <Header transparent />

        <S.Title>Bem vindo(a), {session?.user?.name}!</S.Title>
        {/* <S.Subtitle>Aqui vc verifica</S.Subtitle> */}
      </S.HeadingWrapper>

      <S.Content>
        <S.SectionText>Artigos</S.SectionText>
        {articles?.map((item) => (
          <MyArticleItem key={item.id} {...item} />
        ))}

        {articles?.length === 0 && (
          <S.NotFount>Nenhum artigo encontrado</S.NotFount>
        )}

        <S.SectionText>Inscrição</S.SectionText>
        {!!inscricao && !!inscricao.data.length && (
          <SubscriptionItem {...inscricao.data[0].attributes} />
        )}

        {inscricao?.data.length === 0 && (
          <S.NotFount>Nenhuma inscrição encontrada</S.NotFount>
        )}
      </S.Content>
    </S.Wrapper>
  )
}

export default MeusArtigosTemplate
