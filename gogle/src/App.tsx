import styled from 'styled-components'
import './App.css'

function gogle() {

  const Superdiv = styled.div`
    display: flex;
    height: 100vh;
    width: 100vw;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  `
  const Topbar = styled.div`
      display: flex;
      height: 13vh;
      width: 100%;
      top:0;
      z-index: 1000;
      background-color: #1a73e8;

      justify-content: flex-end;
      align-items: center;
      
      gap: 1rem;
      `

  const TopBarLink = styled.h1`
    color: #ffffff;
    font-size: 0.8rem;
    text-align: center;

    &:hover {
    text-decoration: underline;
    cursor: pointer;
    }
  `
    
  return (
    <Superdiv> 
    <Topbar>  
      <TopBarLink>Gmail</TopBarLink>
      <TopBarLink>Images</TopBarLink>
    </Topbar>
    </Superdiv>
  )
}

export default gogle
