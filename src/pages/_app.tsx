import { FunctionalComponent } from 'preact';
import '../styles/global.css'

import Header from '../lib/navigation/header/index.tsx';
import Container from '../lib/layouts/container/index.tsx';

const App: FunctionalComponent = ({Component, pageProps}) => {
  return (
    <div id="app">
      <Header
        title='Preact Components Library'
        hamburgerItems={[
          {text: 'top', href:'/'},
          {text: 'button', href:'/button'},
          {text: 'text', href:'/textfield'},
          {text: 'suggest', href:'/suggest'},
        ]}
      />
      <Container style={{marginTop: '80px', maxWidth: '840px'}}>
        <Component {...pageProps} />
      </Container>
    </div>
  );
};

export default App;
