import { Link } from 'react-router-dom'
import styled from 'react-emotion'
import { colors } from '../styles.js'

const Anchor = styled(Link)`
  color: ${colors.secondary};
  text-decoration: none;
  cursor: pointer;

  &:hover,
  &:focus,
  &:active {
    border-bottom: solid 2px ${colors.accent};
  }
`

export default ({ href, children }) => <Anchor to={href}>{children}</Anchor>
