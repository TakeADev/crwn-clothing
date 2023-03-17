import React from 'react'
import { FormInputLabel, Input, Group } from './form-input.styles'

export const FormInput = ({ label, inputOptions }) => {
  return (
    <Group>
      <Input {...inputOptions} />
      {label && (
        <FormInputLabel shrink={inputOptions.value.length}>
          {label}
        </FormInputLabel>
      )}
    </Group>
  )
}
