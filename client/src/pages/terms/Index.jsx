import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <>
      <Header />
      <div className="container px-5 mb-24 mt-10 lg:mt-16 xl:mt-20">
        <div className="max-w-[1000px] mx-auto">
          <p className="text-mediumblue font-bold text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-center">
            TERMS AND CONDITIONS
          </p>
          <p className="text-center font-bold text-gray-500 mt-1">Last updated February 26, 2023</p>
          <div style={{ lineHeight: "170%" }} className="mt-12 text-lg text-black/80">
            <p className="font-bold">AGREEMENT TO OUR LEGAL TERMS</p>
            <p className="mt-5">
              We are Star SMPS Pvt Ltd, doing business as Solkrd ("
              <span className="font-bold">Company</span>," "<span className="font-bold">we</span>,"
              "<span className="font-bold">us</span>," "<span className="font-bold">our</span>"), a
              company registered in India at Sonipat, India, Sonepat, Haryana 131001.
            </p>
            <p className="mt-5">
              We operate the website solkrd.com (the "Site"), the mobile application Solkrd (the
              "App"), as well as any other related products and services that refer or link to these
              legal terms (the "Legal Terms") (collectively, the "Services").
            </p>
            <p className="mt-5">
              You can contact us by email at{" "}
              <a
                href="mailto:contactsolkrd001@gmail.com"
                target="_blank"
                className="text-mediumblue break-words"
              >
                contactsolkrd001@gmail.com
              </a>
              , or by mail to Sonepat, Haryana 131001, India.
            </p>
            <p className="mt-5">
              These Legal Terms constitute a legally binding agreement made between you, whether
              personally or on behalf of an entity ("you"), and Star SMPS Pvt Ltd, concerning your
              access to and use of the Services. You agree that by accessing the Services, you have
              read, understood, and agreed to be bound by all of these Legal Terms. IF YOU DO NOT
              AGREE WITH ALL OF THESE LEGAL TERMS, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE
              SERVICES AND YOU MUST DISCONTINUE USE IMMEDIATELY.
            </p>
            <p className="mt-5">
              Supplemental terms and conditions or documents that may be posted on the Services from
              time to time are hereby expressly incorporated herein by reference. We reserve the
              right, in our sole discretion, to make changes or modifications to these Legal Terms
              at any time and for any reason. We will alert you about any changes by updating the
              "Last updated" date of these Legal Terms, and you waive any right to receive specific
              notice of each such change. It is your responsibility to periodically review these
              Legal Terms to stay informed of updates. You will be subject to, and will be deemed to
              have been made aware of and to have accepted, the changes in any revised Legal Terms
              by your continued use of the Services after the date such revised Legal Terms are
              posted.
            </p>
            <p className="mt-5">
              The Services are intended for users who are at least 18 years old. Persons under the
              age of 18 are not permitted to use or register for the Services.
            </p>
            <p className="mt-5 font-bold">
              We recommend that you print a copy of these Legal Terms for your records.
            </p>
            <p className="text-lg font-extrabold my-12">TABLE OF CONTENTS</p>
            <div className="text-base font-medium">
              <p>1. OUR SERVICES</p>
              <p className="mt-5">2. INTELLECTUAL PROPERTY RIGHTS</p>
              <p className="mt-5">3. USER REPRESENTATIONS</p>
              <p className="mt-5">4. USER REGISTRATION</p>
              <p className="mt-5">5. PURCHASES AND PAYMENT</p>
              <p className="mt-5">6. CANCELLATION</p>
              <p className="mt-5">7. PROHIBITED ACTIVITIES</p>
              <p className="mt-5">8. USER GENERATED CONTRIBUTIONS</p>
              <p className="mt-5">9. CONTRIBUTION LICENSE</p>
              <p className="mt-5">10. MOBILE APPLICATION LICENSE</p>
              <p className="mt-5">11. ADVERTISERS</p>
              <p className="mt-5">12. SERVICES MANAGEMENT</p>
              <p className="mt-5">13. PRIVACY POLICY</p>
              <p className="mt-5">14. TERM AND TERMINATION</p>
              <p className="mt-5">15. MODIFICATIONS AND INTERRUPTIONS</p>
              <p className="mt-5">16. GOVERNING LAW</p>
              <p className="mt-5">17. DISPUTE RESOLUTION</p>
              <p className="mt-5">18. CORRECTIONS</p>
              <p className="mt-5">19. DISCLAIMER</p>
              <p className="mt-5">20. LIMITATIONS OF LIABILITY</p>
              <p className="mt-5">21. INDEMNIFICATION</p>
              <p className="mt-5">22. USER DATA</p>
              <p className="mt-5">23. ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES</p>
              <p className="mt-5">24. MISCELLANEOUS</p>
              <p className="mt-5">25. CONTACT US</p>
            </div>
            <p className="font-extrabold mt-12">1. OUR SERVICES</p>
            <p className="mt-5">
              The information provided when using the Services is not intended for distribution to
              or use by any person or entity in any jurisdiction or country where such distribution
              or use would be contrary to law or regulation or which would subject us to any
              registration requirement within such jurisdiction or country. Accordingly, those
              persons who choose to access the Services from other locations do so on their own
              initiative and are solely responsible for compliance with local laws, if and to the
              extent local laws are applicable.
            </p>
            <p className="font-extrabold mt-12">2. INTELLECTUAL PROPERTY RIGHTS</p>
            <p className="mt-5 font-bold">Our intellectual property</p>
            <p className="mt-5">
              We are the owner or the licensee of all intellectual property rights in our Services,
              including all source code, databases, functionality, software, website designs, audio,
              video, text, photographs, and graphics in the Services (collectively, the "Content"),
              as well as the trademarks, service marks, and logos contained therein (the "Marks").
            </p>
            <p className="mt-5">
              Our Content and Marks are protected by copyright and trademark laws (and various other
              intellectual property rights and unfair competition laws) and treaties in the United
              States and around the world.
            </p>
            <p className="mt-5">
              The Content and Marks are provided in or through the Services "AS IS" for your
              personal, non-commercial use or internal business purpose only.
            </p>
            <p className="mt-5 font-bold">Your use of our Services</p>
            <p className="mt-5 font-bold">
              Subject to your compliance with these Legal Terms, including the "PROHIBITED
              ACTIVITIES" section below, we grant you a non-exclusive, non-transferable, revocable
              license to:
            </p>
            <ul className="my-10 list-outside list-disc ml-5">
              <li>Access the Services; and</li>
              <li className="mt-3">
                Download or print a copy of any portion of the Content to which you have properly
                gained access.
              </li>
            </ul>
            <p>solely for your personal, non-commercial use or internal business purpose.</p>
            <p className="mt-5">
              Except as set out in this section or elsewhere in our Legal Terms, no part of the
              Services and no Content or Marks may be copied, reproduced, aggregated, republished,
              uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed,
              sold, licensed, or otherwise exploited for any commercial purpose whatsoever, without
              our express prior written permission.
            </p>
            <p className="mt-5">
              If you wish to make any use of the Services, Content, or Marks other than as set out
              in this section or elsewhere in our Legal Terms, please address your request to:{" "}
              <a
                href="mailto:contactsolkrd001@gmail.com"
                target="_blank"
                className="text-mediumblue break-words"
              >
                contactsolkrd001@gmail.com
              </a>
              . If we ever grant you the permission to post, reproduce, or publicly display any part
              of our Services or Content, you must identify us as the owners or licensors of the
              Services, Content, or Marks and ensure that any copyright or proprietary notice
              appears or is visible on posting, reproducing, or displaying our Content.
            </p>
            <p className="mt-5">
              We reserve all rights not expressly granted to you in and to the Services, Content,
              and Marks.
            </p>
            <p className="mt-5">
              Any breach of these Intellectual Property Rights will constitute a material breach of
              our Legal Terms and your right to use our Services will terminate immediately.
            </p>
            <p className="mt-5">Your submissions</p>
            <p className="mt-5">
              Please review this section and the "
              <span className="underline">PROHIBITED ACTIVITIES</span>" section carefully prior to
              using our Services to understand the (a) rights you give us and (b) obligations you
              have when you post or upload any content through the Services.
            </p>
            <p className="mt-5">
              Submissions: By directly sending us any question, comment, suggestion, idea, feedback,
              or other information about the Services ("Submissions"), you agree to assign to us all
              intellectual property rights in such Submission. You agree that we shall own this
              Submission and be entitled to its unrestricted use and dissemination for any lawful
              purpose, commercial or otherwise, without acknowledgment or compensation to you.
            </p>
            <p className="mt-5">
              You are responsible for what you post or upload: By sending us Submissions through any
              part of the Services you:
            </p>
            <ul className="my-10 list-outside list-disc ml-5">
              <li>
                confirm that you have read and agree with our "
                <span className="underline">PROHIBITED ACTIVITIES</span>" and will not post, send,
                publish, upload, or transmit through the Services any Submission that is illegal,
                harassing, hateful, harmful, defamatory, obscene, bullying, abusive, discriminatory,
                threatening to any person or group, sexually explicit, false, inaccurate, deceitful,
                or misleading;
              </li>
              <li className="mt-3">
                to the extent permissible by applicable law, waive any and all moral rights to any
                such Submission;
              </li>
              <li className="mt-3">
                warrant that any such Submission are original to you or that you have the necessary
                rights and licenses to submit such Submissions and that you have full authority to
                grant us the above-mentioned rights in relation to your Submissions; and
              </li>
              <li className="mt-3">
                warrant and represent that your Submissions do not constitute confidential
                information.
              </li>
            </ul>
            <p>
              You are solely responsible for your Submissions and you expressly agree to reimburse
              us for any and all losses that we may suffer because of your breach of (a) this
              section, (b) any third party’s intellectual property rights, or (c) applicable law.
            </p>
            <p className="font-extrabold mt-12">3. USER REPRESENTATIONS</p>
            <p className="mt-5">
              By using the Services, you represent and warrant that: (1) all registration
              information you submit will be true, accurate, current, and complete; (2) you will
              maintain the accuracy of such information and promptly update such registration
              information as necessary; (3) you have the legal capacity and you agree to comply with
              these Legal Terms; (4) you are not a minor in the jurisdiction in which you reside;
              (5) you will not access the Services through automated or non-human means, whether
              through a bot, script or otherwise; (6) you will not use the Services for any illegal
              or unauthorized purpose; and (7) your use of the Services will not violate any
              applicable law or regulation.
            </p>
            <p className="mt-5">
              If you provide any information that is untrue, inaccurate, not current, or incomplete,
              we have the right to suspend or terminate your account and refuse any and all current
              or future use of the Services (or any portion thereof).
            </p>
            <p className="font-extrabold mt-12">4. USER REGISTRATION</p>
            <p className="mt-5">
              You may be required to register to use the Services. You agree to keep your password
              confidential and will be responsible for all use of your account and password. We
              reserve the right to remove, reclaim, or change a username you select if we determine,
              in our sole discretion, that such username is inappropriate, obscene, or otherwise
              objectionable.
            </p>
            <p className="font-extrabold mt-12">5. PURCHASES AND PAYMENT</p>
            <p className="mt-5">We accept the following forms of payment:</p>
            <ul className="my-10 list-outside list-disc ml-5">
              <li>Visa</li>
              <li className="mt-3">Mastercard</li>
              <li className="mt-3">American Express</li>
              <li className="mt-3">Discover</li>
              <li className="mt-3">UPI</li>
              <li className="mt-3">Net Banking</li>
            </ul>
            <p>
              You agree to provide current, complete, and accurate purchase and account information
              for all purchases made via the Services. You further agree to promptly update account
              and payment information, including email address, payment method, and payment card
              expiration date, so that we can complete your transactions and contact you as needed.
              Sales tax will be added to the price of purchases as deemed required by us. We may
              change prices at any time. All payments shall be in INR.
            </p>
            <p className="mt-5">
              You agree to pay all charges at the prices then in effect for your purchases and any
              applicable shipping fees, and you authorize us to charge your chosen payment provider
              for any such amounts upon placing your order. We reserve the right to correct any
              errors or mistakes in pricing, even if we have already requested or received payment.
            </p>
            <p className="mt-5">
              We reserve the right to refuse any order placed through the Services. We may, in our
              sole discretion, limit or cancel quantities purchased per person, per household, or
              per order. These restrictions may include orders placed by or under the same customer
              account, the same payment method, and/or orders that use the same billing or shipping
              address. We reserve the right to limit or prohibit orders that, in our sole judgment,
              appear to be placed by dealers, resellers, or distributors.
            </p>
            <p className="font-extrabold mt-12">6. CANCELLATION</p>
            <p className="mt-5 font-bold">
              All purchases are non-refundable. You can cancel your purchase/subscription at any
              time by contacting us using the contact information provided below. Your cancellation
              will take effect at the end of the current paid term.
            </p>
            <p className="mt-5 font-bold">
              If you are unsatisfied with our Services, please email us at
            </p>
            <p className="mt-5">
              <a
                href="mailto:contactsolkrd001@gmail.com"
                target="_blank"
                className="text-mediumblue break-words"
              >
                contactsolkrd001@gmail.com.
              </a>
            </p>
            <p className="font-extrabold mt-12">7. PROHIBITED ACTIVITIES</p>
            <p className="mt-5">
              You may not access or use the Services for any purpose other than that for which we
              make the Services available. The Services may not be used in connection with any
              commercial endeavors except those that are specifically endorsed or approved by us.
            </p>
            <p className="mt-5">As a user of the Services, you agree not to:</p>
            <ul className="my-10 list-outside list-disc ml-5">
              <li>
                Systematically retrieve data or other content from the Services to create or
                compile, directly or indirectly, a collection, compilation, database, or directory
                without written permission from us.
              </li>
              <li className="mt-3">
                Trick, defraud, or mislead us and other users, especially in any attempt to learn
                sensitive account information such as user passwords.
              </li>
              <li className="mt-3">
                Circumvent, disable, or otherwise interfere with security-related features of the
                Services, including features that prevent or restrict the use or copying of any
                Content or enforce limitations on the use of the Services and/or the Content
                contained therein.
              </li>
              <li className="mt-3">
                Disparage, tarnish, or otherwise harm, in our opinion, us and/or the Services
              </li>
              <li className="mt-3">
                Use any information obtained from the Services in order to harass, abuse, or harm
                another person.
              </li>
              <li className="mt-3">
                Make improper use of our support services or submit false reports of abuse or
                misconduct.
              </li>
              <li className="mt-3">
                Use the Services in a manner inconsistent with any applicable laws or regulations.
              </li>
              <li className="mt-3">
                Engage in unauthorized framing of or linking to the Services.
              </li>
              <li className="mt-3">
                Upload or transmit (or attempt to upload or to transmit) viruses, Trojan horses, or
                other material, including excessive use of capital letters and spamming (continuous
                posting of repetitive text), that interferes with any party’s uninterrupted use and
                enjoyment of the Services or modifies, impairs, disrupts, alters, or interferes with
                the use, features, functions, operation, or maintenance of the Services.
              </li>
              <li className="mt-3">
                Engage in any automated use of the system, such as using scripts to send comments or
                messages, or using any data mining, robots, or similar data gathering and extraction
                tools.
              </li>
              <li className="mt-3">
                Delete the copyright or other proprietary rights notice from any Content.
              </li>
              <li className="mt-3">
                Attempt to impersonate another user or person or use the username of another user.
              </li>
              <li className="mt-3">
                Upload or transmit (or attempt to upload or to transmit) any material that acts as a
                passive or active information collection or transmission mechanism, including
                without limitation, clear graphics interchange formats ("gifs"), 1×1 pixels, web
                bugs, cookies, or other similar devices (sometimes referred to as "spyware" or
                "passive collection mechanisms" or "pcms").
              </li>
              <li className="mt-3">
                Interfere with, disrupt, or create an undue burden on the Services or the networks
                or services connected to the Services.
              </li>
              <li className="mt-3">
                Harass, annoy, intimidate, or threaten any of our employees or agents engaged in
                providing any portion of the Services to you.
              </li>
              <li className="mt-3">
                Attempt to bypass any measures of the Services designed to prevent or restrict
                access to the Services, or any portion of the Services.
              </li>
              <li className="mt-3">
                Copy or adapt the Services' software, including but not limited to Flash, PHP, HTML,
                JavaScript, or other code.
              </li>
              <li className="mt-3">
                Except as permitted by applicable law, decipher, decompile, disassemble, or reverse
                engineer any of the software comprising or in any way making up a part of the
                Services.
              </li>
              <li className="mt-3">
                Except as may be the result of standard search engine or Internet browser usage,
                use, launch, develop, or distribute any automated system, including without
                limitation, any spider, robot, cheat utility, scraper, or offline reader that
                accesses the Services, or use or launch any unauthorized script or other software.
              </li>
              <li className="mt-3">
                Use a buying agent or purchasing agent to make purchases on the Services.
              </li>
              <li className="mt-3">
                Make any unauthorized use of the Services, including collecting usernames and/or
                email addresses of users by electronic or other means for the purpose of sending
                unsolicited email, or creating user accounts by automated means or under false
                pretenses.
              </li>
              <li className="mt-3">
                Use the Services as part of any effort to compete with us or otherwise use the
                Services and/or the Content for any revenue-generating endeavor or commercial
                enterprise.
              </li>
              <li className="mt-3">Sell or otherwise transfer your profile.</li>
              <li className="mt-3">
                Use the Services to advertise or offer to sell goods and services.
              </li>
            </ul>
            <p className="font-extrabold mt-12">8. USER GENERATED CONTRIBUTIONS</p>
            <p className="mt-5">The Services does not offer users to submit or post content.</p>
            <p className="font-extrabold mt-12">9. CONTRIBUTION LICENSE</p>
            <p className="mt-5">
              You and Services agree that we may access, store, process, and use any information and
              personal data that you provide following the terms of the Privacy Policy and your
              choices (including settings).
            </p>
            <p className="mt-5">
              By submitting suggestions or other feedback regarding the Services, you agree that we
              can use and share such feedback for any purpose without compensation to you.
            </p>
            <p className="font-extrabold mt-12">10. MOBILE APPLICATION LICENSE</p>
            <p className="mt-5 font-bold">Use License</p>
            <p className="mt-5">
              If you access the Services via the App, then we grant you a revocable, non-exclusive,
              non-transferable, limited right to install and use the App on wireless electronic
              devices owned or controlled by you, and to access and use the App on such devices
              strictly in accordance with the terms and conditions of this mobile application
              license contained in these Legal Terms. You shall not: (1) except as permitted by
              applicable law, decompile, reverse engineer, disassemble, attempt to derive the source
              code of, or decrypt the App; (2) make any modification, adaptation, improvement,
              enhancement, translation, or derivative work from the App; (3) violate any applicable
              laws, rules, or regulations in connection with your access or use of the App; (4)
              remove, alter, or obscure any proprietary notice (including any notice of copyright or
              trademark) posted by us or the licensors of the App; (5) use the App for any
              revenue-generating endeavor, commercial enterprise, or other purpose for which it is
              not designed or intended; (6) make the App available over a network or other
              environment permitting access or use by multiple devices or users at the same time;
              (7) use the App for creating a product, service, or software that is, directly or
              indirectly, competitive with or in any way a substitute for the App; (8) use the App
              to send automated queries to any website or to send any unsolicited commercial email;
              or (9) use any proprietary information or any of our interfaces or our other
              intellectual property in the design, development, manufacture, licensing, or
              distribution of any applications, accessories, or devices for use with the App.
            </p>
            <p className="mt-5">Apple and Android Devices</p>
            <p className="mt-5">
              The following terms apply when you use the App obtained from either the Apple Store or
              Google Play (each an "App Distributor") to access the Services: (1) the license
              granted to you for our App is limited to a non-transferable license to use the
              application on a device that utilizes the Apple iOS or Android operating systems, as
              applicable, and in accordance with the usage rules set forth in the applicable App
              Distributor’s terms of service; (2) we are responsible for providing any maintenance
              and support services with respect to the App as specified in the terms and conditions
              of this mobile application license contained in these Legal Terms or as otherwise
              required under applicable law, and you acknowledge that each App Distributor has no
              obligation whatsoever to furnish any maintenance and support services with respect to
              the App; (3) in the event of any failure of the App to conform to any applicable
              warranty, you may notify the applicable App Distributor, and the App Distributor, in
              accordance with its terms and policies, may refund the purchase price, if any, paid
              for the App, and to the maximum extent permitted by applicable law, the App
              Distributor will have no other warranty obligation whatsoever with respect to the App;
              (4) you represent and warrant that (i) you are not located in a country that is
              subject to a US government embargo, or that has been designated by the US government
              as a "terrorist supporting" country and (ii) you are not listed on any US government
              list of prohibited or restricted parties; (5) you must comply with applicable
              third-party terms of agreement when using the App, e.g., if you have a VoIP
              application, then you must not be in violation of their wireless data service
              agreement when using the App; and (6) you acknowledge and agree that the App
              Distributors are third-party beneficiaries of the terms and conditions in this mobile
              application license contained in these Legal Terms, and that each App Distributor will
              have the right (and will be deemed to have accepted the right) to enforce the terms
              and conditions in this mobile application license contained in these Legal Terms
              against you as a third-party beneficiary thereof.
            </p>
            <p className="font-extrabold mt-12">11. ADVERTISERS</p>
            <p className="mt-5">
              We allow advertisers to display their advertisements and other information in certain
              areas of the Services, such as sidebar advertisements or banner advertisements. We
              simply provide the space to place such advertisements, and we have no other
              relationship with advertisers.
            </p>
            <p className="font-extrabold mt-12">12. SERVICES MANAGEMENT</p>
            <p className="mt-5 font-bold">
              We reserve the right, but not the obligation, to: (1) monitor the Services for
              violations of these Legal Terms; (2) take appropriate legal action against anyone who,
              in our sole discretion, violates the law or these Legal Terms, including without
              limitation, reporting such user to law enforcement authorities; (3) in our sole
              discretion and without limitation, refuse, restrict access to, limit the availability
              of, or disable (to the extent technologically feasible) any of your Contributions or
              any portion thereof; (4) in our sole discretion and without limitation, notice, or
              liability, to remove from the Services or otherwise disable all files and content that
              are excessive in size or are in any way burdensome to our systems; and (5) otherwise
              manage the Services in a manner designed to protect our rights and property and to
              facilitate the proper functioning of the Services.
            </p>
            <p className="font-extrabold mt-12">13. PRIVACY POLICY</p>
            <p className="mt-5">
              We care about data privacy and security. Please review our Privacy Policy:{" "}
              <Link to="privacypolicy" className="text-mediumblue break-words">
                {window.location.origin}/privacypolicy
              </Link>
              . By using the Services, you agree to be bound by our Privacy Policy, which is
              incorporated into these Legal Terms. Please be advised the Services are hosted in
              India. If you access the Services from any other region of the world with laws or
              other requirements governing personal data collection, use, or disclosure that differ
              from applicable laws in India, then through your continued use of the Services, you
              are transferring your data to India, and you expressly consent to have your data
              transferred to and processed in India.
            </p>
            <p className="font-extrabold mt-12">14. TERM AND TERMINATION</p>
            <p className="mt-5">
              These Legal Terms shall remain in full force and effect while you use the Services.
              WITHOUT LIMITING ANY OTHER PROVISION OF THESE LEGAL TERMS, WE RESERVE THE RIGHT TO, IN
              OUR SOLE DISCRETION AND WITHOUT NOTICE OR LIABILITY, DENY ACCESS TO AND USE OF THE
              SERVICES (INCLUDING BLOCKING CERTAIN IP ADDRESSES), TO ANY PERSON FOR ANY REASON OR
              FOR NO REASON, INCLUDING WITHOUT LIMITATION FOR BREACH OF ANY REPRESENTATION,
              WARRANTY, OR COVENANT CONTAINED IN THESE LEGAL TERMS OR OF ANY APPLICABLE LAW OR
              REGULATION. WE MAY TERMINATE YOUR USE OR PARTICIPATION IN THE SERVICES OR DELETE YOUR
              ACCOUNT AND ANY CONTENT OR INFORMATION THAT YOU POSTED AT ANY TIME, WITHOUT WARNING,
              IN OUR SOLE DISCRETION.
            </p>
            <p className="mt-5">
              If we terminate or suspend your account for any reason, you are prohibited from
              registering and creating a new account under your name, a fake or borrowed name, or
              the name of any third party, even if you may be acting on behalf of the third party.
              In addition to terminating or suspending your account, we reserve the right to take
              appropriate legal action, including without limitation pursuing civil, criminal, and
              injunctive redress.
            </p>
            <p className="font-extrabold mt-12">15. MODIFICATIONS AND INTERRUPTIONS</p>
            <p className="mt-5">
              We reserve the right to change, modify, or remove the contents of the Services at any
              time or for any reason at our sole discretion without notice. However, we have no
              obligation to update any information on our Services. We will not be liable to you or
              any third party for any modification, price change, suspension, or discontinuance of
              the Services.
            </p>
            <p className="mt-5">
              We cannot guarantee the Services will be available at all times. We may experience
              hardware, software, or other problems or need to perform maintenance related to the
              Services, resulting in interruptions, delays, or errors. We reserve the right to
              change, revise, update, suspend, discontinue, or otherwise modify the Services at any
              time or for any reason without notice to you. You agree that we have no liability
              whatsoever for any loss, damage, or inconvenience caused by your inability to access
              or use the Services during any downtime or discontinuance of the Services. Nothing in
              these Legal Terms will be construed to obligate us to maintain and support the
              Services or to supply any corrections, updates, or releases in connection therewith.
            </p>
            <p className="font-extrabold mt-12">16. GOVERNING LAW</p>
            <p className="mt-5">
              These Legal Terms shall be governed by and defined following the laws of India. Star
              SMPS Pvt Ltd and yourself irrevocably consent that the courts of India shall have
              exclusive jurisdiction to resolve any dispute which may arise in connection with these
              Legal Terms.
            </p>
            <p className="font-extrabold mt-12">17. DISPUTE RESOLUTION</p>
            <p className="mt-5 font-bold">
              You agree to irrevocably submit all disputes related to these Legal Terms or the legal
              relationship established by these Legal Terms to the jurisdiction of the India courts.
              Star SMPS Pvt Ltd shall also maintain the right to bring proceedings as to the
              substance of the matter in the courts of the country where you reside or, if these
              Legal Terms are entered into in the course of your trade or profession, the state of
              your principal place of business.
            </p>
            <p className="font-extrabold mt-12">18. CORRECTIONS</p>
            <p className="mt-5 font-bold">
              There may be information on the Services that contains typographical errors,
              inaccuracies, or omissions, including descriptions, pricing, availability, and various
              other information. We reserve the right to correct any errors, inaccuracies, or
              omissions and to change or update the information on the Services at any time, without
              prior notice.
            </p>
            <p className="font-extrabold mt-12">19. DISCLAIMER</p>
            <p className="mt-5">
              THE SERVICES ARE PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU AGREE THAT YOUR USE
              OF THE SERVICES WILL BE AT YOUR SOLE RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, WE
              DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION WITH THE SERVICES AND YOUR
              USE THEREOF, INCLUDING, WITHOUT LIMITATION, THE IMPLIED WARRANTIES OF MERCHANTABILITY,
              FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE MAKE NO WARRANTIES OR
              REPRESENTATIONS ABOUT THE ACCURACY OR COMPLETENESS OF THE SERVICES' CONTENT OR THE
              CONTENT OF ANY WEBSITES OR MOBILE APPLICATIONS LINKED TO THE SERVICES AND WE WILL
              ASSUME NO LIABILITY OR RESPONSIBILITY FOR ANY (1) ERRORS, MISTAKES, OR INACCURACIES OF
              CONTENT AND MATERIALS, (2) PERSONAL INJURY OR PROPERTY DAMAGE, OF ANY NATURE
              WHATSOEVER, RESULTING FROM YOUR ACCESS TO AND USE OF THE SERVICES, (3) ANY
              UNAUTHORIZED ACCESS TO OR USE OF OUR SECURE SERVERS AND/OR ANY AND ALL PERSONAL
              INFORMATION AND/OR FINANCIAL INFORMATION STORED THEREIN, (4) ANY INTERRUPTION OR
              CESSATION OF TRANSMISSION TO OR FROM THE SERVICES, (5) ANY BUGS, VIRUSES, TROJAN
              HORSES, OR THE LIKE WHICH MAY BE TRANSMITTED TO OR THROUGH THE SERVICES BY ANY THIRD
              PARTY, AND/OR (6) ANY ERRORS OR OMISSIONS IN ANY CONTENT AND MATERIALS OR FOR ANY LOSS
              OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF ANY CONTENT POSTED,
              TRANSMITTED, OR OTHERWISE MADE AVAILABLE VIA THE SERVICES. WE DO NOT WARRANT, ENDORSE,
              GUARANTEE, OR ASSUME RESPONSIBILITY FOR ANY PRODUCT OR SERVICE ADVERTISED OR OFFERED
              BY A THIRD PARTY THROUGH THE SERVICES, ANY HYPERLINKED WEBSITE, OR ANY WEBSITE OR
              MOBILE APPLICATION FEATURED IN ANY BANNER OR OTHER ADVERTISING, AND WE WILL NOT BE A
              PARTY TO OR IN ANY WAY BE RESPONSIBLE FOR MONITORING ANY TRANSACTION BETWEEN YOU AND
              ANY THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES. AS WITH THE PURCHASE OF A PRODUCT
              OR SERVICE THROUGH ANY MEDIUM OR IN ANY ENVIRONMENT, YOU SHOULD USE YOUR BEST JUDGMENT
              AND EXERCISE CAUTION WHERE APPROPRIATE.
            </p>
            <p className="font-extrabold mt-12">20. LIMITATIONS OF LIABILITY</p>
            <p className="mt-5">
              IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO YOU OR ANY
              THIRD PARTY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL,
              OR PUNITIVE DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE, LOSS OF DATA, OR OTHER
              DAMAGES ARISING FROM YOUR USE OF THE SERVICES, EVEN IF WE HAVE BEEN ADVISED OF THE
              POSSIBILITY OF SUCH DAMAGES. NOTWITHSTANDING ANYTHING TO THE CONTRARY CONTAINED
              HEREIN, OUR LIABILITY TO YOU FOR ANY CAUSE WHATSOEVER AND REGARDLESS OF THE FORM OF
              THE ACTION, WILL AT ALL TIMES BE LIMITED TO THE AMOUNT PAID, IF ANY, BY YOU TO US.{" "}
              <span className="font-bold">
                CERTAIN US STATE LAWS AND INTERNATIONAL LAWS DO NOT ALLOW LIMITATIONS ON IMPLIED
                WARRANTIES OR THE EXCLUSION OR LIMITATION OF CERTAIN DAMAGES. IF THESE LAWS APPLY TO
                YOU, SOME OR ALL OF THE ABOVE DISCLAIMERS OR LIMITATIONS MAY NOT APPLY TO YOU, AND
                YOU MAY HAVE ADDITIONAL RIGHTS.
              </span>
            </p>
            <p className="font-extrabold mt-12">21. INDEMNIFICATION</p>
            <p className="mt-5">
              You agree to defend, indemnify, and hold us harmless, including our subsidiaries,
              affiliates, and all of our respective officers, agents, partners, and employees, from
              and against any loss, damage, liability, claim, or demand, including reasonable
              attorneys’ fees and expenses, made by any third party due to or arising out of: (1)
              use of the Services; (2) breach of these Legal Terms; (3) any breach of your
              representations and warranties set forth in these Legal Terms; (4) your violation of
              the rights of a third party, including but not limited to intellectual property
              rights; or (5) any overt harmful act toward any other user of the Services with whom
              you connected via the Services. Notwithstanding the foregoing, we reserve the right,
              at your expense, to assume the exclusive defense and control of any matter for which
              you are required to indemnify us, and you agree to cooperate, at your expense, with
              our defense of such claims. We will use reasonable efforts to notify you of any such
              claim, action, or proceeding which is subject to this indemnification upon becoming
              aware of it.
            </p>
            <p className="font-extrabold mt-12">22. USER DATA</p>
            <p className="mt-5">
              We will maintain certain data that you transmit to the Services for the purpose of
              managing the performance of the Services, as well as data relating to your use of the
              Services. Although we perform regular routine backups of data, you are solely
              responsible for all data that you transmit or that relates to any activity you have
              undertaken using the Services. You agree that we shall have no liability to you for
              any loss or corruption of any such data, and you hereby waive any right of action
              against us arising from any such loss or corruption of such data.
            </p>
            <p className="font-extrabold mt-12">
              23. ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES
            </p>
            <p className="mt-5">
              Visiting the Services, sending us emails, and completing online forms constitute
              electronic communications. You consent to receive electronic communications, and you
              agree that all agreements, notices, disclosures, and other communications we provide
              to you electronically, via email and on the Services, satisfy any legal requirement
              that such communication be in writing. YOU HEREBY AGREE TO THE USE OF ELECTRONIC
              SIGNATURES, CONTRACTS, ORDERS, AND OTHER RECORDS, AND TO ELECTRONIC DELIVERY OF
              NOTICES, POLICIES, AND RECORDS OF TRANSACTIONS INITIATED OR COMPLETED BY US OR VIA THE
              SERVICES. You hereby waive any rights or requirements under any statutes, regulations,
              rules, ordinances, or other laws in any jurisdiction which require an original
              signature or delivery or retention of non-electronic records, or to payments or the
              granting of credits by any means other than electronic means.
            </p>
            <p className="font-extrabold mt-12">24. MISCELLANEOUS</p>
            <p className="mt-5">
              These Legal Terms and any policies or operating rules posted by us on the Services or
              in respect to the Services constitute the entire agreement and understanding between
              you and us. Our failure to exercise or enforce any right or provision of these Legal
              Terms shall not operate as a waiver of such right or provision. These Legal Terms
              operate to the fullest extent permissible by law. We may assign any or all of our
              rights and obligations to others at any time. We shall not be responsible or liable
              for any loss, damage, delay, or failure to act caused by any cause beyond our
              reasonable control. If any provision or part of a provision of these Legal Terms is
              determined to be unlawful, void, or unenforceable, that provision or part of the
              provision is deemed severable from these Legal Terms and does not affect the validity
              and enforceability of any remaining provisions. There is no joint venture,
              partnership, employment or agency relationship created between you and us as a result
              of these Legal Terms or use of the Services. You agree that these Legal Terms will not
              be construed against us by virtue of having drafted them. You hereby waive any and all
              defenses you may have based on the electronic form of these Legal Terms and the lack
              of signing by the parties hereto to execute these Legal Terms.
            </p>
            <p className="font-extrabold mt-12">25. CONTACT US</p>
            <p className="mt-5">
              In order to resolve a complaint regarding the Services or to receive further
              information regarding use of the Services, please contact us at:
            </p>
            <p className="mt-5 font-bold">Star SMPS Pvt Ltd</p>
            <p className="mt-5 font-bold">Sonepat, Haryana 131001</p>
            <p className="mt-5 font-bold">India</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Index;
