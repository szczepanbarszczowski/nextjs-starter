import { withI18next } from '../lib/withI18next'
import { Home } from '../routes/Home'

export default withI18next(['home', 'common'])(Home)
