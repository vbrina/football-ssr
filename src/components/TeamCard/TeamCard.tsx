import React from 'react';
import Link from 'next/link';
import { Col, Row } from 'antd';
import { IPlayer } from '../PlayerTable/PlayerTable';
import Image from 'next/image';

export interface ITeam {
  team_key: string;
  team_badge: string;
  team_name: string;
  players: IPlayer[];
  coaches: any[];
}

export interface TeamCardProps {
  team: ITeam;
}

const TeamCard: React.FC<TeamCardProps> = ({ team }) => {
  return (
    <Link passHref href={`/${team.team_key}`}>
      <Col span={4} className="card-root" title={team.team_name}>
        <Row className="row">
          <Image
            width={170}
            height={170}
            src={team.team_badge}
            alt={team.team_badge}
          />
        </Row>
        <Row className="row">
          <span className="team-name">{team.team_name}</span>
        </Row>
        <Row className="row">
          <span>Total de jogadores: {team.players.length}</span>
        </Row>
      </Col>
    </Link>
  );
};

export default TeamCard;
