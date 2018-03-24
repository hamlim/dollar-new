import styled from 'react-emotion'
import { colors, widths } from '../styles.js'

export {
  FieldTextStateless as Input,
} from '@atlaskit/field-text'
export {
  FieldTextAreaStateless as TextArea,
} from '@atlaskit/field-text-area'

export { default as Select } from '@atlaskit/select'

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

export const Button = styled('button')`
  align-self: flex-end;
  padding: 1rem 2rem;
  color: ${colors.primary};
  border: solid 1px;
  border-radius: 4px;
  background-color: transparent;
  transition: background-color 0.5s ease-in-out,
    color 0.5s ease-in-out;
  &:hover,
  &:focus,
  &:active {
    background-color: ${colors.primary};
    color: ${colors.white};
  }
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
