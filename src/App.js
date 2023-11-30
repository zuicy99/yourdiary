import styled from "@emotion/styled";

function App() {
  const TopBar = styled.header``;
  return (
    <div className="layout">
      <div className="wrap">
        <TopBar>
          <button>
            <img src="images/tbt_list.svg" />
          </button>
        </TopBar>
      </div>
    </div>
  );
}

export default App;
