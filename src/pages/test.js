import React from 'react'
import {MainLayout} from '../layouts/MainLayout/MainLayout'
import {withI18next} from '../lib/withI18next'

const Test = ({t}) => (
  <MainLayout
    title='Test | Black'
    description='Test description'
  >
    <h1 style={{textAlign: 'center'}}>{t('testHeading')}</h1>
    <h2 style={{textAlign: 'center'}}>{t('testParagraph')}</h2>
  </MainLayout>
)

export default withI18next(['test', 'common'])(Test)
