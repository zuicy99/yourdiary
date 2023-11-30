import styled from "@emotion/styled";
import React from "react";

const Footer = () => {
  const BotBal = styled.footer`
    display: flex;
    width: 100%;
    height: 64px;
    padding: 4px 10px;

    align-items: center;
    gap: 17.25rem;
    flex-shrink: 0;

    background: #211f26;

    button {
      display: flex;
      width: 3rem;
      height: 3rem;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 0.625rem;
    }
  `;
  return (
    <BotBal>
      <button>
        <img src="images/fbl.svg" />
      </button>
      <button>
        <img src="images/fbr.svg" />
      </button>
    </BotBal>
  );
};

export default Footer;
