import React from 'react'
import styled from 'react-emotion'
import { colors, widths } from '../styles.js'
import Link from './link.js'

const Header = styled('header')`
  height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: ${widths.maxWidth};
  background-color: ${colors.white};
  margin: 0 auto;
`

const Nav = styled('nav')`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Title = styled('h1')`
  font-size: 3rem;
  color: ${colors.accent};
  text-decoration: none;
`

const NavItem = styled('li')`
  display: inline-block;
  font-size: 2rem;
  &:not(:last-of-type) {
    margin-right: 1rem;
  }
`

export default () => (
  <Header>
    <Title>
      <Link href="/">Dollar</Link>
    </Title>
    <Nav>
      <ul>
        <NavItem>
          <Link href="/app">💵</Link>
        </NavItem>
        <NavItem>
          <Link href="/analysis">📈</Link>
        </NavItem>
      </ul>
    </Nav>
  </Header>
)
