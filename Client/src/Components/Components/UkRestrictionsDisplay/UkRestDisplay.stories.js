import Button from "./index";

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
  title: "Button",
  component: Button,
};

export const button = () => {
  return (
    <>
      <Button
        handleClick={() => {
          console.log("Clicked");
        } } 
        text="CLICK ME" 
        variant="button1"

      />
    </>
  );
};
