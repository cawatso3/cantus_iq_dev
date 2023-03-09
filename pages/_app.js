import '../styles/globals.css'

import { Amplify } from 'aws-amplify';

import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from '../src/aws-exports';

import AppBar from '../components/AppBar'





Amplify.configure(awsExports);

function App({ Component, pageProps }) {
  return (
  <>
  <AppBar />
 
  <Component {...pageProps} />
  </>

  )
  
}

export default withAuthenticator(App);
