import './App.css'
import { LandingPage } from './LandingPage'
import { AppProvider } from '@shopify/polaris'
import enTranslations from '@shopify/polaris/locales/en.json';

function App() {

  return (
    <>
      <AppProvider i18n={enTranslations}>
      <LandingPage></LandingPage>
      </AppProvider>
    </>
  )
}

export default App
