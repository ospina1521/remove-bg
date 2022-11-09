import { FloatingActionButton } from '../global/FloatingActionButton/FloatingActionButton'
import { Header } from '../global/Header/Header'

export const ListOfProviderPage = () => {
  return (
    <div>

      <Header arrowBackEnable={false} burgerMenuEnable={true} title='PROVEEDORES' />

      <FloatingActionButton>
        <span>+</span>
      </FloatingActionButton>
    </div>
  )
}
