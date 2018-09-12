import React from 'react'
import Link from 'next/link'
import {MainLayout} from '../../layouts/MainLayout/MainLayout'

import s from './Home.module.scss'


export class Home extends React.Component {
  render() {
    const {t, initialI18nStore} = this.props

    return (
      <MainLayout title='Home | Black' description='Home description'>
        <div className={s.hero}>
          <h1 className={s.title}>{t('welcome')}</h1>
          <p className={s.description}>{t('common:integrates_react-i18next')}</p>
          <p className={s.description}>
            To get started, edit <code>pages/index.js</code> and save to reload.
          </p>
          <div>
            <picture>
              <source srcSet={require('./assets/unicorn.png?webp')} type="image/webp"/>
              <source srcSet={require('./assets/unicorn.png')} type='image/png'/>
              <img src={require('./assets/unicorn.png')} alt='User' className={s.image}/>
            </picture>
          </div>

          <div className={s.row}>
            <Link href="https://github.com/zeit/next.js#getting-started">
              <a className={s.card}>
                <h3>Getting Started &rarr;</h3>
                <p>Learn more about Next on Github and in their examples</p>
              </a>
            </Link>
            <Link href="https://open.segment.com/create-next-app">
              <a className={s.card}>
                <h3>Examples &rarr;</h3>
                <p>
                  Find other example boilerplates on the{' '}
                  <code>create-next-app</code> site
                </p>
              </a>
            </Link>
            <Link prefetch href="/test">
              <a className={s.card}>
                <h3>Test route</h3>
                <p>Just test route</p>
              </a>
            </Link>
          </div>
        </div>
      </MainLayout>
    )
  }
}
