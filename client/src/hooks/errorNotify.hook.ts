import { useState } from "react";
export interface NotifyError {
  error: number;
  message: string;
}
type ErrorContent = NotifyError | undefined;
type UpdateError = (error: NotifyError) => void;
type ErrorNotifyHook = () => [ErrorContent, UpdateError];
const useErrorNotify: ErrorNotifyHook = () => {
  const [error, setError] = useState<ErrorContent>();
  const [toID, setToID] = useState<number | undefined>();
  const updateError: UpdateError = (error) => {
    setError(error);
    if (toID) clearInterval(toID);
    const timeout = setTimeout(() => setError(undefined), 2500);
    setToID(timeout);
  };
  return [error, updateError];
};

export default useErrorNotify;
