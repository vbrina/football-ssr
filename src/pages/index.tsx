/* eslint-disable @next/next/no-css-tags */
import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { Col, Row } from 'antd';
import { ITeam } from '../components/TeamCard/TeamCard';
import TeamCard from '../components/TeamCard/TeamCard';
import scrollToTop from '../helpers/scrollToTop';
interface IHomeProps {
  data: ITeam[];
}

export const getServerSideProps = async () => {
  const urlToFetch = `https://apiv3.apifootball.com/?action=get_teams&league_id=302&APIkey=${process.env.REACT_APP_API_KEY}`;

  const res = await fetch(urlToFetch);
  const data: ITeam[] = await res.json();

  return {
    props: {
      data
    }
  };
};

const Home = (props: IHomeProps) => {
  scrollToTop('header');

  return (
    <>
      <Head>
        <title>Football - SSR</title>
      </Head>
      <div className="home-root">
        <Row className="title-root">
          <Col span={6} className="title-image">
            <Image
              src="https://apiv3.apifootball.com/badges/logo_leagues/302_la-liga.png"
              alt="logo"
              width={500}
              height={180}
            />
          </Col>
          <Col span={12} className="title-text">
            <span>Escolha um time para ver as estatísticas dos jogadores</span>
          </Col>
        </Row>
        <Row className="card-row-root">
          {props.data.map((team) => {
            return <TeamCard key={team.team_key} team={team} />;
          })}
        </Row>
      </div>
    </>
  );
};

export default Home;
