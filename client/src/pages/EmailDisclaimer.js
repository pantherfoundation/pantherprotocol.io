import {useState} from 'react'
import Wrapper from './Styles/EmailDisclaimer'
import {NewsletterSec} from '../components/PageComponent/LP_Components'
import { Helmet } from 'react-helmet';
import OGImg from '../assets/Images/og_panther.png'
import { Navbar } from '../components/SharedComponent';
import { Link } from 'react-router-dom';
import {Footer} from '../components/SharedComponent';

const EmailDisclaimer = () => {
  const [update, setUpdate] = useState(true)

  const handleUpdate = (id)=>{
    if(id === true){
      setUpdate(false)
    }else{
      setUpdate(true)
    }
  }

  return (<>
    <Navbar updateValue={handleUpdate} />   
    <div className='relative' style={{background:"linear-gradient(45deg, rgb(20, 31, 61), rgb(2, 2, 22))"}}>
      <Wrapper>
        <Helmet>
          <title> Terms of use - Panther Protocol </title>
          <meta property="og:image" content={OGImg} />
          <meta property="og:title" content="Email Disclaimer - Panther Protocol"/>
          <meta property="og:description" content="Building on-chain privacy infrastructure for VASP-licensed entities"/>
        </Helmet>
        <div className='container'>
          <section id="email-disclaimer" className="email-disclaimer">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-10 col-xl-9 text-center">
                  <h3>Panther Protocol Website — Terms of Use</h3>
                  <h5>Date of last update: 6 March 2026</h5>

                  <div className='content-box'>
                    <h2>1. Operator and Scope</h2>

                    <p>
                      This website located at pantherprotocol.io and any associated subdomains (the “Site”) is operated by Panther DAO.
                    </p>

                    <p>
                      The Site provides information about Panther Protocol, a decentralised protocol deployed on public blockchain networks, and may provide access to software interfaces or decentralized applications (“dApps”) that enable users to interact directly with blockchain smart contracts.
                    </p>

                    <p>
                      Panther DAO publishes non-custodial, open-source interface software. Panther DAO does not custody assets, execute transactions on behalf of users, or provide financial services.
                    </p>

                    <p>
                      Panther DAO is not registered, licensed, or authorised by any financial regulatory authority in any jurisdiction to provide financial services, and nothing on the Site or any dApp should be understood as regulated financial services. The Site and any dApps have not been reviewed or approved by any regulatory authority.
                    </p>
                  </div>

                  <div className='content-box'>
                    <h2>2. Site, dApps, and Protocol</h2>

                    <p>For the purposes of these Terms:</p>

                    <p>
                      “Protocol” means the Panther Protocol smart contracts deployed on public blockchain networks.
                    </p>

                    <p>
                      “dApp” means any user interface, web application, or software made available through the Site that enables users to interact with the Protocol.
                    </p>

                    <p>
                      The Protocol operates autonomously on blockchain infrastructure. Panther DAO does not control user transactions or the operation of blockchain networks.
                    </p>

                    <p>
                      Where a dApp is provided, it enables users to interact directly with smart contracts using their own cryptographic wallets. All transactions are initiated and signed by users.
                    </p>

                    <p>
                      The Site may provide links or access to dApps hosted in decentralised or third-party environments, including IPFS.
                    </p>

                    <p>
                      Additional terms, notices, or disclaimers may apply to specific dApps. By using any dApp, you agree to the applicable dApp disclaimer.
                    </p>
                  </div>

                  <div className='content-box'>
                    <h2>3. No Custody, No Relationship, No Advice</h2>

                    <p>
                      The Site and any dApps are provided for informational and technical access purposes only.
                    </p>

                    <p>
                      Your use of the Site or any dApp does not create any fiduciary, agency, partnership, advisory, or custodial relationship with Panther DAO or any contributors.
                    </p>

                    <p>
                      Nothing on the Site constitutes financial, investment, legal, tax, or other professional advice.
                    </p>
                  </div>

                  <div className='content-box'>
                    <h2>4. User Responsibility and Risks</h2>

                    <p>
                      Blockchain technologies and smart contracts involve significant risks, including the potential loss of digital assets.
                    </p>

                    <p>You are solely responsible for:</p>

                    <ul>
                      <li>maintaining the security of your wallet and private keys</li>
                      <li>verifying transaction details before signing</li>
                      <li>compliance with applicable laws and regulations</li>
                    </ul>

                    <p>
                      Panther DAO has no ability to access, reverse, or recover transactions.
                    </p>

                    <p>
                      The Protocol and dApps may be subject to errors, vulnerabilities, or disruptions beyond the control of Panther DAO.
                    </p>
                  </div>

                  <div className='content-box'>
                    <h2>5. Third-Party Services and Protocols</h2>

                    <p>
                      The Site or dApps may provide access to third-party protocols, integrations, or services.
                    </p>

                    <p>
                      These third parties operate independently and are not controlled by Panther DAO.
                    </p>

                    <p>
                      Panther DAO is not responsible for the performance, security, availability, or outcomes of any third-party systems.
                    </p>
                  </div>

                  <div className='content-box'>
                    <h2>6. Acceptable Use</h2>

                    <p>
                      You agree not to misuse the Site or dApps or attempt to interfere with their operation, security, or availability.
                    </p>

                    <p>
                      You must not attempt to gain unauthorised access to any systems, introduce malicious code, or engage in unlawful activity through the Site.
                    </p>
                  </div>

                  <div className='content-box'>
                    <h2>7. Intellectual Property</h2>

                    <p>
                      Unless otherwise indicated, the Site content and software provided through the Site are owned by or licensed to Panther DAO and are protected by applicable intellectual property laws.
                    </p>

                    <p>
                      Open-source components may be subject to separate licences.
                    </p>
                  </div>

                  <div className='content-box'>
                    <h2>8. Disclaimers</h2>

                    <p>
                      The Site and any dApps are provided on an “as is” and “as available” basis without warranties of any kind, whether express or implied.
                    </p>

                    <p>
                      Panther DAO does not guarantee the accuracy, completeness, or availability of the Site or any dApps.
                    </p>

                    <p>
                      To the maximum extent permitted by law, Panther DAO disclaims all warranties, including warranties of merchantability, fitness for a particular purpose, and non-infringement.
                    </p>
                  </div>

                  <div className='content-box'>
                    <h2>9. Limitation of Liability</h2>

                    <p>
                      To the maximum extent permitted by applicable law, Panther DAO and its contributors shall not be liable for any loss, damage, or claim arising from or related to:
                    </p>

                    <ul>
                      <li>use of the Site or any dApp</li>
                      <li>interaction with the Protocol or blockchain networks</li>
                      <li>third-party services or integrations</li>
                      <li>loss of digital assets or transaction errors</li>
                    </ul>
                  </div>

                  <div className='content-box'>
                    <h2>10. Modifications</h2>

                    <p>
                      Panther DAO may modify or discontinue the Site or any dApp at any time without notice.
                    </p>

                    <p>
                      Panther DAO may update these Terms from time to time by publishing a revised version on the Site.
                    </p>
                  </div>

                  <div className='content-box'>
                    <h2>11. Governing Law</h2>

                    <p>
                      These Terms shall be governed by applicable law as determined under general principles of private international law.
                    </p>
                  </div>

                  <div className='content-box'>
                    <h2>12. Contact</h2>

                    <p>
                      For enquiries relating to the Site, please contact: <a href="mailto:pantherdao@protonmail.com">pantherdao@protonmail.com</a>
                    </p>
                  </div>

                </div>
              </div>
            </div>
          </section>
        </div>
      </Wrapper>
      <Footer />
    </div>
  </>)
}

export default EmailDisclaimer
