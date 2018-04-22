import React from 'react'
import styled from 'react-emotion'
import { colors, widths } from '../styles.js'
import chroma from 'chroma-js'

import BaseSelect from '@atlaskit/select'

// export { default as Select } from '@atlaskit/select'

export { default as Button } from '@atlaskit/button'

const hexToRgb = hex => {
  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i
  let cleanedHex = hex.replace(
    shorthandRegex,
    (m, r, g, b) => r + r + g + g + b + b,
  )

  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(
    cleanedHex,
  )
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null
}

export const Label = styled('label')`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 1rem;
`

export const Title = styled('h3')`
  display: block;
`

export const Form = styled('form')`
  max-width: ${widths.minWidth};
  margin: 0 auto;
  font-size: 1.2rem;
  display: flex;
  flex-direction: column;
`

const rgb = hexToRgb(colors.secondary)

export const Error = styled('div')`
  background-color: rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.5);
  color: ${colors.secondary};
  border: solid 2px ${colors.secondary};
  border-radius: 4px;
  padding: 0.5rem;
  margin: 0.5rem 0 2rem;
`
const darken = (hex, amount = 0.5) =>
  chroma(hex)
    .darken(amount)
    .hex()

export const BaseInput = styled('input')`
  appearance: none;
  padding: 0.75em;
  border: solid 1px rgb(250, 251, 252);
  border-radius: 5px;
  background: rgb(250, 251, 252);
  font-size: 0.9em;
  width: 100%;

  transition background-color .3s ease;

  &:hover {
    background-color: rgb(244, 245, 247);
    border-color: rgb(244, 245, 247);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #0077cc;
    background-color: white;
  }

  &.is-invalid {
    box-shadow: 0 0 0 2px ${colors.warning};
  }
`

export const BaseTextArea = styled('textarea')`
  appearance: none;
  padding: 0.75em;
  border: solid 1px rgb(250, 251, 252);
  border-radius: 5px;
  background: rgb(250, 251, 252);
  font-size: 0.9em;
  width: 100%;

  transition background-color .3s ease;

  &:hover {
    background-color: rgb(244, 245, 247);
    border-color: rgb(244, 245, 247);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #0077cc;
    background-color: white;
  }

  &.is-invalid {
    box-shadow: 0 0 0 2px ${colors.warning};
  }
`

export const Input = ({ label, isInvalid, ...rest }) => (
  <label>
    {label}
    <BaseInput
      className={(() => {
        if (isInvalid) {
          return 'is-invalid'
        } else {
          return null
        }
      })()}
      {...rest}
    />
  </label>
)

export const TextArea = ({ label, isInvalid, ...rest }) => (
  <label>
    {label}
    <BaseTextArea
      className={(() => {
        if (isInvalid) {
          return 'is-invalid'
        } else {
          return null
        }
      })()}
      {...rest}
    />
  </label>
)

export const Select = ({ label, ...rest }) => (
  <label>
    {label}
    <BaseSelect {...rest} />
  </label>
)
