import { useEffect } from 'react';

const useTitle = (title) => {
   useEffect(() =>{
    document.title = `Saiful Islam  - ${title}`
   },[title])
};

export default useTitle;