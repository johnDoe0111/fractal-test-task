import { useLocation, useNavigate } from "react-router-dom";

export const useQueryParams = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const query = new URLSearchParams(location.search);

  const navigateWithParams = (
    to: string,
    name: string,
    val: string | string[]
  ) => {
    query.set(name, val as string);

    navigate(
      {
        pathname: to,
        search: query.toString(),
      },
      { state: location.state }
    );
  };

  const getQuery = (name: string) => {
    const value = query.get(name);

    return value;
  };

  const setQuery = (name: string, val: string | string[]) => {
    query.set(name, val as string);

    navigate(
      {
        pathname: location.pathname,
        search: query.toString(),
      },
      { state: location.state }
    );
  };
  const deleteQuery = (name: string) => {
    query.delete(name);

    navigate(
      {
        pathname: location.pathname,
        search: query.toString(),
      },
      { state: location.state }
    );
  };

  return { query, setQuery, deleteQuery, navigateWithParams, getQuery };
};
