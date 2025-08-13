import {
    ShieldCheck,
    List,
    Cog,
    Cookie,
    Share2,
    FilePenLine,
    Mail,
    Archive,
    UserCheck,
    Scale,
    Bell,
    Settings,
    ExternalLink,
    Gavel,
    UserX,
  } from "lucide-react"
  import { Card, CardContent } from "@/components/ui/card"
  import { Separator } from "@/components/ui/separator"
  import Link from "next/link"
  
//   function Footer() {
//     return (
//       <footer className="bg-muted text-muted-foreground py-8 px-4 md:px-6">
//         <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
//           <div className="flex items-center gap-2">
//             <BookOpen className="h-6 w-6" />
//             <p className="text-sm font-medium">&copy; {new Date().getFullYear()} OnlineStudys. All rights reserved.</p>
//           </div>
//           <div className="flex items-center gap-4">
//             <Link href="#" className="text-sm hover:underline underline-offset-4">
//               Terms of Service
//             </Link>
//             <div className="flex items-center gap-3">
//               <Link href="#" aria-label="Twitter">
//                 <Twitter className="h-5 w-5 hover:text-primary transition-colors" />
//               </Link>
//               <Link href="#" aria-label="Facebook">
//                 <Facebook className="h-5 w-5 hover:text-primary transition-colors" />
//               </Link>
//               <Link href="#" aria-label="LinkedIn">
//                 <Linkedin className="h-5 w-5 hover:text-primary transition-colors" />
//               </Link>
//             </div>
//           </div>
//         </div>
//       </footer>
//     )
//   }
  
  export default function PrivacyPolicyPage() {
    return (
      <div className="flex flex-col min-h-screen bg-background">
        <main className="flex-1">
          <div className="container mx-auto max-w-4xl py-12 px-4 md:py-20 md:px-6">
            <header className="mb-10 text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Privacy Policy</h1>
              <p className="mt-4 text-lg text-muted-foreground">Last updated on August 11, 2025</p>
            </header>
  
            <Card className="w-full">
              <CardContent className="p-6 md:p-8 space-y-8">
                <PolicySection icon={<ShieldCheck className="h-6 min-w-6 text-primary" />} title="General">
                  <p>
                    Stealth Nexus Private Limited (hereinafter "OnlineStudys," "us," "we," or "our" or "the Company") is
                    committed to security and management of personal data, to function effectively and successfully for
                    the benefit of our stakeholders, customers and for the community. In doing so, it is essential that
                    people's privacy is protected through the lawful and appropriate means for handling the personal data.
                    Therefore, we have implemented this privacy policy ("Privacy Policy").
                  </p>
                  <p className="mt-4">
                    By using, accessing or participating in the Service, you agree to the terms of this Privacy Policy.
                    Capitalized terms not defined in this Privacy Policy have the meanings set forth in the Terms and
                    Conditions. We reserve the right to change our Privacy Policy at any time. If we do this, depending on
                    the nature of the change, we will post the changes on this page and indicate at the top of this page
                    the date these terms and Conditions were last revised. Any changes will be effective immediately. Your
                    continued use of the Website after the date any such changes become effective constitutes your
                    acceptance of the new Terms and Conditions.
                  </p>
                </PolicySection>
  
                <Separator />
  
                <PolicySection icon={<List className="h-6 min-w-6 text-primary" />} title="Information We Collect">
                  <p>
                    When you use the Service you provide us with two types of information: (i) information you submit via
                    the Service and (ii) information regarding your use of the Service collected by us as you interact
                    with the Service.
                  </p>
                  <p className="mt-4">
                    When you enter the Website, we collect your browser type and IP address. This information is gathered
                    for all Website visitors. In addition, we store certain information from your browser using "cookies."
                    A cookie is a piece of data stored on the user's computer tied to information about the user. We use
                    session ID cookies to confirm that users are logged in.
                  </p>
                  <p className="mt-4">
                    Through the registration process you may provide us with your name, email address, contact number and
                    other information that may be requested during the registration process. When you use the Services,
                    you may submit information and content to your profile, generate Activity Data through engaging in
                    activities on the Service, or send messages and otherwise transmit information to other users.
                  </p>
                </PolicySection>
  
                <PolicySection
                  icon={<Cog className="h-6 min-w-6 text-primary" />}
                  title="Use of Information Obtained by OnlineStudys"
                >
                  <p>
                    We may use your contact information to send you notifications regarding new services offered by
                    OnlineStudys and its partners that we think you may find valuable. OnlineStudys may also send you
                    service-related announcements from time to time through the general operation of the Service.
                    Generally, you may opt out of such emails, although OnlineStudys reserves the right to send you
                    notices about your account even if you opt out of all voluntary email notifications.
                  </p>
                  <p className="mt-4">
                    Profile information is used by OnlineStudys primarily to be presented back to and edited by you when
                    you access the Service and to be presented to other users. In some cases, other users may be able to
                    supplement your profile, including by submitting comments.
                  </p>
                  <p className="mt-4">
                    OnlineStudys may use aggregate or anonymous data collected through the Service, including Activity
                    Data, for any purpose. This data may be used by OnlineStudys and shared with third parties in any
                    manner. Users can request deletion of their data by sending an email to{" "}
                    <a href="mailto:info@onlinestudys.in" className="text-primary hover:underline">
                      info@onlinestudys.in
                    </a>
                  </p>
                </PolicySection>
  
                <PolicySection icon={<Cookie className="h-6 min-w-6 text-primary" />} title="Cookies">
                  <p>
                    Cookies are text files placed on your computer to collect standard internet log information and
                    visitor behavior information. When you visit our Website, we may collect information from you
                    automatically through cookies or similar technology.
                  </p>
                  <p className="mt-4">
                    Furthermore, we may allow third-party advertising companies (such as Facebook, Google, and X) to place
                    cookies on our website. These cookies enable such companies to track your activity across various
                    sites where they display ads and record your activities, so they can show ads that they consider
                    relevant to you as you browse the internet.
                  </p>
  
                  <div className="mt-6">
                    <h4 className="font-semibold mb-3">How do we use cookies?</h4>
                    <p>
                      OnlineStudys uses cookies in a range of ways to improve your experience on our website, including:
                    </p>
                    <ul className="list-disc list-inside space-y-2 pl-4 mt-2">
                      <li>
                        To recognize our Website user and to enhance user experience when interacting with our Website.
                      </li>
                      <li>
                        We moreover use cookies to help us to analyse the use and performance of our Website and Services.
                      </li>
                      <li>We also use cookies to improve the delivery and value of various Services offered by us.</li>
                    </ul>
                  </div>
  
                  <div className="mt-6">
                    <h4 className="font-semibold mb-3">What types of cookies do we use?</h4>
                    <ul className="list-disc list-inside space-y-2 pl-4">
                      <li>
                        <strong>Persistent Cookies:</strong> We use persistent cookies to improve your experience of using
                        the sites. This includes recording your acceptance of our Cookie Policy to remove the cookie
                        message that first appears when you use the sites.
                      </li>
                      <li>
                        <strong>Session Cookies:</strong> Session cookies are temporary and deleted from your machine when
                        your web browser closes. We use session cookies to help us track internet usage as described
                        above.
                      </li>
                      <li>
                        <strong>Analytical/Performance Cookies:</strong> Analytical cookies allow us to recognize and
                        count the number of visitors and see how many visitors move around our Website while they are
                        using it.
                      </li>
                      <li>
                        <strong>Functionality Cookies:</strong> Functionality cookies recognize when you return to the
                        Website. This enables OnlineStudys to create greater content for you and remember your likes and
                        dislikes and other preferences.
                      </li>
                      <li>
                        <strong>Targeting Cookies:</strong> Targeting cookies record the visit to our Website, the pages
                        navigated to and the links clicked upon. It helps to formulate information relevant to the user's
                        area of interest.
                      </li>
                    </ul>
                  </div>
  
                  <div className="mt-6">
                    <h4 className="font-semibold mb-3">How to manage cookies?</h4>
                    <p>
                      Most browsers allow you to refuse to accept cookies and to delete cookies. The methods for doing so
                      vary from browser to browser, and from version to version. Disabling some cookies from the Website,
                      may have a negative impact and may result in some non-availability of some features.
                    </p>
                  </div>
                </PolicySection>
  
                <PolicySection
                  icon={<Share2 className="h-6 min-w-6 text-primary" />}
                  title="Sharing Your Personally Identifiable Information with Third Parties"
                >
                  <p>
                    OnlineStudys shares your personally identifiable information only in limited circumstances where
                    OnlineStudys believes such sharing is reasonably necessary to offer the Services, legally required or,
                    permitted by you.
                  </p>
                  <p className="mt-4">
                    We may provide personally identifiable information to service providers who help us bring you the
                    Service, such as hosting the Service at a co-location facility or sending email updates. In connection
                    with these operations, our service providers may have access to personally identifiable information
                    for use for a limited time.
                  </p>
                  <p className="mt-4">
                    Notwithstanding anything else in this policy, we may work with partners who use mobile SDKs, including
                    the OneSignal Messaging SDK, to passively collect information (collectively, "SDK Information"), which
                    generally helps us deliver personalized notifications.
                  </p>
                </PolicySection>
  
                <PolicySection
                  icon={<Settings className="h-6 min-w-6 text-primary" />}
                  title="Consumer Control & Opt-Out Options"
                >
                  <p>
                    <strong>Opting-out of OneSignal Push Notifications</strong> - You may in most cases opt out of
                    receiving push notifications by going to your device "Settings" and clicking on "Notifications," and
                    then changing those settings for some or all of the apps on your device.
                  </p>
                  <p className="mt-4">
                    We may be required to disclose personally identifiable information pursuant to lawful requests, such
                    as subpoenas or court orders, or in compliance with applicable laws. Additionally, we may share
                    account or other personally identifiable information when we believe it is necessary to comply with
                    law, to protect our interests or property, to prevent fraud or other illegal activity perpetrated
                    through the Service or using the OnlineStudys name, or to prevent imminent harm.
                  </p>
                </PolicySection>
  
                <PolicySection icon={<ExternalLink className="h-6 min-w-6 text-primary" />} title="Links">
                  <p>
                    The Service may contain links to other websites. We are not responsible for the privacy practices of
                    other websites. We encourage users to be aware when they leave the Service to read the privacy
                    statements of other websites that collect personally identifiable information. This Privacy Policy
                    applies solely to information collected by OnlineStudys via the Service.
                  </p>
                  <p className="mt-4">
                    We are an independent company involved into providing a curated learning experience that blends
                    industry-led online curriculum with case-study discussions, leadership talks and networking events.
                    However, we categorically state that we do not represent any Central/State Govt department or any
                    other private organisations as such.
                  </p>
                </PolicySection>
  
                <PolicySection icon={<ShieldCheck className="h-6 min-w-6 text-primary" />} title="Data Protection Principles">
                  <p>All personal data obtained and held by OnlineStudys will:</p>
                  <ul className="list-disc list-inside space-y-2 pl-4 mt-4">
                    <li>be processed fairly, lawfully and in a transparent manner;</li>
                    <li>be collected for specific, explicit, and legitimate purposes;</li>
                    <li>be adequate, relevant and limited to what is necessary for the purposes of processing;</li>
                    <li>
                      be kept accurate and up to date. Every reasonable effort will be made to ensure that inaccurate data
                      is rectified or erased without delay;
                    </li>
                    <li>not be kept for longer than is necessary for its given purpose;</li>
                    <li>
                      be processed in a manner that ensures appropriate security of personal data including protection
                      against unauthorised or unlawful processing, accidental loss, destruction or damage by using
                      appropriate technical or organisation measures; and
                    </li>
                    <li>
                      comply with the relevant laws and procedures for international transferring of personal data, if
                      applicable to us.
                    </li>
                  </ul>
                </PolicySection>
  
                <PolicySection
                  icon={<Scale className="h-6 min-w-6 text-primary" />}
                  title="Legal basis for Processing your Personal Data"
                >
                  <p>
                    OnlineStudys relies on the following lawful basis to process personal data, as permitted under
                    applicable law:
                  </p>
                  <ul className="list-disc list-inside space-y-2 pl-4 mt-4">
                    <li>Processing necessary for the negotiation, execution, or performance of contracts</li>
                    <li>Processing to comply with legal and regulatory obligations;</li>
                    <li>
                      Processing in furtherance of our legitimate interests, including our interests to conduct legitimate
                      business activities (such as improving our products and services, to communicate with you, to secure
                      our systems, among other legitimate interests);
                    </li>
                    <li>Processing necessary to protect vital interest of a user or any other natural person.</li>
                    <li>Processing necessary for public interest</li>
                    <li>Processing based on your consent.</li>
                  </ul>
                </PolicySection>
  
                <PolicySection icon={<UserCheck className="h-6 min-w-6 text-primary" />} title="Consent">
                  <p>
                    We may obtain your consent to collect and use certain types of personal data when we are required to
                    do so by law. Once consent is obtained from the individual to use his or her information for those
                    purposes, OnlineStudys has the individual's implied consent to collect or receive any supplementary
                    information that is necessary to fulfil the same purposes.
                  </p>
                  <p className="mt-4">
                    Further, by using this Website/ acknowledging this Privacy Policy / by voluntarily providing us with
                    your personal data, you consent to collection, storage, and processing of your personal data in
                    accordance with this Privacy Policy and our Terms and Conditions.
                  </p>
                </PolicySection>
  
                <PolicySection icon={<Bell className="h-6 min-w-6 text-primary" />} title="Breach Notification">
                  <p>
                    Where a data breach is likely to result in a risk to the rights and freedoms of individuals, it will
                    be reported to the relevant supervisory authority within 72 hours of OnlineStudys becoming aware of it
                    and may be reported in more than one instalment. Individuals will be informed directly if the breach
                    is likely to result in a high risk to the rights and freedoms of that individual.
                  </p>
                </PolicySection>
  
                <PolicySection icon={<Archive className="h-6 min-w-6 text-primary" />} title="Retention of Personal Data">
                  <p>
                    We retain your personal data, not longer than necessary for the purposes for which it was collected.
                    The length of time to retain personal data depends on the purposes for which we collect and use it
                    and/or as may be required to comply with applicable laws, to establish, exercise, or defend our legal
                    rights.
                  </p>
                  <p className="mt-4">
                    The users can exercise their rights enumerated herein. Also, if in case required to extend the period
                    of retention of such data, we shall obtain your consent for the same. Further, we may also dispose the
                    data prior to completion of the period of retention, if the purpose for which it was collected is
                    exhausted.
                  </p>
                </PolicySection>
  
                <PolicySection
                  icon={<FilePenLine className="h-6 min-w-6 text-primary" />}
                  title="Use of this Website and our Terms and Conditions"
                >
                  <p>
                    This Website is the property of OnlineStudys. Our Terms and Conditions and this Privacy Policy
                    collectively govern the use of this Website and the Services offered by OnlineStudys. This Privacy
                    Policy shall form a part of the Terms and Conditions by way of reference.
                  </p>
                </PolicySection>
  
                <PolicySection icon={<UserX className="h-6 min-w-6 text-primary" />} title="Use of the Website by Children">
                  <p>
                    To register on the Website, you must meet the age requirement specified in the Terms and Conditions.
                  </p>
                  <p className="mt-4">
                    OnlineStudys will not be responsible for any consequences that arise as a result of misuse of our
                    Website, that may occur by virtue of any person including a Minor or Child registering on the website.
                    OnlineStudys reserves the right to terminate your subscription and/or refuse to provide you with
                    access to the Website if it is discovered that you do not meet the Age Requirements and the consent to
                    use the Website is not given by your parent / legal guardian.
                  </p>
                  <p className="mt-4">
                    If you are a parent / legal guardian and you are aware that your child has provided us with personal
                    information without your consent, please contact us at{" "}
                    <a href="mailto:info@onlinestudys.in" className="text-primary hover:underline">
                      info@onlinestudys.in
                    </a>
                  </p>
                  <p className="mt-4">
                    If your Child faces bullying, abuse or harassment while availing our Services, please contact us at{" "}
                    <a href="mailto:support@theOnlinestudys.com" className="text-primary hover:underline">
                      support@theOnlinestudys.com
                    </a>
                  </p>
                </PolicySection>
  
                <PolicySection icon={<Gavel className="h-6 min-w-6 text-primary" />} title="Governing Law and Jurisdiction">
                  <p>
                    This Privacy Policy shall be governed by, construed and enforced in accordance with the laws in India.
                    You agree that any legal action, lawsuit or other action brought by OnlineStudys, you or any third
                    party to enforce this Privacy Policy shall, subject to the arbitration process, be submitted only to
                    the exclusive jurisdiction of the courts of New Delhi.
                  </p>
                  <p className="mt-4">
                    Where a dispute arises, the parties involved shall make all reasonable efforts to resolve the dispute
                    through good-faith negotiations. If efforts to amicably resolve any dispute or claim between the
                    parties are unsuccessful within 30 working days from the date of such written notice initiating the
                    dispute, then such dispute or claim arising out of or in connection with this Privacy Policy, shall be
                    referred to an arbitral tribunal comprising of 3 (three) arbitrators, wherein each party shall appoint
                    one arbitrator and the third arbitrator shall be appointed by the aforesaid two arbitrators.
                  </p>
                  <p className="mt-4">
                    All proceedings in any such arbitration shall be conducted in English. The Arbitration shall be
                    governed by Arbitration and Conciliation Act, 1996 or any other law relating to arbitration in force
                    in India at the relevant time. The seat and venue for arbitration shall be New Delhi.
                  </p>
                </PolicySection>
  
                <Separator />
  
                <PolicySection icon={<Mail className="h-6 min-w-6 text-primary" />} title="Grievance Officer">
                  <p>
                    OnlineStudys in accordance with the applicable laws, and all applicable rules made thereunder, has
                    appointed a Grievance Officer, who can be reached at the details below:
                  </p>
                  <div className="mt-4 p-4 bg-gray-50 w-fit rounded-lg text-sm">
                    <p>
                      <strong>Email Address:</strong>{" "}
                      <a href="mailto:info@onlinestudys.in" className="text-primary hover:underline">
                        info@onlinestudys.in
                      </a>
                    </p>
                  </div>
                </PolicySection>
              </CardContent>
            </Card>
          </div>
        </main>
        {/* <Footer /> */}
      </div>
    )
  }
  
  function PolicySection({ icon, title, children }) {
    return (
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          {icon}
          <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
        </div>
        <div className="prose prose-stone max-w-none dark:prose-invert text-muted-foreground leading-relaxed">
          {children}
        </div>
      </section>
    )
  }
  