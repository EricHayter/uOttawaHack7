import './App.css'
import { LandingPage } from './LandingPage'
import { AppProvider } from '@shopify/polaris'
import '@shopify/polaris/build/esm/styles.css';
import en from "@shopify/polaris/locales/en.json";

function App() {

  return (
    <>
      <AppProvider i18n={en}>
      <LandingPage></LandingPage>
      </AppProvider>
    </>
  )
}

export default App
