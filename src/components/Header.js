import styled from "@emotion/styled";
import React from "react";

const Header = () => {
  const TopBar = styled.header`
    display: flex;
    width: 100%;
    height: 64px;
    padding: 8px 4px;
    align-items: center;
    gap: 4px;
    flex-shrink: 0;
    background: #141218;
    justify-content: space-between;

    h2 {
      font-weight: 400;
      color: #fff;
    }

    button {
      display: flex;
      width: 24px;
      height: 24px;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 10px;
      flex-shrink: 0;

      border: none;
      background-color: transparent;
    }
  `;
  return (
    <TopBar>
      <button>
        <img src="images/tbt_list.svg" />
      </button>
      <h2>헤더</h2>
      <button>
        <img src="images/tbt_human.svg" />
      </button>
    </TopBar>
  );
};

export default Header;
