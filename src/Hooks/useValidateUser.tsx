import usePersistentState from "./usePersistentState";

const useValidateUser = () => {
  const { store: token } = usePersistentState("token");

  return {
    token,
  };
};

export default useValidateUser;
