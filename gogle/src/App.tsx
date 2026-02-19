import { Flex } from '@mantine/core'
import './App.css'  
import { Superdiv,Topbar,BottomBar,BarLink, AppsDiv, Apps, UserButton, SearchDiv } from './Styles/gogle.ts'

function gogle() {
    
  return (
    <Superdiv> 

    <Topbar>  
      <BarLink>Gmail</BarLink>
      <BarLink>Images</BarLink>

      <AppsDiv>
        <Apps src="apps.svg" alt="Apps" />
      </AppsDiv>

      <UserButton src="Trollface.png" alt="User" />
    </Topbar>

    <SearchDiv>
        <img src="Google_logo.svg" alt="Google Logo" style={{ width: '500px', height: '200px', display: 'flex'}} />
        <input type="text" />
    </SearchDiv>

    <BottomBar>
      <BarLink>About</BarLink>
      <BarLink>Advertising</BarLink>
      <BarLink>Business</BarLink>
      <BarLink>How Search works</BarLink>
      <BarLink>Privacy </BarLink>
      <BarLink>Terms</BarLink>
      <BarLink>Settings</BarLink>
    </BottomBar>


    </Superdiv>
  )
}

export default gogle
