import { useState } from 'react'
import { FileUpload } from 'styled-icons/material-rounded'
import * as S from './styles'

const FileField = () => {
  const [file, setFile] = useState<string | null>(null)

  return (
    <S.Wrapper>
      <S.Label htmlFor="comprovante">
        Comprovante
        <S.InputWrapper>
          <FileUpload />
          <p>
            {file ? file : 'Solte seus arquivos ou clique para fazer upload.'}
          </p>
          <S.Input
            id="comprovante"
            type="file"
            accept=".pdf, .doc, .docx"
            onChange={(e) =>
              setFile(e.target.value.replace('C:\\fakepath\\', ''))
            }
          />
        </S.InputWrapper>
      </S.Label>
    </S.Wrapper>
  )
}

export default FileField
