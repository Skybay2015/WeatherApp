import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import CityName from '../../Components/CityName';
import Wrapper from '../../Components/Wrapper';

import { getDate } from '../../helperFunctions';
import { WiCloudy, WiRain, WiWindy } from 'weather-icons-react';
import Chart from '../../Components/Chart';

const StatisticContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;

   margin-top: 30px;

   padding: 0 10px;

   background-color: grey;
`;

const StatisticItem = styled.div`
   border-bottom: 1px solid #fff;
   padding: 20px 0;
   width: 100%;
   color: #fff;
   display: flex;
   align-items: center;
   justify-content: space-around;
`;

const Date = styled.div`
   text-align: center;
   padding-top: 10px;
   font-size: 18px;
   color: #000;
   font-weight: 600;
`;

const TimeWrapper = styled.span`
   font-weight: 600;

   font-size: 14px;
`;

const ImgWrapper = styled.img`
   width: 50px;
   height: 50px;
`;

const ItemWrapper = styled.div`
   display: flex;
   align-items: center;
   margin-left: 20px;
`;

const DayStatistic = () => {
   const { id } = useParams();
   const day = useSelector((state) => state.weather.data?.list)[id];
   const city = useSelector((state) => state.weather.data?.city.name);
   const country = useSelector((state) => state.weather.data?.city.country);

   return (
      <Wrapper>
         <CityName>
            {city}, {country}
         </CityName>

         <Date>
            {getDate(day[0].dt).day}, {getDate(day[0].dt).date}
         </Date>

         <StatisticContainer>
            {day.map((hour) => {
               return (
                  <StatisticItem key={hour.dt}>
                     <TimeWrapper>{getDate(hour.dt).time}</TimeWrapper>

                     <span>{Math.round(hour.main.temp)} ℃</span>

                     {console.log(hour.weather[0].icon)}

                     <ItemWrapper>
                        <ImgWrapper
                           src={`http://openweathermap.org/img/wn/${hour.weather[0].icon}@2x.png`}
                        />
                        <div>{hour.weather[0].description}</div>
                     </ItemWrapper>

                     <ItemWrapper>
                        <WiCloudy size={50} /> Cloudiness {hour.clouds.all}%
                     </ItemWrapper>

                     <ItemWrapper>
                        <WiWindy size={50} /> Wind speed {hour.wind.speed} M/S
                     </ItemWrapper>

                     <ItemWrapper>
                        <WiRain size={50} /> Rain volume{' '}
                        {hour.rain?.['3h'] || 0} mm
                     </ItemWrapper>
                  </StatisticItem>
               );
            })}
         </StatisticContainer>
         <Chart data={day} />
      </Wrapper>
   );
};

export default DayStatistic;
