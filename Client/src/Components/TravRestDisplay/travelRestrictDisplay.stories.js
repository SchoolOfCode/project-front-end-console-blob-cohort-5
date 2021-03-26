import React from 'react';
import TravelRestrictionsDisplay from "./index";

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
  title: "TravelRestrictionsDisplay",
  component: TravelRestrictionsDisplay,
  argTypes: { data, color, size, imgSize }

};

const Template = (args) => <TravelRestrictionsDisplay {...args} />;

export const button = () => {
  return (
    <>
      <Button
        handleClick={() => {
          console.log("Clicked");
        }}
        text="CLICK ME"
        variant="button1"

      />
    </>
  );
};
