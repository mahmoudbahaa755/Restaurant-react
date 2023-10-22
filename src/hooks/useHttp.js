import {
    useCallback
    
} from "react";


export default function useHttp(){
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

    } ,[]);
   return {fetchingData};

}
