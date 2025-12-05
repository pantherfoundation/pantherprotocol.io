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
        <section id="email-disclaimer" class="email-disclaimer">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-md-10 col-xl-9 text-center">
                        <h3>Terms of use</h3>
                        <h5>Date of last update: 9 May 2023</h5>

<div  className='content-box'>
                        <h2>
                          1. Introduction
                        </h2>

                        <p>Please read these <Link to='terms-of-use'>Terms of use</Link>  and our <Link to='privacy-policy'>Privacy Policy</Link> carefully, because they govern your use of the website located at pantherprotocol.io and offered by Panther Ventures Limited (together with its affiliates, "Panther", "we," "us," or "our"). All references to "you" or "your" mean the person or organisation who accesses or uses the Site and Services (as defined below) in any manner.
                        </p>

                        <p>pantherprotocol.io provides information about Panther Protocol: a decentralised, non-custodial, community governed protocol deployed on multiple blockchain networks and systems to enable interoperable privacy in decentralised finance applications <strong>"Panther Protocol" </strong>or <strong>"Protocol"</strong>. </p>

                        <p>
                        pantherprotocol.io is not one of the access points to Panther Protocol, and Panther does not oversee or control your interaction with the Protocol, nor own or control any blockchain with which the Protocol interacts. For these reasons, references to Services in these Terms do not include Panther Protocol.
                        </p>

                        <p>
                        YOUR USE OF ANY BLOCKCHAIN AND INTERACTION WITH THE PROTOCOL IS COMPLETELY AT YOUR OWN RISK. YOU SHOULD NOT ENGAGE IN BLOCKCHAIN-BASED TRANSACTIONS UNLESS IT IS SUITABLE GIVEN YOUR CIRCUMSTANCES AND FINANCIAL RESOURCES.
                        </p>

                        <p>
                        BY ACCESSING OR USING OUR SERVICES, WHICH INCLUDE PANTHERPROTOCOL.IO AND ANY OTHER SITE, WEB APPLICATION OR MOBILE APPLICATION OPERATED BY PANTHER (COLLECTIVELY WITH ANY MATERIALS AND SERVICES AVAILABLE THEREIN, "THE SITE") AND OTHER SERVICES THAT LINK TO THESE TERMS, AS WELL AS ANY MATERIAL STORED, RETRIEVED OR APPEARING THEREON (COLLECTIVELY AND TOGETHER WITH THE SITE, "THE SERVICES"), YOU ARE ENTERING INTO A BINDING AGREEMENT WITH US THAT INCLUDES THESE TERMS, THE PRIVACY POLICY AND OTHER POLICIES REFERRED TO HEREIN (COLLECTIVELY, "THE AGREEMENT").

                        </p>

                        <p>
                        THESE TERMS REQUIRE THE USE OF BINDING ARBITRATION ON AN INDIVIDUAL BASIS TO RESOLVE ALL DISPUTES ARISING OUT OF, RELATING TO, OR CONNECTED WITH THEM, RATHER THAN JURY TRIALS OR CLASS ACTIONS.

                        </p>

                        <p>
                        If you don't agree with these Terms, you may not use the Services and should not visit the Site or otherwise engage with the Services.

                        </p>

                        </div>






<div className='content-box'>
                        <h2>
                          2. Authorised use
                        </h2>

                        <p>By using the Services, you represent and warrant that you meet the eligibility requirements below. If you do not meet the requirements, you must not access or use the Services. </p>

                        <p>You must only use the Services for their stated or intended purpose and in accordance with this Agreement and all applicable laws and regulations. If you access or use the Services in an individual capacity you must be at least 18 years of age or the age of majority in your place of residence, and be able to enter into the Agreement. If you access or use the Services on behalf of an organisation you must have the authority to enter into this Agreement on behalf of that organisation and to bind that organisation to such terms (and references to “you” in this Agreement refer to that organisation). </p>

                        <p>
                        The Services are not offered to, or intended to be used by, any person or entity that is the subject of sanctions administered or enforced by any country or government or otherwise designated on any list of prohibited or restricted parties (including but not limited to the lists maintained by the United Nations Security Council, the U.S. Department of the Treasury’s Office of Foreign Assets Control (“OFAC”), the European Union or its Member States, Her Majesty’s Treasury, or any other legal or regulatory authority in any applicable jurisdiction), or organised or resident in a country or territory that is the subject of country-wide or territory-wide sanctions. You represent and warrant that neither you nor any party having a direct or indirect beneficial interest in you or on whose behalf you are acting as agent or nominee is such a person or entity. If this is not accurate or you do not agree, then you must immediately cease accessing the Services.

                        </p>

                  

                        </div>

                        <div className='content-box'>
                        <h2>
                          3. Our right of modification and suspension
                        </h2>

                        <p>We may update the Agreement and any part of the Terms at any time, for any reason, at our sole discretion. If we do, we will post the updated Terms on the Site. You should review the Terms from time to time to ensure that you understand the terms and conditions that apply to you when you access or use the Services. You will know if this Agreement has changed since the last time you reviewed it by checking the "Date of Last Update" section above. If you continue to use the Services after we have posted updated Terms it means that you accept and agree to the changes. If you don’t agree to be bound by the changes, you may not use the Services anymore. </p>

                        <p>WE RESERVE THE RIGHT, WITHOUT NOTICE AND FOR ANY REASON, TO REMOVE ANY MATERIALS FROM THE SITE, CORRECT ANY ERRORS, INACCURACIES, OR OMISSIONS IN ANY MATERIALS ON THE SITE, CHANGE OR UPDATE ANY MATERIALS ON THE SITE. WE MAY DENY ACCESS TO, OR SUSPEND OR TERMINATE USE OF, ALL OR ANY PART OF THE SITE AND SERVICES FOR ANY USER(S) AT ANY TIME AND WITHOUT PRIOR NOTICE, AND WE RESERVE THE RIGHT AT ANY TIME AND FROM TIME TO TIME TO MODIFY OR DISCONTINUE, TEMPORARILY OR PERMANENTLY, THE SITE OR SERVICES (OR ANY PART THEREOF) WITH OR WITHOUT NOTICE, UNLESS OTHERWISE INDICATED IN AN EXPRESS AGREEMENT BETWEEN YOU AND US. WE ARE NOT LIABLE TO YOU OR TO ANY THIRD PARTY FOR ANY MODIFICATION, SUSPENSION OR DISCONTINUANCE OF THE SITE OR SERVICES. </p>
                        </div>


                        <div className='content-box'>
                        <h2>
                          4. Services
                        </h2>

                        <p>We are software developers. We do not provide any virtual asset services to users, or deliver, hold, or receive payment for, virtual assets. We do not receive any fees for the Services or any Protocol transactions. All community contributors to the ecosystem around Panther Protocol are independent of us, and we will not have and do not assume any liability or responsibility for their actions or omissions.</p>

                        <p>pantherprotocol.io provides information about the fundamentals of Panther Protocol and the wider Panther ecosystem and community. All information provided in connection with your access and use of the Services is for informational purposes only. You should not take, or refrain from taking, any action based on any information contained on the Site or any other information that we make available at any time, including blog posts, data, articles, links to third-party content, Discord or Discourse content, tweets and videos. </p>

                        <p>
                        The information and any materials contained in the Services should not be considered as an offer or solicitation to buy or sell financial instruments, provide financial advice, create a trading platform, facilitate or take deposits or provide any other financial services of any kind in any jurisdiction.
                        </p>

                        <p>
                        The information contained on or in the Services is not intended to provide and should not be construed as advice of any kind. It does not take into account your objectives, financial situation or needs. You shall not use the Services as a substitute for independent investigations and competent financial judgement and you should obtain appropriate professional advice before you make any financial, legal, technical, or other decisions involving the Services. 

                        </p>

                        <p>
                        Panther Protocol is deployed on multiple blockchain-based networks. We do not own or control any blockchain, and are not responsible for the operation of such networks. The software underlying blockchain networks on which Panther Protocol is deployed, including, for example, the Ethereum and Polygon blockchains, is open source, which means that anyone can use, utilise, and build on top of it. By using the Services, you acknowledge and agree that (i) we are not responsible for the operation of the blockchain-based software and networks underlying Panther Protocol, (ii) there exists no guarantee of the functionality, security, or availability of that software and those networks, and (iii) the underlying blockchain-based networks are subject to sudden changes in operating rules, such as those commonly referred to as "forks".

                        </p>

                        <p>
                        It is important to understand that neither we nor any affiliated entity is a party to any transaction on the blockchain networks underlying Panther Protocol; we do not have possession, custody or control over any virtual assets appearing on the Panther Protocol; and we do not have possession, custody, or control over any user’s funds. Further, we do not store, send, or receive any virtual assets. You understand that when you interact with any Panther Protocol smart contracts, you retain control over your virtual assets at all times. Due to the non-custodial and decentralised nature of the technology, Panther is not an intermediary, agent, advisor or custodian, and Panther does not have a fiduciary relationship or obligation to you regarding any other decisions or activities that you affect when using the Services or Panther Protocol. For avoidance of doubt, Panther is not responsible for, and will not offer for sale, any securities, commodities, or other assets relating to you in performing the Services and Panther and its affiliates are not providing services relating to or subject to regulation or registration as virtual asset service provider, broker dealer, commodities dealer, a money service business, a money transmitter, or otherwise. You are solely responsible for compliance with any laws and regulations applicable to your use of the Services. You acknowledge that we do not have any information regarding any users, users’ identities, or services beyond what is available or obtainable publicly via the blockchain. We are not responsible for any activities you engage in when using the Services or Panther Protocol, and you should understand the risks associated with virtual assets, blockchain technology generally, the Protocol and our Services.

                        </p>
                        </div>


                        <div className='content-box'>
                        <h2>
                          5. Links from the Site
                        </h2>

                        <p>The Services provide, or third parties may provide, links to other websites, user-interfaces, applications, or resources as a convenience only. You acknowledge and agree that we are not responsible for the availability of such external websites, user-interfaces, applications or resources, and do not endorse and are not responsible or liable for any content, advertising, products, or other materials on or available from such websites or resources. You further acknowledge and agree that we will not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods, or services available on or through any such website or resource. The use and access of any third-party products or services, including through the Site and Services, is at your own risk.</p>

                        <p>The user interface available at pantherprotocol.eth.limo is hosted on a third-party service -- IPFS -- and can only be accessed through this third party's website. We provide a link and/or re-route to the user interface only as a convenience. We are not responsible for any action or omission taken by IPFS as it pertains to the user interface or otherwise. </p>
                        </div>

                        <div className='content-box'>
                        <h2>
                          6. Assumption of Risk
                        </h2>

                        <p>Transactions on Panther Protocol rely on smart contracts stored on various blockchains, cryptographic tokens generated by the smart contracts, and other nascent software, applications and systems that interact with blockchain-based networks. These technologies are experimental, speculative, inherently risky, and subject to change. Among other risks, bugs, malfunctions, cyberattacks, or changes to the applicable blockchain could disrupt these technologies and even result in a total loss of virtual assets, their market value, or digital funds. You bear sole responsibility for evaluating the technologies before using them. We assume no liability or responsibility for any such risks and disclaim any ongoing obligation to notify you of all of the potential risks of using and accessing Panther Protocol. You agree to accept these risks and agree that you will not seek to hold any Panther Indemnified Party (defined below) responsible for any consequent losses. If you are not comfortable assuming these risks, you should not access or engage in transactions using blockchain-based technology.</p>

                        <p>You agree to the automated collection and disbursement of proceeds by smart contracts. You acknowledge and agree that all transactions accessed through a user-interface or application to which we may provide a link will be automatically processed using one or more blockchain-based smart contracts. By engaging in such transactions, you acknowledge and consent to the automatic processing of all related transactions. You further acknowledge and agree that the applicable smart contract will dictate how the funds of a transaction and ownership of virtual assets are distributed. </p>

                        <p>
                        You understand and agree that you are solely responsible for maintaining the security of your wallet and the safekeeping of the private key associated with the blockchain address used to interact with the Protocol. Any unauthorised access to your wallet by third parties could result in the loss or theft of any virtual asset, or any funds held in your account and any associated accounts. The private key associated with the wallet address from which you transfer virtual assets is the only private key that can control the virtual assets you transfer into the smart contracts. You alone are responsible for securing your private keys. We do not have access to your private keys. You understand and agree that we have no involvement in, and you will not hold us responsible for managing and maintaining the security of your wallet. You further understand and agree that we are not responsible, and you will not hold us accountable, for any unauthorised access to your wallet. It is your responsibility to monitor your wallet.
                        </p>
                        <p>
                        As a condition to accessing or using the Services, you acknowledge, understand, and agree that from time to time, the Services may be inaccessible or inoperable for any reason, including, but not limited to equipment malfunctions, periodic maintenance procedures or repairs, causes beyond our control or that we could not reasonably foresee, or unavailability of third-party service providers or external partners for any reason.
                        </p>
                        </div>

                        <div className='content-box'>
                        <h2>
                          7. Fees and Taxes
                        </h2>

                        <p>All transactions using blockchains require the payment of gas fees, which are essentially transaction fees paid on every transaction that occurs on the selected blockchain network. Please note that gas fees are solely your responsibility and are non-refundable. </p>

                        <p>You are responsible for your taxes and duties. You bear sole responsibility for paying any and all taxes, duties, and assessments now or hereafter claimed or imposed by any governmental authority associated with or payable as the result of using and/or exploiting any virtual assets and interacting with smart contracts. </p>

                        </div>

                        <div className='content-box'>
                        <h2>
                          8. Proprietary Rights
                        </h2>

                        <p>Panther or its licensors own all right, title, and interest, including all intellectual property rights, in and to the Services, and any related content and technology, unless otherwise indicated. Contingent upon your ongoing compliance with the Agreement, Panther hereby grants you a personal, limited, revocable, non-exclusive, non-sublicensable, non-transferable licence to use the Services solely as permitted by these Terms. Certain services may be provided to you under a separate licence, such as the MIT License or other open source licence. You agree you will not violate the terms of any such separate licence. To the extent of a conflict between the licence granted to you in these Terms and any separate licence, the separate licence will prevail with respect to the service that is the subject of the separate licence. </p>

                        </div>

                        <div className='content-box'>
                        <h2>
                          9. General Prohibitions and Panther’s Enforcement Rights

                        </h2>

                        <p>
                          You must not, and must not permit any person to: (a) engage in or induce others to engage in any form of unauthorised access, hacking, or social engineering, including without limitation any distributed denial or service or DDoS attack, of Panther, the Services, the Protocol or any users of the foregoing; (b) use, display, mirror or frame the Services or any individual element within the Services, Panther’s name, any Panther trademark, logo or other proprietary information, or the layout and design of any page or form contained on a page, without Panther’s express written consent; (c) access, tamper with, or use non-public areas of the Services, Panther’s computer systems, or the technical delivery systems of Panther’s providers; (d) attempt to probe, scan or test the vulnerability of any Panther system or network or breach any security or authentication measures; (e) avoid, bypass, remove, deactivate, impair, descramble or otherwise circumvent any technological measure implemented by Panther or any of Panther’s providers or any other third party (including another user) to protect the Services or Protocol, (without limitation to the foregoing, use of a virtual private network (“VPN”) to circumvent the restrictions set forth herein is prohibited); (f) attempt to access or search the Services or download content from the Services using any engine, software, tool, agent, device or mechanism (including spiders, robots, crawlers, data mining tools or the like) other than the software and/or search agents provided by Panther or other generally available third-party web browsers; (g) send any unsolicited or unauthorised advertising, promotional materials, email, junk mail, spam, chain letters or other form of solicitation; (h) use any meta tags or other hidden text or metadata utilising a Panther trademark, logo, URL or product name without Panther’s express written consent; (i) forge any TCP/IP packet header or any part of the header information in any email or newsgroup posting, or in any way use the Services to send altered, deceptive or false source-identifying information; (j) attempt to decipher, decompile, disassemble or reverse engineer any of the software used to provide the Services or Protocol; (k) interfere with, or attempt to interfere with, the access of any user, host or network, including, without limitation, sending a virus, exploiting any bug, overloading, flooding, spamming, or mail-bombing the Services; (l) use the Services for benchmarking or analysis in a manner that could, directly or indirectly, interfere with, detract from, or otherwise harm the Services or the Protocol; (m) collect or store any personally identifiable information from the Services or Protocol from other users of the Services or Protocol without a lawful basis; (n) impersonate or misrepresent your affiliation with any individual or entity; (o) create or list any counterfeit items (including digital assets); (p) fabricate in any way any transaction or process related thereto; (q) engage or assist in any activity that violates any law, statute, ordinance, regulation, or sanctions program, including but not limited to that of OFAC, or that involves proceeds of any unlawful activity (including but not limited to money laundering, terrorist financing or deliberately engaging in activities designed to adversely affect the performance of the Services or Protocol); (r) engage in wash trading or other deceptive or manipulative trading activities; (s) disguise or interfere in any way with the IP address of the computer you are using to access or use the Services Protocol or that otherwise prevents the correct identification of the IP address of the computer you are using to access the Services or Protocol; (t) transmit, exchange, or otherwise support the direct or indirect proceeds of criminal or fraudulent activity; (u) violate any applicable law; or (v) encourage or enable any other individual or entity to do any of the foregoing.
                        </p>

                        <p>
                        We further reserve the right to restrict your access to the Site or to stop providing you with all or a part of the Services via any technically available methods at any time and for no reason, including, without limitation, if we suspect, in our sole discretion, that: (a) you are using the Services or Protocol in relation to money laundering or any unlawful purpose; (b) you have engaged in fraudulent activity; (c) you have acquired virtual assets using inappropriate methods, including the use of stolen funds to purchase such assets; (d) you are the target of any sanctions administered or enforced by OFAC, the United Nations Security Council, the European Union, Her Majesty’s Treasury, or any other legal or regulatory authority in any applicable jurisdiction; (e) either you, as an individual or an entity, or your wallet address is listed on the Specially Designated Nationals and Blocked Persons List, Consolidated Sanctions List, or any other sanctions lists administered by OFAC; (f) you are located, organised, or resident in the United States of America, or a country or territory that is, or whose government is, the subject of sanctions, including but not limited to Afghanistan, Belarus, Bosnia and Herzegovina, Burundi, Burma (Myanmar), Central African Republic, Cote D’Ivoire (Ivory Coast), Crimea and Sevastopol, Cuba, Democratic Republic of Congo, Donetsk, Guinea, Iran, Iraq, Lebanon, Liberia, Libya, Luhansk, Mali, Nicaragua, North Korea, Republic of Guinea-Bissau, Russia, Somalia, South Sudan, Sudan, Syria, Venezuela, Yemen or Zimbabwe; (g) you have otherwise acted in violation of these Terms; (h) your use of the Services or Protocol exposes us to risk or liability; or (i) it is not commercially viable to continue providing you with the Services. All of these are in addition to any other rights and remedies that may be available to us, whether in equity or at law, all of which we expressly reserve.

                        </p>

                        <p>
                        Panther is not obligated to monitor or investigate access to or use of the Services or Protocol, or to review or edit any content. However, we have the right to do so for the purpose of providing the Services, to ensure compliance with these Terms and to comply with applicable law or other legal requirements. If we have a reasonable suspicion that you are utilising the Services for illegal purposes, we reserve the right to take whatever action we deem appropriate. 
                        </p>
                        </div>



                        <div className='content-box'>
                        <h2>
                          10. Disclaimers and Limitations of Liability
                        </h2>

                        <p>THE SERVICES ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS, WITHOUT WARRANTY OF ANY KIND. WITHOUT LIMITING THE FOREGOING, WE AND OUR RELATED COMPANIES AND FOUNDATIONS, AND ANY OF OUR RESPECTIVE GUARDIANS, COUNCILLORS, DIRECTORS, EMPLOYEES, CONSULTANTS AND ANY SERVICE PROVIDERS INVOLVED IN CREATING, PRODUCING, OR DELIVERING THE SERVICES (COLLECTIVELY, THE "PANTHER INDEMNIFIED PARTIES") MAKE NO GUARANTEES OF ANY KIND IN CONNECTION WITH THE SITE AND/OR SERVICES. TO THE MAXIMUM EXTENT PERMITTED UNDER APPLICABLE LAW, THE PANTHER INDEMNIFIED PARTIES EXPLICITLY DISCLAIM ALL WARRANTIES AND CONDITIONS, WHETHER EXPRESS OR IMPLIED, OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, QUIET ENJOYMENT AND NON-INFRINGEMENT.
                         </p>

                         <p>
                         WE MAKE NO WARRANTY REGARDING THE QUALITY, ACCURACY, TIMELINESS, TRUTHFULNESS, COMPLETENESS OR RELIABILITY OF ANY INFORMATION OR CONTENT ON THE SITE OR SERVICES, AND DISCLAIM ALL RESPONSIBILITY AND LIABILITY FOR:
                         </p>

                         <ul>
                          <li>
                            <p>THE SITE OR SERVICES BEING ACCURATE, COMPLETE, CURRENT, RELIABLE, UNINTERRUPTED, TIMELY, SECURE, OR ERROR-FREE</p>
                            <p>Information (including, without limitation, the value or outcome of any transaction) available through the Site or Services is provided for general information only and should not be relied upon or used as the sole basis for making decisions. Any reliance on the Services is at your own risk.</p>
                          </li>

                          <li>
                            <p>INJURY OR DAMAGE RESULTING FROM THE SERVICES. </p>
                            <p>Further, you expressly acknowledge that the Panther Indemnified Parties are not responsible for loss or damage caused by another user’s conduct, unauthorised actors, or any unauthorised access to or use of the Services.</p>
                          </li>

                          <li>
                            <p>THIRD PARTY SERVICES. NOTHING HEREIN NOR ANY USE OF OUR SITE OR SERVICES IN CONNECTION WITH THIRD PARTY SERVICES CONSTITUTES OUR ENDORSEMENT, RECOMMENDATION OR ANY OTHER AFFILIATION OF OR WITH ANY THIRD PARTY SERVICES. </p>
                       
                          </li>

                          <li>
                            <p>VIRUSES, WORMS, TROJAN HORSES, TIME BOMBS, CANCEL BOTS, SPIDERS, MALWARE OR OTHER TYPE OF MALICIOUS CODE THAT MAY BE USED IN ANY WAY TO AFFECT THE FUNCTIONALITY OR OPERATION OF THE SERVICES.</p>
                       
                          </li>
                         </ul>

                         <p>
                         TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL ANY PANTHER INDEMNIFIED PARTY BE LIABLE TO YOU FOR ANY LOSS, DAMAGE, OR INJURY OF ANY KIND INCLUDING ANY DIRECT, INDIRECT, SPECIAL, INCIDENTAL, EXEMPLARY, CONSEQUENTIAL, OR PUNITIVE LOSSES OR DAMAGES, OR DAMAGES FOR SYSTEM FAILURE OR MALFUNCTION OR LOSS OF PROFITS, DATA, USE, BUSINESS OR GOOD-WILL OR OTHER INTANGIBLE LOSSES, ARISING OUT OF OR IN CONNECTION WITH: (A) THE SERVICES OR PROTOCOL OR YOUR INABILITY TO USE OR ACCESS THE SERVICES OR PROTOCOL; (B) MISUSE OF THE SERVICES OR PROTOCOL (INCLUDING WITHOUT LIMITATION, UNAUTHORISED ACCESS OF THE SERVICES OR PROTOCOL); (C) ANY USER CONDUCT ON THE SERVICES; OR (D) TERMINATION, SUSPENSION OR RESTRICTION OF ACCESS TO ANY THE SERVICES OR PROTOCOL.
                         </p>

<p>
IN ADDITION TO THE FOREGOING, NO PANTHER INDEMNIFIED PARTY SHALL BE LIABLE FOR ANY DAMAGES CAUSED IN WHOLE OR IN PART BY: (A) USER ERROR SUCH AS FORGOTTEN PASSWORDS, INCORRECTLY CONSTRUCTED TRANSACTIONS, OR MISTYPED WALLET ADDRESSES; (B) SERVER FAILURE OR DATA LOSS; (C) THE MALFUNCTION, UNEXPECTED FUNCTION OR UNINTENDED FUNCTION OF THE BLOCKCHAIN, ANY COMPUTER OR VIRTUAL ASSET NETWORK (INCLUDING ANY WALLET PROVIDER), INCLUDING WITHOUT LIMITATION LOSSES ASSOCIATED WITH NETWORK FORKS, REPLAY ATTACKS, DOUBLE-SPEND ATTACKS, SYBIL ATTACKS, 51% ATTACKS, GOVERNANCE DISPUTES, MINING DIFFICULTY, CHANGES IN CRYPTOGRAPHY OR CONSENSUS RULES, HACKING, CYBERSECURITY BREACHES, VIRUSES, PHISHING, BRUTEFORCING OR OTHER MEANS OF ATTACK; (D) ANY CHANGE IN VALUE OF ANY VIRTUAL ASSET; (E) ANY CHANGE IN LAW, REGULATION, OR POLICY; (F) EVENTS OF FORCE MAJEURE; OR (G) ANY THIRD PARTY ACTIVITIES.

</p>

<p>
THIS LIMITATION OF LIABILITY IS INTENDED TO APPLY WITHOUT REGARD TO WHETHER OTHER PROVISIONS OF THESE TERMS HAVE BEEN BREACHED OR HAVE PROVEN INEFFECTIVE. THE LIMITATIONS SET FORTH IN THIS SECTION SHALL APPLY REGARDLESS OF THE FORM OF ACTION, WHETHER THE ASSERTED LIABILITY OR DAMAGES ARE BASED ON CONTRACT, INDEMNIFICATION, TORT, STRICT LIABILITY, STATUTE, OR ANY OTHER LEGAL OR EQUITABLE THEORY, AND WHETHER OR NOT THE PANTHER INDEMNIFIED PARTIES HAVE BEEN INFORMED OF THE POSSIBILITY OF ANY SUCH DAMAGE.

</p>

<p>
IN NO EVENT WILL THE PANTHER INDEMNIFIED PARTIES’ CUMULATIVE LIABILITY TO YOU OR ANY OTHER USER, FROM ALL CAUSES OF ACTION AND ALL THEORIES OF LIABILITY EXCEED ONE HUNDRED U.S. DOLLARS (U.S. $100.00).

</p>
<p>
UNDER NO CIRCUMSTANCES SHALL ANY PANTHER INDEMNIFIED PARTY BE REQUIRED TO DELIVER TO YOU ANY VIRTUAL CURRENCY AS DAMAGES, MAKE SPECIFIC PERFORMANCE, OR ANY OTHER REMEDY. IF YOU WOULD BASE YOUR CALCULATIONS OF DAMAGES IN ANY WAY ON THE VALUE OF VIRTUAL CURRENCY, YOU AND WE AGREE THAT THE CALCULATION SHALL BE BASED ON THE LOWEST VALUE OF THE VIRTUAL CURRENCY DURING THE PERIOD BETWEEN THE ACCRUAL OF THE CLAIM AND THE AWARD OF DAMAGES.

</p>

<p className='tab'>
THE EXCLUSIONS AND LIMITATIONS OF DAMAGES SET FORTH ABOVE ARE FUNDAMENTAL ELEMENTS OF THE BASIS OF THE BARGAIN BETWEEN PANTHER AND YOU.

</p>

<p>
Some jurisdictions do not allow the exclusion or limitation of certain warranties and liabilities. Accordingly, some of the above limitations and disclaimers may not apply to you. To the extent applicable law does not permit Panther Indemnified Parties to disclaim certain warranties or limit certain liabilities, the extent of Panther Indemnified Parties’ liability and the scope of any such warranties will be as permitted under applicable law.

</p>




                        </div>

                        <div className='content-box'>
                        <h2>
                          11. Indemnification
                        </h2>
                        <p>
                        You agree, to the extent permitted by law, to indemnify, defend (at Panther's option), and hold harmless the Panther Indemnified Parties from and against any claims, disputes, demands, liabilities, damages, losses, and costs and expenses, including, without limitation, reasonable legal and accounting fees arising out of or in any way connected with: (a) your breach or alleged breach of the Agreement (including, without limitation, these Terms); (b) anything you contribute to the Services; (c) your misuse of the Services, or any smart contract and/or script related thereto; (d) your violation of any laws, rules, regulations, codes, statutes, ordinances, or orders of any governmental or quasi-governmental authorities; (e) your violation of the rights of any third party, including any intellectual property right, publicity, confidentiality, property, or privacy right; (f) your use of Panther Protocol and any other third-party software, product, interface, service and/or website; or (g) any misrepresentation made by you. We reserve the right to assume, at your expense, the exclusive defence and control of any matter subject to indemnification by you. You agree to cooperate with our defence of any claim. You will not in any event settle any claim without our prior written consent.
                        </p>
                        </div>

                        <div className='content-box'>
                        <h2>
                          12. Dispute Resolution. Arbitration 
                        </h2>
                        <p>
                        PLEASE READ THE FOLLOWING SECTION CAREFULLY BECAUSE IT CONTAINS CERTAIN PROVISIONS, SUCH AS A BINDING ARBITRATION CLAUSE AND CLASS ACTION WAIVER, WHICH AFFECT YOUR LEGAL RIGHTS. THIS SECTION REQUIRES YOU TO ARBITRATE CERTAIN DISPUTES AND CLAIMS WITH PANTHER AND LIMITS THE MANNER IN WHICH YOU CAN SEEK RELIEF FROM US. 
                        </p>


                        <div >
                          <p className='sub-para'>Binding Arbitration </p>
                          <p>Except for any disputes, claims, suits, actions, causes of action, demands or proceedings (collectively, “Disputes”) in which either you or Panther seeks injunctive or other equitable relief for the alleged unlawful use of intellectual property, including, without limitation, copyrights, trademarks, trade names, logos, trade secrets or patents, you and Panther (i) save as expressly provided herein, waive your respective rights to have any and all Disputes arising from or related to these Terms resolved in any court, and (ii) waive your respective rights to a jury trial. Instead, you and Panther will arbitrate Disputes through binding arbitration provided in these Terms. </p>
                        
                        </div>

                        <div >
                          <p className='sub-para'>No Class Arbitrations, Class Actions or Representative Actions  </p>
                          <p>Any Dispute arising out of or related to these Terms is personal to you and Panther and will be resolved solely through individual arbitration and will not be brought as a class arbitration, class action or any other type of representative proceeding. There will be no class arbitration or arbitration in which an individual attempts to resolve a Dispute as a representative of another individual or group of individuals. Further, a Dispute cannot be brought as a class or other type of representative action, whether within or outside of arbitration, or on behalf of any other individual or group of individuals. </p>
                        
                        </div>


                        <div >
                          <p className='sub-para'>Arbitration Rules  </p>
                          <p>The enforceability of this Section (Dispute Resolution. Arbitration) will be both substantively and procedurally governed by and construed and enforced in accordance with the 2012 (as revised in 2017) International Chamber of Commerce Rules of Arbitration, to the maximum extent permitted by applicable law.  </p>
                        
                        </div>

                        <div >
                          <p className='sub-para'>Notice; Informal Dispute Resolution   </p>
                          <p>Each of the participants or Panther will notify the other in writing of any Dispute within thirty (30) days of the date it arises, so that respective party can attempt in good faith to resolve the Dispute informally. Notice to Panther shall be sent by e-mail to Panther at <a href="mailto:info@pantherprotocol.io"> info@pantherprotocol.io </a> Notice to you shall be either posted on the Site or, if available, will be sent by email to any email address you provided in connection with your use of the Services. Your notice must include (i) your name, postal address, email address and telephone number, (ii) a description in reasonable detail of the nature or basis of the Dispute, and (iii) the specific relief that you are seeking. If you and Panther cannot agree how to resolve the Dispute within thirty (30) days after the date the notice is received by the applicable party, then either you or Panther may, as appropriate and in accordance with this Section (Dispute Resolution. Arbitration), commence an arbitration proceeding or, to the extent specifically provided for in this Section (Dispute Resolution. Arbitration), file a claim in court. </p>
                        
                        </div>



                        <div >
                          <p className='sub-para'>Process   </p>
                          <p>Any arbitration will occur in Gibraltar. The arbitration will be conducted confidentially by a single arbitrator appointed by the Gibraltar Chamber of Commerce in accordance with the rules of the International Chamber of Commerce Rules of Arbitration, which are hereby incorporated by reference. The courts located in Gibraltar will have exclusive jurisdiction over any appeals and the enforcement of an arbitration decision.  </p>
                        
                        </div>


                        <div >
                          <p className='sub-para'>Authority of Arbitrator    </p>
                          <p>These Terms, the applicable International Chamber of Commerce Rules of Arbitration and the arbitrator will have (i) the exclusive authority and jurisdiction to make all procedural and substantive decisions regarding a Dispute, including the determination of whether a Dispute is arbitrable, and (ii) the authority to grant any remedy that would otherwise be available in court, provided, however, that the arbitrator does not have the authority to conduct a class arbitration or a representative or class action, which is prohibited by these Terms. The arbitrator may only conduct an individual arbitration and may not consolidate more than one individual’s claims, preside over any type of class or representative proceeding or preside over any proceeding involving more than one individual. </p>
                        
                        </div>

                        <div >
                          <p className='sub-para'>Arbitration Rules </p>
                          <p>The International Chamber of Commerce Rules of Arbitration and additional information about the International Chamber of Commerce are available at https://iccwbo.org/dispute-resolution-services/arbitration/rules-of-arbitration. By agreeing to be bound by these Terms, you either (i) acknowledge and agree that you have read and understand the International Chamber of Commerce Rules of Arbitration, or (ii) waive your opportunity to read the International Chamber of Commerce Rules of Arbitration and any claim that the International Chamber of Commerce Rules of Arbitration are unfair or should not apply for any reason.</p>
                        
                        </div>

                        <div >
                          <p className='sub-para'>Changes </p>
                          <p>By rejecting any changes to these Terms, you agree that you will arbitrate any Dispute between you and us in accordance with the provisions of this section as of the date you first accepted these Terms (or accepted any subsequent changes to these Terms).</p>
                        
                        </div>
                    
                        </div>

                        <div className='content-box'>
                        <h2>
                          13. Termination 
                        </h2>
                        <p>
                        This Agreement is effective unless and until terminated by either you or us. You may terminate your Agreement with us at any time by ceasing all access to the Site or the Services. If, in our sole judgement, you fail, or we suspect that you have failed, to comply with any term or provision of the Agreement, we reserve the right to terminate our Agreement with you and deny you access to the Services. 
                        </p>
                        </div>


                        <div className='content-box'>
                        <h2>
                          14. Severance, Assignment and Entire Agreement
                        </h2>
                        <p>
                        This Agreement (including, without limitation, these Terms, and the Privacy Policy) and any policies or operating rules posted by us on the Site or Services constitute the entire and exclusive understanding and agreement between Panther and you regarding the Site and Services, and these Terms supersede and replace all prior oral or written understandings or agreements between Panther and you regarding the Site and Services (including, but not limited to, any prior versions of these Terms). If any provision of these Terms is held invalid or unenforceable by an arbitrator or a court of competent jurisdiction, that provision will be enforced to the maximum extent permissible and the other provisions of these Terms will remain in full force and effect. Except where provided by applicable law in your jurisdiction, you may not assign or transfer this Agreement, by operation of law or otherwise, without Panther’s prior written consent. Any attempt by you to assign or transfer this Agreement absent our consent, or your statutory right, will be null. Panther may freely assign or transfer this Agreement without restriction. Subject to the foregoing, this Agreement will bind and inure to the benefit of the parties, their successors and permitted assigns. 
                        </p>
                        </div>


                        <div className='content-box'>
                        <h2>
                          15. Governing Law
                        </h2>
                        <p>
                        These Terms and any separate agreements whereby we provide you Services shall be governed by and construed in accordance with the laws of Gibraltar.
                        </p>
                        </div>


                        <div className='content-box'>
                        <h2>
                          16. Contact Information
                        </h2>
                        <p>
                        You may contact us with questions about your use of the Services at  <a href="mailto:info@pantherprotocol.io"> info@pantherprotocol.io </a> When you communicate with us electronically, you consent to receive communications from us electronically.
                        </p>
                        </div>



                    </div>
                </div>
            </div>
        </section>

        </div>
    </Wrapper>
    <NewsletterSec />
    </div>
    <Footer />
    </>
  )
}

export default EmailDisclaimer