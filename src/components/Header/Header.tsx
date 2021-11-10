import React from 'react';
import { Col, Row } from 'antd';
import Image from 'next/image';

const Header: React.FC = () => {
  return (
    <Row className="header-root" id="header">
      <Col span={4} className="header-image">
        <Image
          src="https://apiv3.apifootball.com/badges/logo_leagues/302_la-liga.png"
          alt="logo"
          width={500}
          height={180}
        />
      </Col>
      <Col span={12}>
        <h1>Football Stats</h1>
      </Col>
    </Row>
  );
};

export default Header;
