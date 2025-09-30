import styled from "styled-components";
import backgroundImg from "../../assets/images/2151470664.jpg"; // <- import the image

export const DownloadsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-image: url(${backgroundImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: white;
`;

export const DownloadsHero = styled.header`
  flex: 1;
  display: flex;
  justify-content: center;
  padding: 2rem;
  overflow: hidden;

  @media (max-width: 432px) {
    padding: 1rem;
  }
`;

export const DownloadsBox = styled.div`
  background: rgba(0, 0, 0, 0.7);
  padding: 2rem 3rem;
  border-radius: 10px;
  max-width: 600px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-height: 75vh;
  overflow-y: auto;
  box-sizing: border-box;

  h2 {
    margin-bottom: 2rem;
    font-size: 2rem;
    color: white;
  }

  p {
    margin-top: 0.5rem;
    margin-bottom: 1.5rem;
    color: #ccc;
  }
`;

export const DownloadsMirrorButton = styled.a`
  text-decoration: none;
  width: 100%;
  margin: 1rem 0;

  button {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    padding: 0.75rem 3rem;
    border: none;
    border-radius: 5px;
    background-color: #4caf50;
    color: white;
    font-weight: bold;
    cursor: pointer;
    transition: 0.3s, transform 0.2s;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0px 6px 14px rgba(0, 0, 0, 0.6);
    }
  }
`;

export const DownloadsNote = styled.p`
  font-size: 0.85rem;
  color: #ccc;
  margin-top: 1rem;

  strong {
    color: #fff;
  }
`;
