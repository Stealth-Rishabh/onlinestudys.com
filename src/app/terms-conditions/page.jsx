import {
    Info,
    GraduationCap,
    Globe,
    UserCheck,
    Ban,
    Shield,
    AlertTriangle,
    XOctagon,
    Copyright,
    Lock,
    FileText,
    CheckCircle,
    Scale,
    Settings,
  } from "lucide-react"
  import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
  import { Separator } from "@/components/ui/separator"
//   import { Footer } from "@/components/layout/footer"
  
  const termsContent = [
    {
      title: "General",
      content:
        'The website available at https://onlinestudys.com/ ("Website"), and related services (together, the "Service") are operated by Stealth Nexus Private Limited ("OnlineStudys", "us" or "we"). Access and use of the Service is subject to the following Terms and Conditions of Service ("Terms and Conditions"). By accessing or using any part of the Service, you represent that you have read, understood, and agree to be bound by these Terms and Conditions, including any future modifications. OnlineStudys may amend, update, or change these Terms and Conditions. If we do this, we will post the changes on this page and indicate the date these Terms and Conditions were last revised.',
      icon: Info,
    },
    {
      title: "Description of Service",
      content:
        "OnlineStudys is an online MBA platform, designed for professionals. Focused on post-graduation management programmes, at OnlineStudys, we provide different universities to choose from.",
      icon: GraduationCap,
    },
    {
      title: "Access to Website",
      content:
        "By signing up on OnlineStudys you deemed to have given your consent to be contacted by us via phone calls, e-mails and/or SMS notifications about the services we offer, imparting all the required information about the universities, offer promotional offers running on website/app, offers offered by the associated third parties and also order related updates. You authorize OnlineStudys to give you a call for the above-mentioned purposes. irrespective of the fact that you have registered yourself under DND or DNC or NCPR service.",
      icon: Globe,
    },
    {
      title: "Your Representations and Warranties",
      content:
        "You represent and warrant to OnlineStudys that your access and use of the Service will be in accordance with these Terms and Conditions and with all applicable laws, rules and regulations of India and any other relevant jurisdiction, including those regarding online conduct or acceptable content, and those regarding the transmission of data or information exported from India and/or the jurisdiction in which you reside. You further represent and warrant that you have created or own any material you submit to OnlineStudys and that you have the right to grant us a license to use that material.",
      icon: UserCheck,
    },
    {
      title: "Inappropriate Use",
      content:
        "You will not upload, display or otherwise provide on or through the Service any content that: (i) is libelous, defamatory, abusive, threatening, harassing, hateful, offensive or otherwise violates any law or infringes upon the right of any third party (including copyright, trademark, privacy, publicity or other personal or proprietary rights); or (ii) in OnlineStudys's sole judgment, is objectionable or which restricts or inhibits any other person from using the Service or which may expose OnlineStudys its users to any harm or liability of any kind. You shall not use the Services in any manner that could damage, disable, overburden, or impair our server, or any network(s) connected to any other server, or interfere with any other party's use and enjoyment of the Services.",
      icon: Ban,
    },
    {
      title: "Indemnification of OnlineStudys",
      content:
        "You agree to defend, indemnify and hold harmless OnlineStudys and its affiliates, directors, officers, employees, contractors, agents, suppliers, licensors, successors and assigns, from and against any and all losses, claims, causes of action, obligations, liabilities and damages whatsoever, including attorneys' fees, arising out of or relating to your access or use of the Service, any false representation made to us (as part of these Terms and Conditions or otherwise), your breach of any of these Terms and Conditions, your violation of any law or rights of any third party. The User acknowledges that the Website solely facilitates the provision of Services, and we exercise neither direct nor indirect control over the content of the conversations held.",
      icon: Shield,
    },
    {
      title: "Disclaimer",
      content:
        'The Website, including all images, audio files and other content therein, and any other information, property and rights granted or provided to you by OnlineStudys are provided to you on an "as is" basis. OnlineStudys and its suppliers make no representations or warranties of any kind with respect to the Service, either express or implied, and all such representations and warranties, including warranties of merchantability, fitness for a particular purpose or non-infringement, are expressly disclaimed. Testimonials, reviews and success stories appearing on the Website are individual experiences, reflecting real-life experiences of those that have used our Services in some way or another. However, they are individual results and results may vary.',
      icon: AlertTriangle,
    },
    {
      title: "Limitation of Liability",
      content:
        "Neither OnlineStudys nor any of its affiliates, employees, directors, officers, shareholders, agents, representatives, vendors or suppliers shall be liable to you or any other person, whether in tort, contract, strict liability or otherwise, for any indirect, special, incidental or consequential losses or damages of any nature arising out of or in connection with the use or inability to use the Services, including, without limitation, damages for lost profits, loss of goodwill, loss of data, work stoppage, accuracy of search results, or computer / electronic device failure, virus or malfunction. In no event shall OnlineStudys be liable for any damages in excess of the fees paid by you in connection with your Service.",
      icon: AlertTriangle,
    },
    {
      title: "Termination",
      content:
        "You agree that OnlineStudys, in its sole discretion, may deactivate your account or otherwise terminate your use of the Website or registration to a Service with or without reason, including, without limitation, if OnlineStudys believes that you have (a) breached the Terms and Conditions; (b) infringed the intellectual property rights of a third party; or (c) violated or acted inconsistently with the letter or spirit of these Terms and Conditions or any other applicable code of conduct. You agree that any deactivation or termination of your access to the Services may be effected without prior notice to you and that OnlineStudys shall not be liable to you nor any third party for any termination of your account or enrolment into a Service.",
      icon: XOctagon,
    },
    {
      title: "Intellectual Property",
      content:
        "All trademarks, service marks, graphics and logos used in connection with the Service are trademarks or service marks of OnlineStudys or their respective owners. All course content, including lectures, study materials, and assessments, is the intellectual property of the respective owners. Users are prohibited from using, reproducing, copying, distributing, or modifying course materials without the explicit consent of the respective owners. Access to course content does not constitute a transfer, license, or grant of intellectual property or copyright rights to users. Unauthorized use or sharing of course content will result in immediate termination of access without a refund and may lead to legal action.",
      icon: Copyright,
    },
    {
      title: "Privacy",
      content:
        "Use of the Service is also governed by our Privacy Policy, a copy of which is located here. By using the Service, you consent to the terms of the Privacy Policy.",
      icon: Lock,
    },
    {
      title: "Third-Party Intellectual Property",
      content:
        "OnlineStudys respects third-party intellectual property rights and actively supports protection of all third-party intellectual property including copyrights and trademarks. If you believe that your intellectual property rights have been violated, please provide us with proper notification including an electronic or physical signature of the person authorised to act on behalf of the owner, a description of the work that you claim has been infringed, and other required information. For notices of disputes or claims of copyright or other intellectual property infringement, please connect with us at info@onlinestudys.com",
      icon: FileText,
    },
    {
      title: "Acceptable Use",
      content:
        "To keep OnlineStudys running smoothly for all of our users, you agree that you will use the Service only in a manner consistent with our Acceptable Use Policy. You agree not to post any content that is sexually explicit, creates risk of harm, violates laws, contains hateful or abusive content, infringes intellectual property rights, or is fraudulent or misleading. You also agree not to engage in prohibited activities such as attempting to access non-public areas, circumventing security measures, or using the service for unauthorized commercial purposes. You shall not share your account credentials with your friend/relative or anyone else in order to study from a common account.",
      icon: CheckCircle,
    },
    {
      title: "Governing Law and Arbitration",
      content:
        "These Terms and Conditions shall be governed by, construed and enforced in accordance with the laws in India. Any legal action shall be submitted only to the exclusive jurisdiction of the courts of New Delhi. Where a dispute arises, parties shall make reasonable efforts to resolve through good-faith negotiations. If unsuccessful within 30 working days, disputes shall be referred to an arbitral tribunal comprising of 3 arbitrators. The Arbitration shall be governed by Arbitration and Conciliation Act, 1996. The seat and venue for arbitration shall be New Delhi.",
      icon: Scale,
    },
    {
      title: "Miscellaneous",
      content: (
        <>
          <p className="mb-4">
            By accepting these Terms and Conditions through your access or use of the Website, you certify that you are 18
            years of age or older. If you are a Minor or Child, only your parent can register on your behalf and agree to
            all Terms & Conditions.
          </p>
          <p className="mb-4">
            <strong>Grievance and Contact Information:</strong>
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Grievance Officer:{" "}
              <a href="mailto:info@onlinestudys.com" className="text-primary hover:underline">
                info@onlinestudys.com
              </a>
            </li>
            <li>
              Compliance Officer: Ankit Sharma -{" "}
              <a href="mailto:info@onlinestudys.com" className="text-primary hover:underline">
                info@onlinestudys.com
              </a>
            </li>
            <li>
              Customer Care:{" "}
              <a href="mailto:info@onlinestudys.com" className="text-primary hover:underline">
                info@onlinestudys.com
              </a>
            </li>
            <li>
              NCH Portal:{" "}
              <a
                href="https://consumerhelpline.gov.in/nch.php"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                https://consumerhelpline.gov.in/nch.php
              </a>
            </li>
          </ul>
          <p className="mt-4">
            <strong>Company Address:</strong>
            <br />
            Stealth Nexus Private Limited
            <br />
            C- 87,88, Third Floor, Ramesh Nagar, Delhi, 110015
          </p>
          <p className="mt-4">
            If your Child faces bullying, abuse or harassment while availing our Services, please contact us at{" "}
            <a href="mailto:info@onlinestudys.com" className="text-primary hover:underline">
              info@onlinestudys.com
            </a>
          </p>
        </>
      ),
      icon: Settings,
    },
  ]
  
  export default function TermsAndConditionsPage() {
    return (
      <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
        <main className="flex-grow container mx-auto px-4 py-12 md:px-6 md:py-20 lg:py-24">
          <Card className="max-w-4xl mx-auto shadow-lg dark:shadow-2xl">
            <CardHeader className="text-center pt-8 md:pt-12">
              <CardTitle className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
                Terms & Conditions
              </CardTitle>
              <CardDescription className="mt-4 text-lg text-gray-500 dark:text-gray-400">
                Your agreement for using onlinestudys.com
              </CardDescription>
              <p className="text-sm text-gray-400 mt-2">Last updated: 13 August 2025</p>
            </CardHeader>
            <CardContent className="p-8 md:p-12">
              <div className="space-y-12">
                <Separator />
                {termsContent.map((section, index) => {
                  const Icon = section.icon
                  return (
                    <div key={index} className="flex flex-col sm:flex-row gap-6 md:gap-8">
                      <div className="flex-shrink-0 flex sm:flex-col items-center gap-4">
                        <div className="bg-primary/10 text-primary rounded-full p-3">
                          <Icon className="h-6 w-6" />
                        </div>
                        {index < termsContent.length - 1 && (
                          <div className="hidden sm:block w-px h-full bg-gray-200 dark:bg-gray-700 flex-grow" />
                        )}
                      </div>
                      <div className="flex-grow">
                        <h2 className="text-2xl font-semibold tracking-tight mb-3">{section.title}</h2>
                        <div className="text-gray-600 dark:text-gray-400 leading-relaxed prose prose-gray dark:prose-invert max-w-none">
                          <div>{section.content}</div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>
        </main>
        {/* <Footer /> */}
      </div>
    )
  }
  