import styled from '@emotion/styled';
import { Button } from '@mui/material';
import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <StyledApp>
      <StyledHeader>
        <h1>Sahyog</h1>
        <nav>
          <Button variant="contained">Login</Button>
          <Button variant="contained"> Signup</Button>
        </nav>
      </StyledHeader>
      <section className="home">
        <h1>Connect. Learn. Grow.</h1>
        <img src="./../public/main.png" alt="" />
      </section>
      <div className="features">
        <h2>Features</h2>
        <div className="cardContainer">
          <div className="card">
            <h4>Browse Portfolios</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum iure similique, soluta consequatur nostrum asperiores a
              eos perferendis et pariatur quibusdam ipsum! Hic dolor optio
              deserunt, harum quam unde illo!
            </p>
          </div>
          <div className="card">
            <h4>A Call For Volunteers</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum iure similique, soluta consequatur nostrum asperiores a
              eos perferendis et pariatur quibusdam ipsum! Hic dolor optio
              deserunt, harum quam unde illo!
            </p>
          </div>
          <div className="card">
            <h4>Fast Bids</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum iure similique, soluta consequatur nostrum asperiores a
              eos perferendis et pariatur quibusdam ipsum! Hic dolor optio
              deserunt, harum quam unde illo!
            </p>
          </div>
        </div>
      </div>
    </StyledApp>
  );
}

const StyledApp = styled.div`
  --padding: 2rem;
  .home {
    width: 100vw;
    height: 90vh;
    background: #ddf4df;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    h1 {
      width: min-content;
      color: #6f5acd;
      font-size: 4rem;
      text-align: left;
    }
  }
  .features {
    width: 100vw;
    height: 90vh;
    background: #ddf4df;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
    color: #6f5acd;

    h2 {
      font-size: 3rem;
    }
    padding: 0 var(--padding);
    .cardContainer {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      width: 100%;
      .card {
        width: 25%;
        aspect-ratio: 1/1.2;
        border-radius: 10px;
        background: rgba(69, 139, 116, 0.4);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        color: #000;
        h4 {
          font-size: 1.5rem;
        }
        p {
          text-align: left;
        }
      }
      .card:nth-of-type(odd) {
        background: rgb(111, 90, 205, 0.4);
      }
    }
  }
`;

const StyledHeader = styled.header`
  width: 100%;
  height: 10vh;
  position: fixed;
  top: 0;
  left: 0;
  background: #458b74;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 var(--padding);
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;

    gap: var(--padding);
  }
`;
export default App;
