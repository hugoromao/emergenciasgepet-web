import Button from 'components/Button'
import Modal from 'components/Modal'
import * as S from './styles'

type ArticleRulesModalProps = {
  open: boolean
  setOpen: () => void
}

const ArticleRulesModal = ({ open, setOpen }: ArticleRulesModalProps) => (
  <Modal open={open} setOpen={setOpen} modalStyle={{ minHeight: '80vh' }}>
    <S.Wrapper>
      <h1>SUBMISSÕES</h1>

      <p>
        Para a submissão de trabalhos, são obrigatórios o cadastro no sistema e
        posterior acesso, por meio de login e senha, estes também são
        necessários para o acompanhamento do processo editorial em
        curso. Acesso em uma conta existente ou Registrar uma nova conta.
      </p>

      <Button>Confirmar</Button>
    </S.Wrapper>
  </Modal>
)

export default ArticleRulesModal
