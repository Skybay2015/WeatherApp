import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const DayTitle = styled.h2`
   color: #000;
   font-weight: 600;
   font-size: 24px;
   margin-bottom: 10px;
`;

const DayDate = styled.p`
   color: grey;
   font-weight: light;
   font-size: 14px;
`;

const DayTemperature = styled.p`
   color: #000;
   font-size: 28px;
   font-weight: 800;
   margin: 0;
`;

const DayInfo = styled.p`
   color: grey;
   font-size: 20px;
   margin: 10px 0 0 0;
`;

const DayWrapper = styled.div`
   border: 1px solid grey;
   border-radius: 5px;
   text-align: center;
   padding: 30px;
   cursor: pointer;

   transition: 0.2s ease-out;

   &:hover {
      transition: 0.2s ease-in;
      transform: scale(1.1);
   }
`;

const Day = ({ temp, weather, weatherIcon, day, date, id }) => {
   const history = useHistory();
   const handleClick = () => {
      history.push({
         pathname: `/stat/${id}`,
      });
   };

   return (
      <DayWrapper onClick={handleClick}>
         <DayTitle>{day}</DayTitle>
         <DayDate>{date}</DayDate>
         <img
            alt='icon'
            src={`http://openweathermap.org/img/wn/${weatherIcon}d@2x.png`}></img>
         <DayTemperature>{temp} ℃</DayTemperature>
         <DayInfo>{weather}</DayInfo>
      </DayWrapper>
   );
};

export default Day;
