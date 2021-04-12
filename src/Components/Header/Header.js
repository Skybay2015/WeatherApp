import React from 'react';
import styled from 'styled-components';
import Wrapper from '../Wrapper';

const HeaderWrapper = styled.header`
   background-color: #717572;
   padding: 70px 0;
   text-align: center;
   max-width: 1170px;
   margin: 0 auto;
   border-radius: 5px;
   margin-top: 10px;
`;

const TitleWrapper = styled.h1`
   font-weight: 600;
   color: #fff;
   font-size: 60px;
`;

const Header = () => {
   return (
      <HeaderWrapper>
         <Wrapper>
            <TitleWrapper>5-Day Forecast.</TitleWrapper>
         </Wrapper>
      </HeaderWrapper>
   );
};

export default Header;
