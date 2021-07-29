import React from 'react'
import { SheetHeader } from '../SheetHeader/sheetHeader'
import SheetBodyContainer from '../SheetBody/sheetBodyContainer'
import styles from './sheet.module.css'
import SheetFooterContainer from '../SheetFooter/sheetFooterContainer'

import { Provider } from 'react-redux'

import store from '../../../store/store'

function Sheet() {
  return (
    <Provider store={store}>
      <div className={styles.sheet}>
        <SheetHeader />
        <SheetBodyContainer />
        <SheetFooterContainer />
      </div>
    </Provider>
  )
}

export { Sheet }
