import { useState } from 'react'
import { FileUpload } from 'styled-icons/material-rounded'
import * as S from './styles'

export type FileFieldProps = {
  label?: string
  name: string
}

const FileField = ({ label, name }: FileFieldProps) => {
  const [file, setFile] = useState<string | null>(null)

  return (
    <S.Wrapper>
      <S.Label htmlFor={name}>
        {label}
        <S.InputWrapper>
          <FileUpload />
          <p>
            {file ? file : 'Solte seus arquivos ou clique para fazer upload.'}
          </p>
          <S.Input
            id={name}
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
