import React from 'react'
import ActiveLink from './active-link'
import { Link, useTheme } from '@zeit-ui/react'

const links = [
  { name: 'About', link: '/' },
  { name: 'Guide', link: '/guide' },
  { name: 'Commands', link: '/commands' },
  { name: 'Parameters', link: '/parameters' },
  { name: 'APIs', link: '/apis' },
]

const getMenuItem = (name: string, link: string) => {
  return (
    <ActiveLink href={link} key={link}>
      <Link>{name}</Link>
    </ActiveLink>
  )
}

const Menu = () => {
  const theme = useTheme()
  return (
    <section>
      {links.map(item => getMenuItem(item.name, item.link))}
      <style jsx>{`
        section {
          position: sticky;
          top: 55px;
          display: flex;
          flex-direction: column;
        }

        section :global(.link) {
          margin-bottom: 0.5rem;
          font-size: 14px;
          color: ${theme.palette.accents_5};
        }

        section :global(.link:hover) {
          color: ${theme.palette.accents_7};
        }

        section :global(.active) {
          color: ${theme.palette.accents_7};
        }
      `}</style>
    </section>
  )
}

export default Menu
