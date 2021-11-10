import type { AppProps } from 'next/app';
import Header from '../components/Header/Header';
import 'antd/dist/antd.css';
import '../styles/Header.css';
import '../styles/PlayerTable.css';
import '../styles/TeamCard.css';
import '../styles/Home.css';
import '../styles/TeamInfo.css';
import '../styles/Globals.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
