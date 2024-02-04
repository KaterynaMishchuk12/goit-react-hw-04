import { Bars } from "react-loader-spinner";

export const Loader = () => {
  return (
    <Bars
      height="80"
      width="80"
      color="rgb(68, 68, 240)"
      ariaLabel="bars-loading"
      wrapperStyle={{
        padding: "80px",
        display: "flex",
        justifyContent: "center",
      }}
      wrapperClass=""
      visible={true}
    />
  );
};
