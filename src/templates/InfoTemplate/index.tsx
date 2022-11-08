/* eslint-disable react/no-unescaped-entities */
import Button from 'components/Button'
import Header from 'components/Header'
import Link from 'next/link'
import * as S from './styles'

import { areasOptions } from 'components/ArticleForm'

const InfoTemplate = () => (
  <S.Wrapper>
    <S.HeadingWrapper>
      <Header transparent />

      <S.Title>SUBMISSÕES</S.Title>
      {/* <S.Subtitle>Aqui vc verifica</S.Subtitle> */}
    </S.HeadingWrapper>

    <S.Content>
      <p>
        Para a submissão de trabalhos, são obrigatórios o cadastro no sistema e
        posterior acesso por meio de login e senha, os quais também são
        necessários para o acompanhamento do processo editorial em curso.
      </p>

      <strong>I - Instruções para submissão de trabalhos</strong>

      <b>Data de recebimento de trabalhos - 30/09/2022 a 30/10/2022</b>

      <em>
        Para submeter os trabalhos é necessário que o autor responsável pela
        submissão deste esteja inscrito no evento. Os demais autores que se
        inscreverem no congresso não deverão reenviar o trabalho já inscrito.
        <br />
        <b>
          A submissão de trabalhos deve ser feita exclusivamente via site do
          congresso.
        </b>
      </em>

      <p>Para submeter um trabalho, siga os seguintes passos:</p>

      <ol>
        <li>
          Acesse "Entrar", fornecendo seu login e senha cadastrados durante a
          inscrição.
        </li>

        <li>
          Clique no botão "Faça sua submissão" no final da página SUBMISSÕES.
        </li>

        <li>
          Siga as instruções da tela para acessar o formulário de submissão de
          resumos. Preencha todos os campos do formulário online.
        </li>

        <li>
          Antes de submeter o resumo, revise, com atenção. Eventuais alterações
          serão permitidas somente até o prazo final de envio de resumos.
          <br />
          <S.Indent>
            * O autor responsável pela submissão deverá preencher todos os
            campos no formulário online. Todas as comunicações referentes ao
            trabalho científico serão enviadas somente a esse autor pelo e-mail
            cadastrado e ele(a) deverá encarregar-se de repassar aos coautores;
          </S.Indent>
        </li>

        <li style={{ fontWeight: 700 }}>
          <b>
            Assinale a modalidade de apresentação escolhida = Apresentação Oral
            OU Pôster;
            <br />
            <S.Indent>
              * Participantes que submeteram relatos de casos e resumos serão
              direcionados à modalidade de apresentação com pôster. Caso a
              submissão efetuada seja de artigo científico, o participante
              poderá optar pelas modalidades pôster ou apresentação oral.
            </S.Indent>
          </b>
        </li>

        <li>Ao finalizar a submissão dos resumos, clique em “Enviar”;</li>

        <li>
          Após a submissão do resumo será enviado um e-mail automático para o
          responsável pelo trabalho (quem o submeteu), confirmando as
          informações cadastradas. Verifique se todas estão corretas. Caso não
          estejam você deve acessar a área do usuário e efetuar as alterações
          pertinentes (o que poderá ser feito até a data limite para submissão
          dos resumos).
        </li>

        <li>
          Caso não receba o e-mail automático no mesmo dia confirmando o envio,
          o resumo pode não ter sido enviado corretamente. Nesse caso, entre em
          contato com o e-mail grupogepet46@gmail.com, informando o evento e o
          problema ocorrido.
        </li>

        <li>
          Para novos acessos a web, basta informar USERNAME e SENHA. Caso tenha
          esquecido, utilize a opção "Lembrar Senha", no topo da página.
        </li>
      </ol>

      <strong>II - Temas</strong>

      <ul>
        {areasOptions.map((o) => {
          if (o.label !== 'Selecionar') {
            return <li key={o.label}>{o.label}</li>
          }
          return null
        })}
      </ul>

      <strong>III - Informações importantes</strong>

      <ul>
        <li>
          O resumo deve ser enviado em português, inglês ou espanhol. Porém,
          qualquer que seja a língua escolhida é fundamental que esteja
          gramaticalmente correta, caso contrário, poderá ser motivo de recusa.
        </li>
        <li>O prazo para submissão dos resumos é: 30/10/2022</li>
        <li>
          Para receber o certificado do seu resumo após o evento, um dos autores
          listados deve estar cadastrado e ter participado do evento, desde que
          atenda ao limite de trabalhos submetidos por inscrição.
        </li>
        <li>Serão aceitos até 02 trabalhos por inscrito. </li>
        <li>
          O limite de autores por trabalho é de seis integrantes. Insira os
          autores na ordem desejada
        </li>
      </ul>

      <b>
        IMPORTANTE: O(a) apresentador(a) também deve estar na lista de autores!
      </b>

      <ul>
        <li>
          O resultado dos trabalhos será divulgado na área do usuário do autor
          no dia <b>30/10/2022.</b>
        </li>
        <li>
          A apresentação deverá ser feita por aquele indicado submissão do
          trabalho. Se não for possível, outro autor do trabalho deverá realizar
          a apresentação, desde que esteja inscrito no evento e tenha pago a
          taxa de inscrição
        </li>
        <li>
          Os resumos serão enviados exclusivamente pelo site oficial do
          Congresso.
        </li>
        <li>
          Será emitido apenas 01 (um) certificado por trabalho apresentado,
          seguindo a ordem cadastrada de autores.
        </li>
        <li>
          Atenção: todos os materiais produzidos sobre os resumos (anais,
          certificado, dentre outros) serão reprodução fiel das informações
          submetidas pelo autor. Portanto, não é possível realizar alterações
          quanto à grafia do título, resumo ou autores após a data limite para
          envio de trabalhos.{' '}
          <b>
            Salientamos que as informações fornecidas são de inteira
            responsabilidade do autor que submete o resumo. Nomes grafados de
            maneira incompleta (por abreviatura ou omissão de um ou mais
            sobrenomes) não serão alterados e constarão no programa oficial e
            certificado digital da maneira como informado pelo autor principal
            no momento da inscrição.
          </b>
        </li>
        <li>
          Os valores com desconto respeitarão as datas da tabela ‘Tabela de
          preços’ disponível no site do evento, independentemente da data de
          aprovação dos trabalhos. Para garantir o pagamento com desconto é
          preciso respeitar as datas descritas nessa tabela. Não haverá
          ressarcimento dos valores de inscrição pagos em casos de desistência
          ou ausência no Congresso.
        </li>
        <li>
          O autor principal poderá optar sobre a forma preferencial de
          apresentação do trabalho. Entretanto, à Comissão Científica reserva-se
          ao direito de alterar esta escolha;
        </li>
        <li>
          A decisão final da comissão avaliadora é considerada suprema,
          irrevogável e inapelável, a qual não será revista. Os trabalhos que
          não forem aceitos para apresentação oral podem ser aprovados para
          pôster, os autores serão informados desta decisão.
        </li>
        <li>
          Ao submeter os trabalhos, os autores assumem o cumprimento das
          legislações e normas éticas que regem a pesquisa com seres humanos e
          animais, incluindo a aprovação pelos Comitês de Ética em Pesquisa e de
          Ética Clínica em Pesquisa em Animais.
        </li>
        <li>
          A Comissão organizadora do Congresso não será responsável pelos custos
          de inscrição, transporte, hospedagem ou outros custos gerados para
          apresentação de trabalhos em qualquer modalidade.
        </li>
        <li>
          A submissão de trabalhos representa um compromisso do(s) autor(es) de
          apresentar o trabalho, se aceito, durante o evento.
        </li>
      </ul>

      <strong>IV - Instruções para preparação</strong>

      <strong>Artigo Científico</strong>

      <ul>
        <li>
          Os artigos devem apresentar de 5 a 20 páginas digitadas em fonte{' '}
          <b>Times New Roman, tamanho 12, com espaçamento 1,5 cm</b>,
          preservando 2,5 cm nas margens direita e superior e 2,5 cm nas margens
          esquerda e inferior (conforme normas da ABNT),{' '}
          <b>com recuo nos parágrafos de 1 cm.</b>
        </li>
        <li>
          O manuscrito deve estar em formato <b>Microsoft Word</b>, as
          ilustrações (Tabelas e Gráficos) em formato Excell e, as Figuras, no
          formato <b>JPEG com 300 dpi</b> (inseridas no texto próximas onde são
          citadas).
        </li>
        <li>
          Após fazer as alterações sugeridas pelo Conselho Consultivo e pelo
          Corpo Editorial, o autor deve enviar o arquivo contendo o artigo
          completo finalizado. Todos os arquivos devem estar formatados segundo
          as exigências previamente citadas. Estes devem estar claramente
          identificados e marcados com o nome do autor, o título do trabalho e a
          data de envio. Siga as instruções gerais de estilo e de referências
          contidas abaixo.
        </li>
        <li>
          Ilustrações e Tabelas serão manuseadas de modo convencional,
          entretanto as legendas devem ser incluídas no texto. Caracteres
          não-standard (letras gregas, símbolos matemáticos, etc.) devem ser
          codificados no texto. Faça uma lista de tais caracteres e dos códigos
          usados. Pede-se que as <b>figuras</b> sejam gravadas com resolução
          gráfica mínima de <b>300 dpi</b>. Caso o autor envie tais arquivos em
          resolução inferior à solicitada, a Revista de Medicina não se
          responsabiliza se as imagens apresentarem baixa resolução na
          apresentação final do artigo.
        </li>
      </ul>

      <Link href="https://emergenciasgepet.s3.sa-east-1.amazonaws.com/Modelo_Artigo_Cientifico_8c7701358a_01525974fb.docx?updated_at=2022-10-06T14:08:49.765Z">
        <a>
          <Button type="button" backgroundColor="red">
            Baixar template
          </Button>
        </a>
      </Link>

      <strong>Resumo</strong>

      <ul>
        <li>
          O Título deve ser conciso e refletir o estudo a ser apresentado.
        </li>
        <li>
          O texto do resumo não deve exceder 2.500 caracteres (não inclui título
          e autoria/filiação) com espaços, limite de 250 caracteres para o
          título.
        </li>
        <li>
          O resumo deverá ser digitado em corpo único, sendo sugerido para o
          autor seguir a sequência:{' '}
          <b>Introdução, Objetivo, Método, Resultados e Conclusão;</b> Essa
          sugestão não se aplica para Relatos de Caso/Casos Clínicos.
        </li>
      </ul>

      <Link href="https://emergenciasgepet.s3.sa-east-1.amazonaws.com/Template_resumo_simples_a44ac5c31b_902abc9912.docx?updated_at=2022-10-06T14:08:49.728Z">
        <a>
          <Button type="button" backgroundColor="red">
            Baixar template
          </Button>
        </a>
      </Link>

      <strong>Relato de Caso/ Caso Clínico</strong>

      <ul>
        <li>
          <b>
            Relatos de caso deverão ser estruturados em: Apresentação do Caso,
            Discussão e Comentários Finais.
          </b>{' '}
          Não deverão ser incluídas referências bibliográficas. Considerando que
          os relatos de casos contribuem de modo importante para a troca de
          experiência entre os profissionais, a Comissão recomenda que sejam
          enviados apenas relatos comuns com evolução atípica ou de casos
          realmente raros, que tenham relevância.
        </li>
        <li>
          A Instituição ou Instituições onde o trabalho foi realizado, assim
          como os nomes dos autores, NÃO devem ser mencionadas no corpo do
          texto.
        </li>
        <li>
          O conteúdo do resumo deve estar relacionado ao tópico escolhido.
        </li>
        <li>
          <b>
            Não será permitida a utilização de gráfico ou tabela na submissão
            online do resumo.
          </b>
        </li>
        <li>
          Não deverão ser incluídas referências bibliográficas na submissão
          eletrônica. Sugere-se que os autores se abstenham do uso de
          abreviaturas.
        </li>
        <li>
          Resultados baseados em afirmações como “resultados serão apresentados”
          ou “dados serão analisados” não serão considerados. Estes devem ser
          expostos de modo mais claro possível e as conclusões devem ser
          baseadas nos dados apresentados. Neste caso, os autores devem
          apresentar resultados preliminares ou se é um estudo em andamento, por
          exemplo.{' '}
          <b>
            Do mesmo modo, não serão aceitos resumos cujos resultados, de um
            mesmo trabalho, estejam pulverizados em diferentes resumos.
          </b>
        </li>
        <li>
          Relatos de casos sem clara originalidade e relevância que justifiquem
          sua apresentação não serão aceitos. Também serão recusados trabalhos
          que conste apenas revisão da literatura.
        </li>
        <li>
          Nomes comerciais não são permitidos, apenas os nomes genéricos das
          drogas, escritos em letras minúsculas.
        </li>
      </ul>

      <Link href="https://emergenciasgepet.s3.sa-east-1.amazonaws.com/Template_caso_clinico_gepet_3b8d8f37c0.docx?updated_at=2022-10-06T14:08:49.750Z">
        <a>
          <Button type="button" backgroundColor="red">
            Baixar template
          </Button>
        </a>
      </Link>

      <Link href="/inscricao/artigo" passHref>
        <Button>FAÇA SUA SUBMISSÃO</Button>
      </Link>
    </S.Content>
  </S.Wrapper>
)

export default InfoTemplate
