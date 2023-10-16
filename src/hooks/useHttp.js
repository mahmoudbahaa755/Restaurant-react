import {
    useCallback
    
} from "react";


function useHttp(){
    const fetchingData = useCallback(async (requestConfig, applyData) => {
        const connectFireBase = await fetch(requestConfig.url, {
          method: requestConfig.method ? requestConfig.method :"GET",
            headers: requestConfig.headers ? requestConfig.headers :{},
            body: requestConfig.body? JSON.stringify(requestConfig.body):null
        });
          if (!connectFireBase.ok) {
             throw new Error('Request failed');
         }
        const data = await connectFireBase.json();
        applyData(data);
        console.log('working');
    } ,[]);
   return {fetchingData};

}

export default useHttp;