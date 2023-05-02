// import Connect4 from '../components/connect4canvas'
import App from "./_app";
import { TextEncoder, TextDecoder } from 'text-encoding-utf-8';

if (typeof window !== 'undefined' && !window.TextEncoder) {
  window.TextEncoder = TextEncoder;
}

if (typeof window !== 'undefined' && !window.TextDecoder) {
  window.TextDecoder = TextDecoder;
}


export default function Home() {
  return (
    <>
       

    <main>
      <h1>Connect4our</h1>
    <App />
    </main>
    </>
  )
}
