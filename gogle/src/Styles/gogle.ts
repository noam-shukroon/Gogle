import styled from "styled-components";

  export const Superdiv = styled.div`
    display: flex;
    height: 100vh;
    width: 100vw;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  `
  export const Topbar = styled.header`
      display: flex;
      height: 5%;
      width: 100%;
      top:0;
      z-index: 1000;
      background-color: #1a73e8;

      justify-content: flex-end;
      align-items: center;
      
      gap: 1rem;
      `

  export const BarLink = styled.h1`
    color: #ffffff;
    font-size: 0.8rem;
    
    &:hover {
    text-decoration: underline;
    cursor: pointer;
    }
  `

  export const AppsDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    aspect-ratio: 1/1;
    border-radius: 50%;
    transition: background-color 0.2s ease-in-out;
    aria-label: "Google Apps";

    &:hover {
      cursor: pointer;
      background-color: rgba(255, 255, 255, 0.2);
    }
  `
   export const Apps = styled.img`
    aspect-ratio: 1/1;
    height: 70%;
  `

  export const UserButton = styled.img`
    aspect-ratio: 1/1;
    height: 2rem;
    border-radius: 50%;

    &:hover {
      cursor: pointer;
    }
    `

    export const SearchDiv = styled.div`
        height: 90%;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 2rem;
        
    `


    export const BottomBar = styled.footer`
        display: flex;
        bottom: 0;
        height: 5%;
        width: 100%;
        background-color: #e81a1a;
        justify-content: space-around;
        align-items: center;
    `