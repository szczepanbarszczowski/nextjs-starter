import React from 'react'
import Link from 'next/link'

import s from './Nav.module.scss'

const links = [
  {href: 'https://github.com/segmentio/create-next-app', label: 'Github'}
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

export const Nav = () => (
  <nav className={s.nav}>
    <ul className={s.ul}>
      <li className={s.li}>
        <Link prefetch href="/">
          <a className={s.a}>Home</a>
        </Link>
      </li>
      <ul>
        {links.map(({key, href, label}) => (
          <li key={key} className={s.li}>
            <Link href={href}>
              <a className={s.a}>{label}</a>
            </Link>
          </li>
        ))}
      </ul>
    </ul>
  </nav>
)
