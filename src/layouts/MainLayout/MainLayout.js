import {Head} from '../../components/Head'
import {Nav} from '../../components/Nav'
import '../../styles/app.scss'

export const MainLayout = ({children, title, description}) => (
  <div>
    <Head title={title} description={description} />
    <Nav/>

    {children}

    <footer>
      {'I`m here to stay'}
    </footer>
  </div>
)
