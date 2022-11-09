/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSession } from 'next-auth/react'
import MyArticleItem from 'components/MyArticleItem'
import Header from 'components/Header'
import api from 'services/api'

import * as S from './styles'
import { useSnackbar } from 'notistack'
import { useEffect, useState } from 'react'
import { Daum, IArticle, ISubscription, UserQueryResponse } from './types'
// import SubscriptionItem from 'components/SubscriptionItem'
import FileField from 'components/FileField'
import { useForm } from 'react-hook-form'
import Button from 'components/Button'
import { Warning } from 'styled-icons/material-rounded'
import {
  BorderWrapper,
  Payment,
  QRCodeWrapper,
  Column,
  Name,
  Warning as WarningWrapper,
  Title
} from 'components/SubscriptionForm/styles'
import dayjs from 'dayjs'
import Lottie from 'react-lottie'
import animationData from '../../../public/lottie/success.json'
import Link from 'next/link'

type Inputs = {
  comprovante_de_pagamento: File
}

type Inscricao = {
  id: number
  attributes: any
}

type TrabalhoAprovado = {
  name: string
  hora_apresentacao: Date
}

const MeusArtigosTemplate = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Inputs>()
  const { data: session } = useSession()
  const { enqueueSnackbar } = useSnackbar()

  const [articles, setArticles] = useState<Daum[] | null>(null)
  const [inscricao, setInscricao] = useState<Inscricao | null | undefined>(null)
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [categoriesPrices, setCategoriesPrices] = useState<any>(null)
  const [trabalhoAprovado, setTrabalhoAprovado] =
    useState<TrabalhoAprovado | null>(null)

  async function fetchCpf() {
    try {
      const response = await api.get(
        `/subscriptions?filters[email][$eq]=${session?.user?.email}`
      )
      if (response.data?.data.length) {
        fetchSubscription(response.data?.data[0]?.attributes?.cpf)
      } else {
        setInscricao(undefined)
      }
      fetchArticles()
    } catch {
      enqueueSnackbar('Falha ao buscar cpf', { variant: 'error' })
    }
  }

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

  async function fetchSubscription(cpf: string) {
    try {
      const response = await api.get<ISubscription>(
        `/subscriptions?filters[cpf][$eq]=${cpf}`
      )
      if (response.data.data.length) {
        setInscricao(response.data.data[0] as any)
        const temp: any = response.data.data[0]
        const isAfter3009 = dayjs(temp.attributes.publishedAt as any).isAfter(
          '2022-09-30'
        )

        setCategoriesPrices({
          'Estudante de graduação (MEDICINA)': {
            price: isAfter3009 ? 80 : 70,
            label: 'Estudante de graduação (medicina)'
          },
          MÉDICO: {
            price: isAfter3009 ? 120 : 100,
            label: 'Médico'
          },
          'Estudante de graduação (Outro curso da saúde)': {
            price: isAfter3009 ? 90 : 80,
            label:
              'Estudante de graduação (outro curso da saúde) (vagas limitadas)'
          },
          'Outros profissionais da saúde': {
            price: isAfter3009 ? 110 : 100,
            label: 'Outros profissionais da saúde'
          }
        })
      }
    } catch {
      enqueueSnackbar('Falha ao buscar artigos', { variant: 'error' })
    }
  }

  async function onSubmit({ comprovante_de_pagamento }: Inputs) {
    try {
      setLoading(true)
      const formData2 = new FormData()
      formData2.append('files', (comprovante_de_pagamento as any)[0])
      formData2.append('refId', String(inscricao?.id))
      formData2.append('ref', 'api::subscription.subscription')
      formData2.append('field', 'comprovante_de_pagamento')
      await api.post('/upload', formData2)
      setSent(true)
      setLoading(false)
    } catch {
      setSent(false)
      setLoading(false)
      enqueueSnackbar('Falha ao enviar comprovante', { variant: 'error' })
    }
  }
  async function fetchUser() {
    try {
      const response = await api.get<UserQueryResponse>(
        `/users?filters[email][$eq]=${session?.user?.email}`
      )

      if (response.data.length && response.data[0].trab_aprovado) {
        const { name, hora_apresentacao } = response.data[0]
        setTrabalhoAprovado({
          name,
          hora_apresentacao
        })
      }
    } catch {
      enqueueSnackbar('Falha ao buscar usuário', { variant: 'error' })
    }
  }

  useEffect(() => {
    if (session) {
      fetchUser()
      fetchCpf()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session])

  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  return (
    <S.Wrapper>
      <S.HeadingWrapper>
        <Header transparent />

        <S.Title>Bem vindo(a), {session?.user?.name}!</S.Title>
        {/* <S.Subtitle>Aqui vc verifica</S.Subtitle> */}
      </S.HeadingWrapper>

      <S.Content>
        <S.SectionText>Artigos</S.SectionText>

        {trabalhoAprovado && (
          <>
            <S.AcceptedWrapper>
              <S.AcceptedText>
                Parabéns, {trabalhoAprovado.name}!
              </S.AcceptedText>
              <Lottie options={defaultOptions} height={250} width={250} />
              <S.AcceptedText>
                Seu trabalho foi <b>aprovado</b> para o I Congresso Roraimense
                de Trauma e Emergências Médicas.
              </S.AcceptedText>

              <S.AcceptedInfoWrapper>
                <S.AcceptedText>
                  Local de apresentação: Plenário do CRM
                </S.AcceptedText>
                <S.AcceptedText>Dia: 17/11/2022</S.AcceptedText>
                <S.AcceptedText>
                  Horário:{' '}
                  {dayjs(trabalhoAprovado.hora_apresentacao).format(
                    'DD/MM/YYYY HH:mm'
                  )}
                </S.AcceptedText>
                <S.AcceptedText>
                  Duração: 10 min+5min de considerações da banca avaliadora
                </S.AcceptedText>
              </S.AcceptedInfoWrapper>
              <S.AcceptedText>
                Segue o modelo de pôster eletrônico que deve ser enviado para a
                Comissão Científica até o dia <b>12/11/2022</b>. É indicado que
                o autor principal leve seu pôster eletrônico em formato{' '}
                <b>pdf</b> em
                <b> dispositivo externo</b> para apresentação.
              </S.AcceptedText>
            </S.AcceptedWrapper>

            <Link href="https://emergenciasgepet.s3.sa-east-1.amazonaws.com/template_poster_crtem_Salvo_automaticamente_ce95b81a3d.pptx?updated_at=2022-11-09T00:30:31.610Z">
              <a>
                <Button type="button" backgroundColor="red">
                  Template de Pôster Eletrônico
                </Button>
              </a>
            </Link>
          </>
        )}

        {articles?.map((item) => (
          <MyArticleItem key={item.id} {...item} />
        ))}

        {articles?.length === 0 && (
          <S.NotFount>Nenhum artigo encontrado</S.NotFount>
        )}

        <S.SectionText>Inscrição</S.SectionText>

        {inscricao && (
          <S.ComprovanteWrapper onSubmit={handleSubmit(onSubmit)}>
            <p>
              Status:{' '}
              <strong>
                {inscricao?.attributes.confirmado ? 'CONFIRMADA' : 'PENDENTE'}
              </strong>
            </p>
            <p>
              Participante: <strong>{inscricao?.attributes.nome}</strong>
            </p>
            <p>
              Categoria de inscrição:{' '}
              <strong>{inscricao?.attributes.categoria}</strong>
            </p>

            <FileField
              name="comprovante_de_pagamento"
              label="Comprovante de pagamento *"
              accept=".pdf, .doc, .docx, .png, .jpg"
              register={register('comprovante_de_pagamento', {
                required: 'Este campo é obrigatório'
              })}
              error={
                errors.comprovante_de_pagamento?.message as string | undefined
              }
            />

            <Button
              type="submit"
              loading={loading}
              backgroundColor={sent ? 'green' : 'gray'}
            >
              {sent ? 'Comprovante enviado!' : 'Enviar comprovante'}
            </Button>
          </S.ComprovanteWrapper>
        )}

        <S.PagamentoWrapper>
          <Payment>
            <BorderWrapper>
              <QRCodeWrapper>
                <img src="/img/qrcode.png" alt="qrcode" />
              </QRCodeWrapper>
            </BorderWrapper>
            <Column>
              <Column style={{ gap: 0 }}>
                {inscricao?.attributes.categoria && categoriesPrices && (
                  <Title>
                    Total a pagar
                    <br /> R${' '}
                    {String(
                      categoriesPrices[
                        inscricao?.attributes
                          .categoria as 'Estudante de graduação (MEDICINA)'
                      ].price.toFixed(2)
                    ).replace('.', ',')}
                  </Title>
                )}
                <Name>Chave Pix: grupogepet46@gmail.com</Name>
              </Column>
              <WarningWrapper>
                <Warning />
                <p>
                  ATENÇÃO: por favor, confirme os dados do recebedor antes de
                  confirmar a transferência: Laura Beatriz Rocha Bacelar Paiva,
                  com CPF 030.742.562-22, PICPAY.
                </p>
              </WarningWrapper>
            </Column>
          </Payment>
        </S.PagamentoWrapper>

        {/* {!!inscricao && <SubscriptionItem {...inscricao?.attributes} />} */}

        {inscricao === undefined && (
          <S.NotFount>Nenhuma inscrição encontrada</S.NotFount>
        )}
      </S.Content>
    </S.Wrapper>
  )
}

export default MeusArtigosTemplate
