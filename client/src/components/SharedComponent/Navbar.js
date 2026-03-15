import {useEffect, useState} from 'react'
import NavWrapper from './Styles/NavbarStyles'
import pantherLogo from '../../assets/Images/PantherLogo.svg'
import { AppstoreOutlined } from '@ant-design/icons';
import github from '../../assets/Images/githubw.svg'
import telegram from '../../assets/Images/telegramw.svg'
import discord from '../../assets/Images/discordw.svg'
import linkedin from '../../assets/Images/linkedInw.svg'
import {FiMenu} from 'react-icons/fi'
import {RxCross1} from 'react-icons/rx'
import { Dropdown } from 'antd';
import {BiLinkExternal} from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../routes/constRoutes'

// ArrowDown
import { Menu } from 'antd';




const Navbar = ({updateValue}) => {

  function getItem(label, key, icon, children, type) {
    return {
      key,
      children,
      label
    };
  }

  const lists2 = [

    getItem(<div onClick={()=>setHovered(false)} className='ctr_submenu'>
      <span className='titleOfsubMenu'>Audits</span>
      <svg className='iconOfsubMenu' width="12" height="12" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.23484 1.80917L8.4165 6.95773L2.23484 12.1063" stroke="white" stroke-width="2.48344" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>

      </div>, 'sub2', <AppstoreOutlined />, [
    
    getItem(<a onClick={()=>setHovered(false)} className='dropdown-link' target="_blank" rel="noopener noreferrer" href='/resources/REP-Panther-ZKP-Vesting.pdf'>
      <span>Certik Audit - ZKP Vesting</span> 
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3.27096 3.5859L9.021 3.5859L9.021 9.33594" stroke="#C0C1C2" strokeWidth="2.03295" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M1.06037 9.85483C0.669831 10.2453 0.669805 10.8785 1.06031 11.269C1.45082 11.6596 2.08399 11.6596 2.47453 11.2691L1.06037 9.85483ZM7.99594 2.91982L1.06037 9.85483L2.47453 11.2691L9.4101 4.33409L7.99594 2.91982Z" fill="#C0C1C2"/>
      </svg>
    </a>, '5'),
    
    getItem(  <a onClick={()=>setHovered(false)} className='dropdown-link' target="_blank" rel="noopener noreferrer" href='/resources/REP-Panther-ZKP-Token.pdf'>
      <span>Certik Audit - ZKP Token</span>
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3.27096 3.5859L9.021 3.5859L9.021 9.33594" stroke="#C0C1C2" strokeWidth="2.03295" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M1.06037 9.85483C0.669831 10.2453 0.669805 10.8785 1.06031 11.269C1.45082 11.6596 2.08399 11.6596 2.47453 11.2691L1.06037 9.85483ZM7.99594 2.91982L1.06037 9.85483L2.47453 11.2691L9.4101 4.33409L7.99594 2.91982Z" fill="#C0C1C2"/>
      </svg>
    </a>, '6'),
    
    getItem(  <a onClick={()=>setHovered(false)} className='dropdown-link' target="_blank" rel="noopener noreferrer" href='/resources/Panther_v0.5_Audit.pdf'>
       <span>Audit Boutique - Staking Contracts</span>
       <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
           <path d="M3.27096 3.5859L9.021 3.5859L9.021 9.33594" stroke="#C0C1C2" strokeWidth="2.03295" strokeLinecap="round" strokeLinejoin="round"/>
           <path d="M1.06037 9.85483C0.669831 10.2453 0.669805 10.8785 1.06031 11.269C1.45082 11.6596 2.08399 11.6596 2.47453 11.2691L1.06037 9.85483ZM7.99594 2.91982L1.06037 9.85483L2.47453 11.2691L9.4101 4.33409L7.99594 2.91982Z" fill="#C0C1C2"/>
       </svg>
     </a>, '7'),
    
    ]),

  ];


  const lists = [

    {
      key: '6',
      label: (
        <Menu
        mode="vertical"
        popupClassName="antd-popup-sub"
        items={lists2}
        />

      ),
    },   

    {
      key: '2',
      label: (
        <a  onClick={()=>setHovered(false)}className='dropdown-link' target="_blank" rel="noopener noreferrer" href="https://docs.pantherprotocol.io">
          <span>Docs & FAQS</span> 
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.27096 3.5859L9.021 3.5859L9.021 9.33594" stroke="#C0C1C2" strokeWidth="2.03295" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M1.06037 9.85483C0.669831 10.2453 0.669805 10.8785 1.06031 11.269C1.45082 11.6596 2.08399 11.6596 2.47453 11.2691L1.06037 9.85483ZM7.99594 2.91982L1.06037 9.85483L2.47453 11.2691L9.4101 4.33409L7.99594 2.91982Z" fill="#C0C1C2"/>
          </svg>
        </a>
      )
    }
    
  ];

   const items = [ // eslint-disable-line no-unused-vars
    {
      key: '1',
      label: (
        <a onClick={()=>setHovered2(false)} className='dropdown-link' target="_blank" rel="noopener noreferrer" href="https://forum.pantherprotocol.io/">
           <span>Forum</span> 
           <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.27096 3.5859L9.021 3.5859L9.021 9.33594" stroke="#C0C1C2" strokeWidth="2.03295" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M1.06037 9.85483C0.669831 10.2453 0.669805 10.8785 1.06031 11.269C1.45082 11.6596 2.08399 11.6596 2.47453 11.2691L1.06037 9.85483ZM7.99594 2.91982L1.06037 9.85483L2.47453 11.2691L9.4101 4.33409L7.99594 2.91982Z" fill="#C0C1C2"/>
          </svg>
        </a>
      ),
    },

    {
      key: '2',
      label: (
        <a onClick={()=>setHovered2(false)} className='dropdown-link' target="_blank" rel="noopener noreferrer" href="https://snapshot.org/#/pantherprotocol.eth">
          <span>Snapshot</span> 
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.27096 3.5859L9.021 3.5859L9.021 9.33594" stroke="#C0C1C2" strokeWidth="2.03295" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M1.06037 9.85483C0.669831 10.2453 0.669805 10.8785 1.06031 11.269C1.45082 11.6596 2.08399 11.6596 2.47453 11.2691L1.06037 9.85483ZM7.99594 2.91982L1.06037 9.85483L2.47453 11.2691L9.4101 4.33409L7.99594 2.91982Z" fill="#C0C1C2"/>
          </svg>
        </a>
      )
    }
    
  ];

  const [dropDown, setDropDown] = useState(0)
  const [hovered, setHovered] = useState(false)
  const [, setHovered2] = useState(false) // eslint-disable-line no-unused-vars
  const [isOpen, setIsOpen] = useState(false)

  useEffect(()=>{
    if(window.innerWidth < 900){
      if(isOpen === true){
         document.body.style.overflowY= 'hidden'
      } else {
        document.body.style.overflowY= 'scroll'
      }
    }

  },[isOpen])

  const handleClick=()=>{
    setDropDown(0)
    setIsOpen(!isOpen)
    if(isOpen === true){
      updateValue(false)
    } else{
      updateValue(true)
    }

    return false;
  }


  return (
    <>
  
    <NavWrapper>
      
       <div className={isOpen? 'main-nav-resp main-navbar' : 'main-navbar'}>
        
        <div className='wideContainer'>
          <div className='nav-container'>
           <Link to={ROUTES.INDEX}><img  src={pantherLogo} alt='Panther Protocol Website' /></Link> 
           <ul className='hide-links'>
            <li>
              <Dropdown
                // trigger={['click']}
                menu={{
                  items:lists
                }}
                onOpenChange = {()=>setHovered(!hovered)}>
              <a href="#resources" className={ hovered ? ' hovered dropdown-link': 'dropdown-link'} onClick={(e) => e.preventDefault()}><span>Resources</span> 
                <svg width="17" height="10" viewBox="0 0 17 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.0507 1.24024L5.98484 5.30613L1.91895 1.24023" stroke="white" strokeWidth="2.03295" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              </Dropdown>
            </li>

          
                 
          <li><a style={{width:"auto"}} href="https://blog.pantherprotocol.io/" rel="nofollow noopener noreferrer" className=' hovered2 dropdown-link' target="_blank"><span>Blog</span></a></li>
           </ul>
          
          
          <div className='social-media-links hide-links'>
            <a href='https://discord.com/invite/WZuRnMCZ4c' target="_blank" rel="noopener noreferrer"><img height="27px" width="27px"   src={discord} alt='' /></a>
            <a href='https://t.me/joinchat/GJ64F-nRiIF86Cxn' target="_blank" rel="noopener noreferrer"><img height="27px" width="27px"  src={telegram} alt='' /></a>
            <a href='https://www.linkedin.com/company/zkpanther/' target="_blank" rel="noopener noreferrer" ><img height="27px" width="27px"  src={linkedin} alt='' /></a>
            <a style={{marginRight:'0'}} href='https://github.com/pantherprotocol/panther-core' target="_blank" rel="noopener noreferrer" ><img height="27px" width="27px"  src={github} alt='' /></a>
            </div>
       

              <div className='resp-nav'>
                <span onClick={handleClick}>{isOpen ? <RxCross1 /> : <FiMenu />} </span>
              </div>
          
          </div>

          <div className='resp-navbar'>
           
            <div className={isOpen ? 'resp-links' :'resp-hide'}>
              <div className='wideContainer respWide'>

              
              <ul>
  
                <li onClick={
                  ()=>{
                    if(dropDown === 1){
                      setDropDown(0)
                    } else {
                      setDropDown(1)
                    }
                    }
                  }><span>Resources</span> 
                   <svg width="17" height="10" viewBox="0 0 17 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.0507 1.24024L5.98484 5.30613L1.91895 1.24023" stroke="white" strokeWidth="2.03295" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              </li>
                <div className={dropDown === 1 ? 'resp-dropdown active' : 'resp-dropdown'}>
                 <a onClick={()=>setIsOpen(false)}  target='_blank' rel="noopener noreferrer" href="https://docs.pantherprotocol.io"><li><span>Docs & FAQS</span> <BiLinkExternal /></li></a>
                  <Link onClick={()=>setIsOpen(false)} to='/resources/REP-Panther-ZKP-Vesting.pdf' target='_blank'><li><span>Certik Audit - ZKP Vesting</span> <BiLinkExternal /></li></Link>
                  <a onClick={()=>setIsOpen(false)}  target='_blank' rel="noopener noreferrer" href='/resources/REP-Panther-ZKP-Token.pdf'><li><span>Certik Audit - ZKP Token</span> <BiLinkExternal /></li></a>
                  
                  
                </div>
            

                <a href="https://blog.pantherprotocol.io/" rel="nofollow noopener noreferrer" target="_blank"><li><span>Blog</span></li></a>
              </ul>


             
              <div className={isOpen?'resp-button' : 'resp-hide'}>
                <div className='social-media-links'>
                  <a href='https://discord.com/invite/WZuRnMCZ4c' target="_blank" rel="noopener noreferrer"><img height="27px" width="27px"   src={discord} alt='Panther Protocol Server on Discord' /></a>
                  <a href='https://t.me/joinchat/GJ64F-nRiIF86Cxn' target="_blank" rel="noopener noreferrer"><img height="27px" width="27px"  src={telegram} alt='Panther Protocol on Telegram' /></a>
                  <a href='https://www.linkedin.com/company/zkpanther/' target="_blank" rel="noopener noreferrer" ><img height="27px" width="27px"  src={linkedin} alt='Panther Protocol on LinkedIn' /></a>
                  <a href='https://github.com/pantherprotocol/panther-core' target="_blank" rel="noopener noreferrer" ><img height="27px" width="27px"  src={github} alt='Panther Protocol on GitHub' /></a>
                </div> 
              </div>
              
              </div>
            </div>

          </div>

        

        
        </div>
       </div >

  
    </NavWrapper>
    </>
  )
}

export default Navbar