import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import global_en from "./translations/en/global.json"
import global_tr from "./translations/tr/global.json"

import i18next from "i18next";
import { I18nextProvider } from 'react-i18next'
import { Provider } from 'react-redux'
import { GeneralStore } from './modules/shared/store/index.tsx'

i18next.init({
  interpolation: { escapeValue: true },
  lng: "en",
  resources: {
    en: {
      global: global_en
    },
    tr: {
      global: global_tr
    }
  }
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={GeneralStore}>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </Provider>
)
