/* eslint-disable @next/next/no-css-tags */
import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { useRouter } from 'next/router';
import { ITeam } from '../components/TeamCard/TeamCard';
import { Row, Col, Button } from 'antd';
import PlayerTable from '../components/PlayerTable/PlayerTable';
import scrollToTop from '../helpers/scrollToTop';
import LeftOutlined from '@ant-design/icons/lib/icons/LeftOutlined';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const urlToFetch = `https://apiv3.apifootball.com/?action=get_teams&team_id=${context.query.team}&APIkey=${process.env.REACT_APP_API_KEY}`;

  const res = await fetch(urlToFetch);
  const data = await res.json();

  return {
    props: {
      data
    }
  };
};

const TeamInfo = ({
  data
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const router = useRouter();

  scrollToTop('header');

  return data.map((team: ITeam) => {
    return (
      <>
        <Head>
          <title>Football - {team.team_name} - SSR</title>
        </Head>
        <div className="team-info-root" id="team-info-root" key={team.team_key}>
          <Row className="team-info-title-root">
            <Col span={24} className="back-button-root">
              <Button
                shape="round"
                type="link"
                size="large"
                icon={<LeftOutlined />}
                onClick={() => router.push('/')}
                style={{ color: '#2DC19F' }}
              >
                Voltar
              </Button>
            </Col>
            <Col span={3} className="team-info-title-image">
              <Image
                src={team.team_badge}
                alt="logo"
                width={170}
                height={170}
              />
            </Col>
            <Col span={12} className="team-info-title-text">
              <span>{team.team_name}</span>
              <span>
                Técnico: {team.coaches.map((coach: any) => coach.coach_name)}
              </span>
            </Col>
          </Row>
          <Row className="table-row-root">
            <Col span={24}>
              <PlayerTable players={team.players} />
            </Col>
          </Row>
        </div>
      </>
    );
  });
};

export default TeamInfo;
