import {useState} from 'react';
import {FetchResponsePOST} from '../Types/Types';

const usePostCustomFetch = <Data extends any, Param extends any>(
  url: RequestInfo,
  method?: 'PATCH' | 'DELETE',
): FetchResponsePOST<Data, Param> => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [apiData, setApiData] = useState<any>(null);
  const [serverError, setServerError] = useState(null);

  const fetcher = async (param?: Param, token?: string, isForm?: boolean) => {
    setIsLoading(true);
    try {
      const request = await fetch(url, {
        method: method || 'POST',
        headers: {
          Accept: 'application/json',
          ...(!isForm && {'Content-Type': 'application/json'}),
          ...(token && {Authorization: `Bearer ${token}`}),
        },
        ...(param && {
          body: isForm ? (param as any) : JSON.stringify(param),
        }),
      });

      const response = await request.json();
      if (response) {
        setApiData(response);
      } else {
        setApiData(response);
      }

      setIsLoading(false);
    } catch (error: any) {
      setServerError(error);
      setIsLoading(false);
    }
  };

  return {
    response: apiData,
    error: serverError,
    loading: isLoading,
    fetcher,
  };
};

export default usePostCustomFetch;
