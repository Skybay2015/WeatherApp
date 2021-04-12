export const calculateAvarageTemp = (list) => {
   const tempSum = list.reduce((acc, { main: { temp } }) => {
      return temp + acc;
   }, 0);

   return Math.round(tempSum / list.length);
};

export const getDate = (dt) => {
   const day = new Date(dt * 1000).toLocaleDateString('en-US', {
      weekday: 'long',
   });

   const date = new Date(dt * 1000).toLocaleDateString('en-US', {
      month: 'long',
      day: '2-digit',
   });

   const time = new Date(dt * 1000).toLocaleTimeString('en-US', {
      hour12: true,
      hour: 'numeric',
      minute: 'numeric',
   });

   return {
      day,
      date,
      time,
   };
};
