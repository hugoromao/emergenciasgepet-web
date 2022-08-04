import { useState } from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'
import { FileUpload } from 'styled-icons/material-rounded'
import * as S from './styles'

export type FileFieldProps = {
  label?: string
  name: string
  register?: UseFormRegisterReturn
}

const FileField = ({ label, name, register }: FileFieldProps) => {
  const [file, setFile] = useState<string | null>(null)

  function onInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    register?.onChange(e)
    setFile(e.target.value.replace('C:\\fakepath\\', ''))
  }

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
            {...register}
            onChange={onInputChange}
          />
        </S.InputWrapper>
      </S.Label>
    </S.Wrapper>
  )
}

export default FileField
