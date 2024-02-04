import css from "./ErrorMessage.module.css";

export const ErrorMessage = () => {
  return (
    <p className={css.error}>Ooops, something went wrong. Please, try again</p>
  );
};
