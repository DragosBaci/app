import {useState} from 'react';
import {FetchResponseGET} from '../Types/Types';

const useGetCustomFetch = <Data, Param>(
  url: RequestInfo,
): FetchResponseGET<Data, Param> => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [apiData, setApiData] = useState<Data | null>(null);
  const [serverError, setServerError] = useState(null);

  const fetcher = async (token?: Param) => {
    setIsLoading(true);
    try {
      const request = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          ...(token && {Authorization: `Token ${token}`}),
        },
      });
      const response = await request.json();
      if (response.errors) {
        setServerError(response);
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

export default useGetCustomFetch;
