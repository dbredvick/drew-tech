import React from "react";
import Headings from "@components/Headings";
import Section from "@components/Section";

import styled from "@emotion/styled";
import mediaqueries from "@styles/media";
/**
 * Paste in your SVG logo and return it from this component.
 * Make sure you have a height set for your logo.
 * It is recommended to keep the height within 25-35px.
 */
export default function Logo() {
  return (
    <>
      <svg
        width="35"
        height="35"
        viewBox="0 0 24 24"
        fill="#101116"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="24" height="24" fill="#101116" rx="0" ry="0"></rect>
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M2.64209 6.32812H14.4185C14.7495 6.32812 15.0181 6.59668 15.0181 6.92773V14.3965C15.0181 14.7275 14.7495 14.9961 14.4185 14.9961H2.64209C2.31104 14.9961 2.04248 14.7275 2.04248 14.3965V6.92773C2.04248 6.59668 2.31104 6.32812 2.64209 6.32812ZM3.2417 13.7969H13.8188V7.52734H3.2417V13.7969ZM5.0249 16.4727H12.0356C12.3667 16.4727 12.6353 16.7412 12.6353 17.0723C12.6353 17.4033 12.3667 17.6719 12.0356 17.6719H5.0249C4.69385 17.6719 4.42529 17.4033 4.42529 17.0723C4.42529 16.7412 4.69385 16.4727 5.0249 16.4727ZM21.3579 6.32812H16.7622C16.4312 6.32812 16.1626 6.59668 16.1626 6.92773V17.0723C16.1626 17.4033 16.4312 17.6719 16.7622 17.6719H21.3579C21.689 17.6719 21.9575 17.4033 21.9575 17.0723V6.92773C21.9575 6.59668 21.689 6.32812 21.3579 6.32812ZM20.7583 16.4727H17.3618V7.52734H20.7583V16.4727ZM18.5598 14.4526H19.5598V15.4526H18.5598V14.4526Z"
          fill="#ffffff"
        ></path>
      </svg>
      <Heading>drew.tech</Heading>
    </>
  );
}

const Heading = styled(Headings.h3)`
  margin-left: 10px;
`;
