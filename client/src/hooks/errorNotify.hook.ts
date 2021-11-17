import { useState } from "react";

const useErrorNotify = (): [string | undefined, (message: string) => void] => {
  const [error, setError] = useState<string | undefined>();
  const [toID, setToID] = useState<number | undefined>();
  const updateError = (message: string) => {
    setError(message);
    if (toID) clearInterval(toID);
    const timeout = setTimeout(() => setError(undefined), 2500);
    setToID(timeout);
  };
  return [error, updateError];
};

export default useErrorNotify;
