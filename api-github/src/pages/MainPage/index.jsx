import React from "react";

import { MdSearch } from 'react-icons/md'

import { Container, Logo, Title, Form, Buttom, Input } from './styles';

import githubLogo from '../../assets/images/github-logo.svg'

const MainPage = () => (

  <Container>
    <Logo src={githubLogo} alt="Api GitHub" />
    <Title>Api GitHub</Title>
    <Form>
      <Input placeholder="Username" />
      <Button>
        <MdSearch size={42} />
      </Button>

    </Form>

  </Container>
);


export default MainPage;