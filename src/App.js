import './App.css';
import styled from '@emotion/styled'
import { ReactComponent as HoprIcon } from './components/hopr-logo/hopr-icon.svg'
import Button from './components/Button';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 32px 16px;
  gap: 16px;
  max-width: 600px;
  margin: auto;
`

const Title = styled.div`
  text-align: center;
  line-height: 2;
  margin-bottom: 32px;
`

const SHoprIcon = styled(HoprIcon)`
  border-radius: 50%;
  width: 96px;
  height: 96px;
  display: block;
  object-fit: contain;
  object-position: initial;
  filter: none;
`

function App() {
  return (
    <Container>    
      <SHoprIcon/>
      <Title>
        HOPR
        <br/>
        WE'RE BUILDING A PRIVATE INTERNET FOR EVERYONE.
      </Title>
      <Button
        hopr
        href="http://playground.hoprnet.org/"
        target="_blank"
      >
        Playground
      </Button>
      <Button
        hopr
        href="http://derp.hoprnet.og/"
        target="_blank"
      >
        D.E.R.P.
      </Button>
      <Button
        hopr
        href="https://mint.hoprnet.org/"
        target="_blank"
      >
        Non-Private NFT
      </Button>
      <Button
        hopr
        href="https://www.myne.chat/"
        target="_blank"
      >
        myne.chat
      </Button>
      <Button
        hopr
        href="https://www.leadingprivacy.com/"
        target="_blank"
      >
        Leading Privacy Alliance
      </Button>
      <Button
        hopr
        href="http://t.me/hoprnet"
        target="_blank"
      >
        HOPR Telegram
      </Button>
      <Button
        hopr
        href="https://twitter.com/hoprnet"
        target="_blank"
      >
        HOPR Twitter
      </Button>
    </Container>
  );
}

export default App;
