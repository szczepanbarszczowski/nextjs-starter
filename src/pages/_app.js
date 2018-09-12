import React from 'react'
import {Provider} from 'react-redux'
import App, {Container} from 'next/app'
import withRedux from 'next-redux-wrapper'
import withReduxSaga from 'next-redux-saga'
import { I18nextProvider } from 'react-i18next'
import i18n from '../../i18n'

import initializeStore from '../redux/reducer'

class Document extends App {
  static async getInitialProps({Component, ctx}) {
    try {
      const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {}
      const initialI18nStore = ctx.req ? i18n.getInitialProps(ctx.req, 'common') : {}
      return {
        pageProps,
        initialI18nStore
      }
    } catch (e) {
      console.error(e)
    }
  }

  render() {
    const {Component, pageProps, store, initialI18nStore} = this.props

    return (
      <Container>
        <I18nextProvider i18n={i18n} initialI18nStore={initialI18nStore}>
          <Provider store={store}>
            <Component {...pageProps} />
          </Provider>
        </I18nextProvider>
      </Container>
    )
  }
}

export default withRedux(initializeStore)(withReduxSaga(Document))
