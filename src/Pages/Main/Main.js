import React from 'react';
import Day from '../../Components/Day';
import Wrapper from '../../Components/Wrapper';
import styled from 'styled-components';
import SearchBar from '../../Components/SearchBar';
import ClipLoader from 'react-spinners/ClipLoader';
import { useSelector } from 'react-redux';
import { getDate } from '../../helperFunctions';
import { calculateAvarageTemp } from '../../helperFunctions';
import CityName from '../../Components/CityName';

const DaysContainer = styled.div`
   display: flex;
   justify-content: space-around;
   padding-top: 30px;
`;

const LoaderWrapper = styled.div`
   display: flex;
   justify-content: center;
   padding-top: 30px;
`;

const Error = styled.p`
   text-align: center;
   margin-top: 10px;
`;

const Main = () => {
   const loading = useSelector((state) => state.weather.loading);
   const city = useSelector((state) => state.weather.data?.city.name);
   const country = useSelector((state) => state.weather.data?.city.country);
   const list = useSelector((state) => state.weather.data?.list);
   const error = useSelector((state) => state.weather.error);

   return (
      <Wrapper>
         <SearchBar />
         {error && <Error>{error}</Error>}
         {loading ? (
            <LoaderWrapper>
               <ClipLoader />
            </LoaderWrapper>
         ) : (
            city && (
               <>
                  <CityName>{`${city}, ${country}`}</CityName>
                  <DaysContainer>
                     {list.map((day, index) => {
                        return (
                           <Day
                              id={index}
                              day={getDate(day[0].dt).day}
                              date={`${getDate(day[0].dt).date}, ${
                                 getDate(day[0].dt).time
                              }`}
                              temp={calculateAvarageTemp(day)}
                              key={day[0].dt}
                              weather={day[0].weather[0].description}
                              weatherIcon={day[0].weather[0].icon.slice(0, -1)}
                           />
                        );
                     })}
                  </DaysContainer>
               </>
            )
         )}
      </Wrapper>
   );
};

export default Main;
