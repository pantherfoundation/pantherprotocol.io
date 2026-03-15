import { useState } from 'react'
import Wrapper from './Styles/PrivacyPolicy'
import { Link } from 'react-scroll'
import { Helmet } from 'react-helmet';
import OGImg from '../assets/Images/og_panther.png'
import { NewsletterSec } from '../components/PageComponent/LP_Components'
import { Navbar,Footer } from '../components/SharedComponent';
import { Col, Row } from 'antd';

const PrivacyPolicy = () => {
    const [, setUpdate] = useState(true)

    const handleUpdate = (id)=>{
        if(id === true){
          setUpdate(false)
        }else{
          setUpdate(true)
    
        }
      }

  return ( <>
    <div className='relative' style={{background:"linear-gradient(45deg, rgb(20, 31, 61), rgb(2, 2, 22))"}}>
    <Navbar updateValue={handleUpdate} />   

     <Wrapper>
        <Helmet>
            <title> Privacy Policy - Panther Protocol </title>
            <meta property="og:image" content={OGImg} />
            <meta property="og:title" content="Privacy Policy - Panther Protocol"/>
            <meta property="og:description" content="Building on-chain privacy infrastructure for VASP-licensed entities"/>
        </Helmet>



        <div className='container'>
        <section id="privacy-policy" class="privacy-policy" >
    <div class="container">
        <div>
            <div>
                <h3>Panther Privacy Policy</h3>
                <h5>Date of last update: 6 March 2026</h5>
               <p>
               This Privacy Policy is designed to help you understand how Panther DAO, acting through its governance mechanisms (“Panther,” “we,” “us,” or “our”) collects, uses, processes, and shares your personal information, and to help you understand and exercise your privacy rights. 
               </p>


               <div className='hyperlinks-container'>
                <p><Link to='section1'>1. &nbsp; SCOPE AND UPDATES TO THIS PRIVACY POLICY </Link></p>
                <p><Link to='section2'>2. &nbsp; PERSONAL INFORMATION WE COLLECT </Link></p>
                <p><Link to='section3'>3. &nbsp; HOW WE USE YOUR PERSONAL INFORMATION </Link></p>
                <p><Link to='section4'>4. &nbsp; HOW WE DISCLOSE YOUR PERSONAL INFORMATION </Link></p>
                <p><Link to='section5'>5. &nbsp; YOUR PRIVACY CHOICES AND RIGHTS </Link></p>
                <p><Link to='section6'>6. &nbsp; SECURITY OF YOUR INFORMATION </Link></p>
                <p><Link to='section7'>7. &nbsp; INTERNATIONAL DATA TRANSFERS </Link></p>
                <p><Link to='section8'>8. &nbsp; RETENTION OF PERSONAL INFORMATION </Link></p>
                <p><Link to='section9'>9. &nbsp; SUPPLEMENTAL NOTICE FOR CALIFORNIA RESIDENTS </Link></p>
                <p><Link to='section10'>10. &nbsp; SUPPLEMENTAL NOTICE FOR NEVADA RESIDENTS </Link></p>
                <p><Link to='section11'>11. &nbsp; CHILDREN’S INFORMATION </Link></p>
                <p><Link to='section12'>12. &nbsp; OTHER PROVISIONS </Link></p>
                <p><Link to='section13'>13. &nbsp; CONTACT US </Link></p>               
               </div>


               <div className='section' id="section1">
                <h2>1. SCOPE AND UPDATES TO THIS PRIVACY POLICY</h2>
                <p> This Privacy Policy applies to personal information processed by us on our websites, 
                    <a href="https://www.pantherprotocol.io/"> https://www.pantherprotocol.io</a> and 
                     <a href="https://forum.pantherprotocol.io/" target='_blank' rel="nofollow noopener noreferrer"> https://forum.pantherprotocol.io </a>(each a “Site”, and together the “Sites”). </p>
                <p>
                <strong className='underline'>An Important Note</strong>: &nbsp; This Privacy Policy does not apply to any of the personal information that is processed on our other online or offline offerings, or the Panther Protocol. 
                </p>
                <p>
                <strong className='underline'>Changes to our Privacy Policy</strong>: We may revise this Privacy Policy from time to time at our sole discretion. If there are any material changes to this Privacy Policy, we will notify you as required by applicable law. You understand and agree that you will be deemed to have accepted the updated Privacy Policy if you continue to use our Sites after the new Privacy Policy takes effect.</p>
               </div>

                <div className='section' id="section2">
                    <h2>2. PERSONAL INFORMATION WE COLLECT</h2>
                    <p>The categories of personal information we collect depend on how you interact with us, our Sites, and the requirements of applicable law. We collect information that you provide to us, information we obtain automatically when you use our Sites, and information from other sources such as third-party services and organizations, as described below.</p>

                    <p className='sub-head'>A. <strong>Personal Information You Provide to Us Directly</strong></p>
                    <p>We may collect personal information that you provide to us.</p>

                    <ul>
                        <li>
                            <p><strong>Your Communications with Us.</strong> We may collect personal information, such as your email address, when you request information about our Sites or our products or services, register for our newsletter, request customer or technical support, or otherwise communicate with us.</p>
                        </li>

                        <li>
                            <p><strong>Surveys.</strong> We may contact you to participate in surveys. If you decide to participate, we may collect personal information from you in connection with the survey.</p>
                        </li>

                        <li>
                            <p><strong>Interactive Features.</strong> We and others who use our Sites may collect personal information that you submit or make available through our interactive features (e.g., forums, messaging and chat features, commenting functionalities, blogs, and social media pages). Any information you provide using the public sharing features of a Site will be considered “public,” unless otherwise required by applicable law, and is not subject to the privacy protections referenced herein. </p>
                        </li>

                        <li>
                            <p><strong>Conferences, Trade Shows, and Other Events.</strong> We may collect personal information from individuals when we attend or host conferences, trade shows, and other events.</p>
                        </li>

                        <li>
                            <p><strong>Business Development and Strategic Partnerships.</strong> We may collect personal information from individuals and third parties to assess and pursue potential business opportunities. </p>
                        </li>

                        <li>
                            <p><strong>Job Applications.</strong> We may post job openings and opportunities on our Sites. If you respond to one of these postings, we may collect your personal information, such as your application, CV, cover letter, and/or any other information you provide to us. </p>
                        </li>
                    </ul>

                    <p className='sub-head'>B. <strong>Personal Information Collected Automatically</strong></p>
                    <p>We may collect personal information automatically when you use our Sites.</p>

                    <ul>
                        <li>
                            <p><strong>Automatic Collection of Personal Information.</strong> We may collect certain information automatically when you use our Sites, such as your Internet protocol (IP) address, user settings, MAC address, cookie identifiers, mobile carrier, mobile advertising and other unique identifiers, browser or device information, location information (including approximate location derived from IP address), and Internet service provider. We may also automatically collect information regarding your use of our Sites, such as pages that you visit before, during and after using our Sites, information about the links you click, the types of content you interact with, the frequency and duration of your activities, and other information about how you use our Sites. </p>
                        </li>

                        <li>
                            <p><strong>Cookie Policy (and Other Technologies).</strong>  We, as well as third parties that provide content, advertising, or other functionality on our Sites, may use cookies, pixel tags, and other technologies (“Technologies”) to automatically collect information through your use of our Sites. </p>

                            <ul className='sub-list'>
                                <li>
                                    <p><strong>Cookies.</strong> Cookies are small text files placed in device browsers that store preferences and facilitate and enhance your experience.</p>
                                </li>
                                <li>
                                    <p><strong>Pixel Tags/Web Beacons.</strong> A pixel tag (also known as a web beacon) is a piece of code embedded in our Sites that collects information about engagement on our Sites. The use of a pixel tag allows us to record, for example, that a user has visited a particular web page or clicked on a particular advertisement. We may also include web beacons in e-mails to understand whether messages have been opened, acted on, or forwarded.</p>
                                </li>
                            </ul>
                            <p> Our uses of these Technologies fall into the following general categories: </p>
                        </li>


                        <li>
                            <p><strong>Operationally Necessary.</strong>  This includes Technologies that allow you access tor Sites, applications, and tools that are required to identify irregular website behavior, prevent fraudulent activity, improve security, or allow you to make use of our functionality. </p>
                            
                        </li>

                        <li>
                            <p><strong>Performance-Related.</strong>  We may use Technologies to assess the performance of our Sites, including as part of our analytic practices to help us understand how individuals use our Sites (see <Link to="analytics">Analytics </Link>below); </p>
                        </li>
                        <li>
                            <p><strong>Functionality-Related.</strong>  We may use Technologies that allow us to offer you enhanced functionality when accessing or using our Sites. This may include identifying you when you sign into our Sites or keeping track of your specified preferences, interests, or past items viewed </p>
                        </li>
                        <li>
                            <p><strong>Advertising- or Targeting-Related.</strong> We may use first party or third-party Technologies to deliver content, including ads relevant to your interests, on our Sites or on third-party digital properties. </p>
                        </li>
                        <p>See <Link to="section5">Your Privacy Choices and Rights</Link> below to understand your choices regarding these Technologies.</p>

                        <li id="analytics">
                            <p><strong>Analytics.</strong> We may use Technologies and other third-party tools to process analytics information on our Sites. These Technologies allow us to better understand how our digital Sites are used and to continually improve and personalizeour Sites. Some of our analytics partners include: </p>

                            <ul>
                                <li>
                                    <p><strong>Google Analytics.</strong> For more information about how Google uses your personal information (including for its own purposes, e.g., for profiling or linking it to other data), please visit <a href="https://policies.google.com/technologies/partner-sites" target='_blank' rel="nofollow noopener noreferrer">Google Analytics’ Privacy Policy</a>. To learn more about how to opt-out of Google Analytics’ use of your information, please click <a href="http://tools.google.com/dlpage/gaoptout" target='_blank' rel="nofollow noopener noreferrer">here.</a></p>
                                </li>
                            </ul>
                        </li>

                        <li>
                            <p><strong>Social Media Platforms.</strong> Our Sites may contain social media buttons, such as Twitter, Discourse, Medium, and Telegram, which might include widgets such as the “share this” button or other interactive mini programs). These features may collect personal information such as your IP address and which page you are visiting on our Sites, and may set a cookie to enable the feature to function properly. Your interactions with these platforms are governed by the privacy policy of the company providing it. </p>
                        </li>

                    </ul>

                    <p className='sub-head'>C. <strong>Personal Information Collected from Other Sources</strong></p>
                    <p><strong>Third-Party Services and Sources.</strong> We may obtain personal information about you from other sources, including through third-party services and organizations.  For example, if you access our Sites through a third-party application, such as an app store, a third-party login service, or a social networking site, we may collect personal information about you from that third-party application that you have made available via your privacy settings.
</p>
               
                </div>


                <div className='section' id="section3">
                    <h2>3. HOW WE USE YOUR PERSONAL INFORMATION</h2>
                    <p> We use your personal information for a variety of business purposes, including to provide our Sites, for administrative purposes, and to market our products and Site, as described below.</p>

                    <p className='sub-head'>A. <strong>Provide Our Sites</strong></p>
                    <p>We use your information to fulfil our contract with you and provide you with our Sites, such as:</p>
                    <ul>
                        <li>
                        <p>Managing your information and accounts.</p>
                        </li>

                        <li>
                        <p>Providing access to certain areas, functionalities, and features of our Sites.</p>
                        </li>

                        <li>
                        <p>Answering requests for customer or technical support.</p>
                        </li>

                        <li>
                        <p>Communicating with you about activities on our Sites, and policy changes.</p>
                        </li>

                        <li>
                        <p>Processing applications if you apply for a job we post on our Sites.</p>
                        </li>

                        <li>
                        <p>Allowing you to register for events.</p>
                        </li>
                    </ul>


                    <p className='sub-head'>B. <strong>Administrative Purposes</strong></p>
                    <p>We use your information for various administrative purposes, such as:</p>
                    <ul>
                        <li>
                        <p>Pursuing our legitimate interests such as direct marketing, research and development (including marketing research), network and information security, and fraud prevention.</p>
                        </li>

                        <li>
                        <p>Detecting security incidents, protecting against malicious, deceptive, fraudulent or illegal activity, and prosecuting those responsible for that activity.</p>
                        </li>

                        <li>
                        <p>Measuring interest and engagement in our Sites.</p>
                        </li>

                        <li>
                        <p>Short-term, transient use, such as contextual customization of ads.</p>
                        </li>

                        <li>
                        <p>Improving, upgrading, or enhancing our Sites.</p>
                        </li>

                        <li>
                        <p>Developing new products and services.</p>
                        </li>

                        <li>
                        <p>Ensuring internal quality control and safety.</p>
                        </li>

                        <li>
                        <p>Authenticating and verifying individual identities, including requests to exercise your rights under this Privacy Policy.</p>
                        </li>

                        <li>
                        <p>Debugging to identify and repair errors without Sites.</p>
                        </li>

                        <li>
                        <p>Auditing relating to interactions, transactions, and other compliance activities.</p>
                        </li>

                        <li>
                        <p>Sharing personal information with third parties as needed to provide a Site.</p>
                        </li>

                        <li>
                        <p>Enforcing our agreements and policies.</p>
                        </li>

                        <li>
                        <p>Carrying out activities that are required to comply with our legal obligations.</p>
                        </li>
                    </ul>


                    <p className='sub-head'>C. <strong>Marketing and Advertising our Products and Services</strong></p>
                    <p>We may use personal information to tailor and provide you with content and advertisements. We may provide you with these materials as permitted by applicable law. </p>
                    <p>Some of the ways we market to you include email campaigns, custom audiences advertising, and “interest-based” or “personalized advertising,” including through cross-device tracking. </p>
                    <p>If you have any questions about our marketing practices or if you would like to opt out of the use of your personal information for marketing purposes, you may contact us at any time as set forth in <Link to="section13">Contact Us</Link> below. </p>
    

                    <p className='sub-head'>D. <strong>With Your Consent</strong></p>
                    <p>We may use personal information for other purposes that are clearly disclosed to you at the time you provide personal information or with your consent. </p>

                    <p className='sub-head'>E. <strong>Other Purposes</strong></p>
                    <p>We also use your personal information for other purposes as requested by you or as permitted by applicable law.</p>
                    <ul>
                        <li>
                            <p><strong>De-identified and Aggregated Information.</strong> We may use personal information to create de-identified and/or aggregated information, such as demographic information, information about the device from which you accessour Sites, or other analyses we create. </p>
                        </li>
                    </ul>
                </div>

                <div className='section' id="section4">
                    <h2>4. HOW WE DISCLOSE YOUR PERSONAL INFORMATION</h2>
                    <p> We disclose your personal information to third parties for a variety of business purposes, including to provide our Sites, to protect us or others, or in the event of a major business transaction such as a merger, sale, or asset transfer, as described below. </p>

                    <p className='sub-head'>A. <strong>Disclosures to Provide Our Sites</strong></p>
                    <p>The categories of third parties with whom we may share your personal information are described below. </p>
                    <ul>
                        <li>
                            <p><strong>Service Providers.</strong> We may share your personal information with our third-party service providers and vendors that assist us with the provision of our Sites. This includes service providers and vendors that provide us with IT support, hosting, payment processing, customer service, and related services.</p>
                        </li>

                        <li>
                            <p><strong>Business Partners.</strong> We may share your personal information with business partners to provide you with a product or service you have requested. We may also share your personal information with business partners with whom we jointly offer products or services.</p>
                        </li>

                        <li>
                            <p><strong>Affiliates.</strong> We may share your personal information with our company affiliates for example: for our administrative purposes, IT management, or for them to provide services to you or support and supplement a Site we provide.</p>
                        </li>

                        <li>
                            <p><strong>Other Users or Third Parties You Share or Interact With.</strong> As described above in <Link to="section2">Personal Information We Collect</Link> our Sites may allow you to share personal information or interact with other users and third parties (including individuals and third parties who do not use our Sites and the general public). </p>
                        </li>

                        <li>
                            <p><strong>Advertising Partners.</strong> We may share your personal information with third-party advertising partners. These third-party advertising partners may set Technologies and other tracking tools on our Sites to collect information regarding your activities and your device (e.g., your IP address, cookie identifiers, page(s) visited, location, time of day). These advertising partners may use this information (and similar information collected from other services) for purposes of delivering personalized advertisements to you when you visit digital properties within their networks. This practice is commonly referred to as “interest-based advertising” or “personalized advertising.” </p>
                        </li>
                        
                    </ul>

                    <p className='sub-head'>B. <strong>Disclosures to Protect Us or Others</strong></p>
                    <p>We may access, preserve, and disclose any information we store associated with you to external parties if we, in good faith, believe doing so is required or appropriate to: comply with law enforcement or national security requests and legal process, such as a court order or subpoena; protect your, our, or others’ rights, property, or safety; enforce our policies or contracts; collect amounts owed to us; or assist with an investigation or prosecution of suspected or actual illegal activity.</p>

                    <p className='sub-head'>C. <strong>Disclosure in the Event of Merger, Sale, or Other Asset Transfers</strong></p>
                    <p>If we are involved in a merger, acquisition, financing due diligence, reorganization, bankruptcy, receivership, purchase or sale of assets, or transition of service to another provider, your information may be sold or transferred as part of such a transaction, as permitted by law and/or contract.</p>
                </div>



                <div className='section' id="section5">
                    <h2>5. YOUR PRIVACY CHOICES AND RIGHTS</h2>
                    <p><strong>Your Privacy Choices.</strong> The privacy choices you may have about your personal information are determined by applicable law and are described below. </p>
                    <ul>
                        <li>
                            <p><strong>Email Communications.</strong> If you receive an unwanted email from us, you can use the unsubscribe link found at the bottom of the email to opt out of receiving future emails. Note that you will continue to receive transaction-related emails regarding products or services you have requested. We may also send you certain non-promotional communications regarding us and our Sites, and you will not be able to opt out of those communications (e.g., communications regarding our Sites or updates to our Terms or this Privacy Policy). </p>
                        </li>

                        <li>
                            <p><strong>“Do Not Track.”</strong> Do Not Track (“DNT”) is a privacy preference that users can set in certain web browsers. Please note that we do not respond to or honor DNT signals or similar mechanisms transmitted by web browsers.</p>
                        </li>

                        <li>
                            <p><strong>Cookies and Personalized Advertising.</strong> You may stop or restrict the placement of Technologies on your device or remove them by adjusting your preferences as your browser or device permits. However, if you adjust your preferences, our Sites may not work properly. Please note that cookie-based opt-outs are not effective on mobile applications. However, you may opt-out of personalized advertisements on some mobile applications by following the instructions for <a href="https://support.google.com/googleplay/android-developer/answer/6048248?hl=en" target='_blank' rel="nofollow noopener noreferrer">Android</a> , <a href='https://support.apple.com/en-us/HT202074'> iOS </a>, and <a href="https://www.networkadvertising.org/mobile-choice/" target='_blank' rel="nofollow noopener noreferrer">others</a>. </p>
                            <p>The online advertising industry also provides websites from which you may opt out of receiving targeted ads from data partners and other advertising partners that participate in self-regulatory programs. You can access these and learn more about targeted advertising and consumer choice and privacy by visiting the <a href="http://www.networkadvertising.org/managing/opt_out.asp" target='_blank' rel="nofollow noopener noreferrer">  Network Advertising Initiative </a>, <a href="http://www.aboutads.info/choices/" target='_blank' rel="nofollow noopener noreferrer">the Digital Advertising Alliance </a>, <a href="https://www.youronlinechoices.eu/" target='_blank' rel="nofollow noopener noreferrer">the European Digital Advertising Alliance</a> , and <a href='https://youradchoices.ca/choices/'> the Digital Advertising Alliance of Canada</a>.</p>
                            <p>Please note you must separately opt out in each browser and on each device. </p>
                        </li>   
                    </ul>

                    <p><strong>Your Privacy Rights.</strong> In accordance with applicable law, you may have the right to:</p>
                    <ul>
                        <li>
                            <p><strong>Access to and Portability of Your Personal Information,</strong> including: (i) confirming whether we are processing your personal information; (ii) obtaining access to or a copy of your personal information; and (iii) receiving an electronic copy of personal information that you have provided to us, or asking us to send that information to another company in a structured, commonly used, and machine readable format (also known as the “right of data portability”). </p>
                        </li>

                        <li>
                            <p><strong>Request Correction</strong> of your personal information where it is inaccurate or incomplete. In some cases, we may provide self-service tools that enable you to update your personal information.</p>
                        </li>

                        <li>
                            <p><strong>Request Deletion</strong> of your personal information. </p>
                        </li> 

                          <li>
                            <p><strong>Request Restriction of or Object to</strong> our processing of your personal information where the processing of your personal information is based on our legitimate interest or for direct marketing purposes; and </p>
                        </li>   

                        <li>
                            <p><strong>Withdraw your Consent</strong> to our processing of your personal information. Please note that your withdrawal will only take effect for future processing, and will not affect the lawfulness of processing before the withdrawal. </p>
                        </li>   
                    </ul>

                    <p>If you would like to exercise any of these rights, please contact us as set forth in <Link to="section13">Contact Us</Link> below. We will process such requests in accordance with applicable laws.</p>
            

                </div>

                <div className='section' id="section6">
                    <h2>6. SECURITY OF YOUR INFORMATION</h2>
                    <p>We take steps to ensure that your information is treated securely and in accordance with this Privacy Policy. Unfortunately, no system is 100% secure, and we cannot ensure or warrant the security of any information you provide to us. To the fullest extent permitted by applicable law, we do not accept liability for unauthorized access, use, disclosure, or loss of personal information. </p>

                    <p>By using our Sites or providing personal information to us, you agree that we may communicate with you electronically regarding security, privacy, and administrative issues relating to your use of our Sites. If we learn of a security system’s breach, we may attempt to notify you electronically by posting a notice on our Sites, by mail, or by sending an email to you.</p>
            

                </div>

                <div className='section' id="section7">
                    <h2>7. INTERNATIONAL DATA TRANSFERS</h2>
                    <p>All information processed by us may be transferred, processed, and stored anywhere in the world, including, but not limited to, the United States or other countries, which may have data protection laws that are different from the laws where you live. We endeavor to safeguard your information consistent with the requirements of applicable laws. </p>

                    <p>If we transfer personal information which originates in the European Economic Area, Switzerland, and/or the United Kingdom to a country that has not been found to provide an adequate level of protection under applicable data protection laws, one of the safeguards we may use to support such transfer is the <a href="https://ec.europa.eu/info/law/law-topic/data-protection/international-dimension-data-protection/standard-contractual-clauses-scc/standard-contractual-clauses-international-transfers_en" target='_blank' rel="nofollow noopener noreferrer"> EU Standard Contractual Clauses </a>. </p>

                    <p>For more information about the safeguards we use for international transfers of your personal information, please contact us as set forth below. </p>
                </div>

                <div className='section' id="section8">
                    <h2>8. RETENTION OF PERSONAL INFORMATION </h2>
                    <p>We store the personal information we collect as described in this Privacy Policy for as long as you use our Sites, or as necessary to fulfill the purpose(s) for which it was collected, provide our Sites, resolve disputes, establish legal defenses, conduct audits, pursue legitimate business purposes, enforce our agreements, and comply with applicable laws. </p>
                </div>

                <div className='section' id="section9">
                    <h2>9. SUPPLEMENTAL NOTICE FOR CALIFORNIA RESIDENTS </h2>
                    <p>This Supplemental Notice for California Residents only applies to our processing of personal information that is subject to the California Consumer Privacy Act of 2018 (“CCPA”). The CCPA provides California residents with the right to know what categories of personal information Panther has collected about them, and whether Panther disclosed that personal information for a business purpose (e.g., to a service provider) in the preceding twelve months. California residents can find this information below: </p>

                    <Row className='tb-head'>
                        <Col className='tb-title' xs={10} sm={10} md={10} xl={10} lg={10}>
                        <p>Category of Personal Information Collected by Panther</p></Col>
                        <Col className='tb-title' xs={14} sm={14} md={14} xl={14} lg={14}><p>Category of Third Parties Personal Information is Disclosed to for a Business Purpose</p></Col>

                        <Col className='tb-title' xs={10} sm={10} md={10} xl={10} lg={10}>
                        <p>Identifiers. </p></Col>
                        <Col className='tb-title' xs={14} sm={14} md={14} xl={14} lg={14}>
                            <ul>
                                <li>
                                    <p>Service Providers</p>
                                </li>

                                <li>
                                    <p>Business Partners </p>
                                </li>

                                <li>
                                    <p>Affiliates</p>
                                </li>

                                <li>
                                    <p>Other Users or Third Parties You Share or Interact With</p>
                                </li>
                            </ul>
                        </Col>



                        <Col className='tb-title' xs={10} sm={10} md={10} xl={10} lg={10}>
                        <p>Personal information categories listed in the California Customer Records statute (Cal. Civ. Code § 1798.80(e)) </p></Col>
                        <Col className='tb-title' xs={14} sm={14} md={14} xl={14} lg={14}>
                            <ul>
                                <li>
                                    <p>Service Providers</p>
                                </li>

                                <li>
                                    <p>Business Partners </p>
                                </li>

                                <li>
                                    <p>Affiliates</p>
                                </li>

                                <li>
                                    <p>Other Users or Third Parties You Share or Interact With</p>
                                </li>
                            </ul>
                        </Col>

                        <Col className='tb-title' xs={10} sm={10} md={10} xl={10} lg={10}>
                        <p>Commercial information</p></Col>
                        <Col className='tb-title' xs={14} sm={14} md={14} xl={14} lg={14}>
                            <ul>
                                <li>
                                    <p>Service Providers</p>
                                </li>

                                <li>
                                    <p>Business Partners </p>
                                </li>

                                <li>
                                    <p>Affiliates</p>
                                </li>

                                <li>
                                    <p>Other Users or Third Parties You Share or Interact With</p>
                                </li>
                            </ul>
                        </Col>

                        <Col className='tb-title' xs={10} sm={10} md={10} xl={10} lg={10}>
                        <p>Internet or other electronic network activity</p></Col>
                        <Col className='tb-title' xs={14} sm={14} md={14} xl={14} lg={14}>
                            <ul>
                                <li>
                                    <p>Service Providers</p>
                                </li>

                                <li>
                                    <p>Business Partners </p>
                                </li>

                                <li>
                                    <p>Affiliates</p>
                                </li>

                                <li>
                                    <p>Other Users or Third Parties You Share or Interact With</p>
                                </li>
                            </ul>
                        </Col>

                        <Col className='tb-title' xs={10} sm={10} md={10} xl={10} lg={10}>
                        <p>Professional or employment-related information</p></Col>
                        <Col className='tb-title' xs={14} sm={14} md={14} xl={14} lg={14}>
                            <ul>
                                <li>
                                    <p>Service Providers</p>
                                </li>

                                <li>
                                    <p>Affiliates</p>
                                </li>

                            </ul>
                        </Col>


                    </Row>

                    <p>The categories of sources from which we collect personal information and our business and commercial purposes for using personal information are set forth in <Link to="section2"> Personal Information We Collect</Link> and <Link to="section3"> How We Use Your Personal Information</Link> above, respectively. </p>

                    <p><strong>“Sales” of Personal Information under the CCPA</strong></p>

                    <p>For purposes of the CCPA, Panther does not “sell” personal information, nor do we have actual knowledge of any “sale” of personal information of minors under 16 years of age. </p>

                    <br />
                    <br />

                    <p>
                        <strong>Additional Privacy Rights for California Residents</strong>
                    </p>

                    <p>
                        <strong>Non-Discrimination.</strong> &nbsp; California residents have the right not to receive discriminatory treatment by us for the exercise of their rights conferred by the CCPA. 
                    </p>

                    <p>
                        <strong>Authorized Agent.</strong> &nbsp; Only you, or someone legally authorized to act on your behalf, may make a verifiable consumer request related to your personal information. You may also make a verifiable consumer request on behalf of your minor child. To authorize an agent, provide written authorization signed by you and your designated agent and contact us as set forth in <Link to="section13">Contact Us</Link> below for additional instructions.

                    </p>

                    <p>
                        <strong>Verification.</strong> &nbsp; To protect your privacy, we will take steps to reasonably verify your identity before fulfilling your request. These steps may involve asking you to provide sufficient information that allows us to reasonably verify you are the person about whom we collected personal information or an authorized representative, or to answer questions regarding your account and use of our Sites. If you are a California resident and would like to exercise any of your rights under the CCPA, please contact us as set forth in <Link to="section13">Contact Us</Link> below. We will process such requests in accordance with applicable laws. 
                    </p>

                    <p>
                        <strong>De-Identified Information.</strong> &nbsp; If we create or receive de-identified information, we will not attempt to reidentify such information, except to comply with applicable law. 
                    </p>







                </div>

                <div className='section' id="section10">
                    <h2>10. SUPPLEMENTAL NOTICE FOR NEVADA RESIDENTS </h2>
                    <p>If you are a resident of Nevada, you have the right to opt-out of the sale of certain personal information to third parties who intend to license or sell that personal information. You can exercise this right by contacting us at info@pantherprotocol.io with the subject line “Nevada Do Not Sell Request” and providing us with your name and the email address associated with your account. Please note that we do not currently sell your personal information as sales are defined in Nevada Revised Statutes Chapter 603A. If you have any questions, please contact us as set forth in <Link to="section13">Contact Us</Link> below.</p>
                </div>


                <div className='section' id="section11">
                    <h2>11. CHILDREN’S INFORMATION </h2>
                    <p>The Sites are not directed to children under 16 (or other age as required by local law), and we do not knowingly collect personal information from children.</p>
                    <p>If you are a parent or guardian and  believe your child has uploaded personal information to our Sites without your consent, you may contact us as described in <Link to="section13">Contact Us</Link> below. If we become aware that a child has provided us with personal information in violation of applicable law, we will promptly take steps to delete such information.</p>
                </div>

                <div className='section' id="section12">
                    <h2>12. OTHER PROVISIONS </h2>
                    <p><strong>Third-Party Websites/Applications.</strong> The Sites may contain links to other websites/applications and other websites/applications may reference or link to our Sites. These third-party services are not controlled by us. We encourage our users to read the privacy policies of each website and application with which they interact. We do not endorse, screen, or approve, and are not responsible for, the privacy practices or content of such other websites or applications. Providing personal information to third-party websites or applications is at your own risk. </p>

                    <p><strong>Supervisory Authority.</strong> If your personal information is subject to the applicable data protection laws of the European Economic Area, Switzerland, or the United Kingdom, you have the right to lodge a complaint with the competent supervisory authority or attorney general if you believe our processing of your personal information violates applicable law. </p>
                    <ul>
                        <li><p className='inline-block'><a href="https://edpb.europa.eu/about-edpb/board/members_en" target='_blank' rel="nofollow noopener noreferrer">EEA Data Protection Authorities (DPAs)</a></p></li>
                        <li><p className='inline-block'><a href="https://www.edoeb.admin.ch/edoeb/en/home/the-fdpic/contact.html" target='_blank' rel="nofollow noopener noreferrer">Swiss Federal Data Protection and Information Commissioner (FDPIC)</a></p></li>
                        <li><p className='inline-block'><a href="https://ico.org.uk/global/contact-us/" target='_blank' rel="nofollow noopener noreferrer">UK Information Commissioner’s Office (ICO)</a></p></li>
                    </ul>
                </div>

                <div className='section' id="section13">
                    <h2>13. CONTACT US </h2>
                    <p>Panther is the controller of the personal information we process under this Privacy Policy. </p>

                    <p>If you have any questions about our privacy practices or this Privacy Policy, or to exercise your rights as detailed in this Privacy Policy, please contact us at:</p>
                    <p>
                    Panther DAO<br />
                    <a href="mailto:pantherdao@protonmail.com">pantherdao@protonmail.com</a>
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

export default PrivacyPolicy
