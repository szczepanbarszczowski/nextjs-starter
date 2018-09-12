/*
In production the stylesheet is compiled to .next/static/style.css.
The file will be served from /_next/static/style.css
You could include it into the page using either next/head or a custom _document.js.
*/

import Document, {Head, Main, NextScript} from 'next/document'
import Helmet from 'react-helmet'

export default class MyDocument extends Document {
  static async getInitialProps(...args) {
    const documentProps = await super.getInitialProps(...args)
    // see https://github.com/nfl/react-helmet#server-usage for more information
    // 'head' was occupied by 'renderPage().head', we cannot use it
    return {...documentProps, helmet: Helmet.renderStatic()}
  }

  // should render on <html>
  get helmetHtmlAttrComponents() {
    return this.props.helmet.htmlAttributes.toComponent()
  }

  // should render on <body>
  get helmetBodyAttrComponents() {
    return this.props.helmet.bodyAttributes.toComponent()
  }

  // should render on <head>
  get helmetHeadComponents() {
    return Object.keys(this.props.helmet)
      .filter(el => el !== 'htmlAttributes' && el !== 'bodyAttributes')
      .map(el => this.props.helmet[el].toComponent())
  }

  get helmetJsx() {
    return (<Helmet
      htmlAttributes={{lang: 'en'}}
      title='Hello next.js!'
      meta={[
        {name: 'viewport', content: 'width=device-width, initial-scale=1'},
        {property: 'og:title', content: 'Hello next.js!'}
      ]}
    />)
  }

  render() {
    return (
      <html {...this.helmetHtmlAttrComponents}>
      <Head>
        {this.helmetJsx}
        {this.helmetHeadComponents}
        <link
          rel='stylesheet'
          href='/_next/static/style.css'
        />
        <link rel="manifest" href="/manifest.json"/>
      </Head>
      <body {...this.helmetBodyAttrComponents}>
        <Main/>
        <NextScript/>
      </body>
      </html>
    )
  }
}
