import React from "react";
import Hero from '../../components/common/common-hero/common-hero'

const TermsandConditions = () => {
  return (
    <section>
      <Hero
                          title="Terms & Conditions"
                          breadcrumbs={[{ label: "Home", link: "#" }]}
                          backgroundImage="/images/commonhero/14.webp"
      />
      <section className="font-sans antialiased bg-white py-12 ">
      <div className=" mx-auto px-4 xl:px-12 w-full">
        {/* Main Title */}
        {/* <div className="text-center mb-12 pb-8 border-b-2 border-indigo-600">
          <h1 className="text-4xl md:text-5xl font-bold text-indigo-600 mb-3">
            Conference Policies & Information
          </h1>
          <div className="w-24 h-1 bg-amber-400 mx-auto mt-4"></div>
        </div> */}

        {/* Terms and Conditions Section */}
        <div className="mb-4">
          <h2 className="text-3xl font-bold text-indigo-600 mb-6 pb-3 border-b border-indigo-200">
            Terms and Conditions
          </h2>
          <ul className="space-y-4 text-gray-700 leading-relaxed">
            <li className="flex items-start gap-3">
              <span className="text-amber-400 font-bold mt-1">•</span>
              <span>By registering for the conference, you hereby agree with the terms and conditions.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-amber-400 font-bold mt-1">•</span>
              <span>The organization reserves the right to make alterations to the program, date and/or venue at any time without prior notice.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-amber-400 font-bold mt-1">•</span>
              <span>The organization is not responsible for any loss or damage as a result of substitution, alteration, postponement or cancellation of an event due to causes beyond its control including without limitation, force majeure, natural disasters, sabotage, accident, trade or industrial disputes, terrorism, strikes or hostilities.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-amber-400 font-bold mt-1">•</span>
              <span>The organization reserves the right and holds the sole discretion to cancel any conference at any time in case of any unavoidable and unforeseeable circumstances. The organizer will have no further liability to the client.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-amber-400 font-bold mt-1">•</span>
              <span>Registrations remain valid for the event with new dates or for future editions if the conference has to be postponed by causes beyond organizer control. The refund policy is not applicable to this condition.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-amber-400 font-bold mt-1">•</span>
              <span>In the event of cancellation, the organization will use reasonable and suitable alternative arrangements such as posting the news of cancellation on the appropriate event website to alert those who have booked or purchased tickets to attend the event.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-amber-400 font-bold mt-1">•</span>
              <span>Delegates are responsible for checking this information prior to the event. We advised you to keep checking the website for updates of our conference.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-amber-400 font-bold mt-1">•</span>
              <span>The organizers will not accept any liability for personal injuries or for loss or damage to property belonging to the delegates, either during, or as a result of the conference.</span>
            </li>
          </ul>
        </div>

        {/* Privacy Policy Section */}
        <div className="mb-4">
          <h2 className="text-3xl font-bold text-indigo-600 mb-6 pb-3 border-b border-indigo-200">
            Privacy Policy
          </h2>

          <div className="space-y-6 text-gray-700 leading-relaxed">
            <div>
              <h3 className="text-xl font-bold text-indigo-600 mb-3">
                1. Information
              </h3>
              <p className="mb-3">
                We collect personal information that you voluntarily provide to us when registering for conferences, subscribing to newsletters, submitting inquiries, or participating in surveys or forums on{" "}
                <a
                  href="https://icetmrs.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-amber-400 font-semibold underline transition-colors duration-200"
                >
                  https://icetmrs.com
                </a>
              </p>
              <p className="mb-2 font-semibold">This information may include:</p>
              <ul className="space-y-2 ml-6">
                <li className="flex items-start gap-3">
                  <span className="text-amber-400 font-bold mt-1">•</span>
                  <span>Name</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-400 font-bold mt-1">•</span>
                  <span>Email address</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-400 font-bold mt-1">•</span>
                  <span>Contact number</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-400 font-bold mt-1">•</span>
                  <span>Mailing address</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-400 font-bold mt-1">•</span>
                  <span>Payment information</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-400 font-bold mt-1">•</span>
                  <span>Any other information you provide voluntarily</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-indigo-600 mb-3">
                2. How We Use Your Information
              </h3>
              <p className="mb-2">
                We use the information we collect for the following purposes:
              </p>
              <ul className="space-y-2 ml-6">
                <li className="flex items-start gap-3">
                  <span className="text-amber-400 font-bold mt-1">•</span>
                  <span>To process registrations for events and conferences</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-400 font-bold mt-1">•</span>
                  <span>To communicate with you regarding updates, announcements and relevant event information</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-400 font-bold mt-1">•</span>
                  <span>To respond to inquiries or provide customer support</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-400 font-bold mt-1">•</span>
                  <span>To manage website operations and improve our services</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-400 font-bold mt-1">•</span>
                  <span>To process payments and billing for conference participation or services</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-400 font-bold mt-1">•</span>
                  <span>For marketing purposes (only if you have given explicit consent)</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-indigo-600 mb-3">
                3. Sharing of Information
              </h3>
              <p className="mb-2">
                We do not sell, trade or rent your personal information to third parties. However, we may share your information with:
              </p>
              <ul className="space-y-2 ml-6">
                <li className="flex items-start gap-3">
                  <span className="text-amber-400 font-bold mt-1">•</span>
                  <span>Service providers and vendors assisting us with conference logistics, payment processing and website management.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-400 font-bold mt-1">•</span>
                  <span>Law enforcement agencies or governmental bodies when required by law.</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-indigo-600 mb-3">
                4. Your Rights
              </h3>
              <p className="mb-2">You have the right to:</p>
              <ul className="space-y-2 ml-6">
                <li className="flex items-start gap-3">
                  <span className="text-amber-400 font-bold mt-1">•</span>
                  <span>Access, update or delete your personal information.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-400 font-bold mt-1">•</span>
                  <span>Opt-out of marketing communications.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-400 font-bold mt-1">•</span>
                  <span>Request the restriction of processing of your data in certain circumstances.</span>
                </li>
              </ul>
              <p className="mt-3">
                To exercise any of these rights, please contact us at{" "}
                <a
                  href="mailto:info@icetmrs.com"
                  className="text-indigo-600 hover:text-amber-400 font-semibold underline transition-colors duration-200"
                >
                  info@icetmrs.com
                </a>
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-indigo-600 mb-3">
                5. Changes to This Privacy Policy
              </h3>
              <p>
                We reserve the right to update this Privacy Policy at any time. Any changes will be posted on this page and we encourage you to review this page regularly to stay informed.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-indigo-600 mb-3">
                6. Contact Us
              </h3>
              <p className="mb-2">
                If you have any questions about this Privacy Policy or how we handle your personal information, please contact us at:
              </p>
              <ul className="space-y-2 ml-6">
                <li className="flex items-start gap-3">
                  <span className="text-amber-400 font-bold mt-1">•</span>
                  <span>
                    Email:{" "}
                    <a
                      href="mailto:info@icetmrs.com"
                      className="text-indigo-600 hover:text-amber-400 font-semibold underline transition-colors duration-200"
                    >
                      info@icetmrs.com
                    </a>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-400 font-bold mt-1">•</span>
                  <span>Phone: +91 8072381719</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Cancellation Policy Section */}
        <div className="mb-4">
          <h2 className="text-3xl font-bold text-indigo-600 mb-6 pb-3 border-b border-indigo-200">
            Cancellation Policy
          </h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            If the registrant is unable to attend, please note the following cancellation policy, which takes into account advance payments made for venue, printing, shipping, hotels and other overheads:
          </p>
          <ul className="space-y-3 text-gray-700 leading-relaxed">
            <li className="flex items-start gap-3">
              <span className="text-amber-400 font-bold text-xl mt-1">•</span>
              <span className="font-semibold">50 Days Before Conference: 40% refundable</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-amber-400 font-bold text-xl mt-1">•</span>
              <span className="font-semibold">30-40 Days Before Conference: 35% refundable</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-amber-400 font-bold text-xl mt-1">•</span>
              <span className="font-semibold">Less Than 30 Days Before Conference: No refunds will be issued</span>
            </li>
          </ul>
        </div>

        {/* Refund Policy Section */}
        <div className="mb-4">
          <h2 className="text-3xl font-bold text-indigo-600 mb-6 pb-3 border-b border-indigo-200">
            Refund Policy
          </h2>
          <p className="mb-6 text-gray-700 leading-relaxed">
            Transfer of Registration: Registration can be transferred to another event organized by the same organization of the registrant's choice.
          </p>
          <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded">
            <p className="text-gray-800 leading-relaxed">
              <span className="font-bold text-lg text-indigo-600">Note:</span> Refunds will be processed 2-4 weeks after the conference, excluding transaction charges. Refund/Cancellation Policy is not applicable if the conference is postponed due to natural disasters or unpredictable activities beyond organizers control including without limitation, force majeure, natural disasters, sabotage, accident, trade or industrial disputes, terrorism, strikes or hostilities.
            </p>
          </div>
        </div>

        {/* VISA Information Section */}
        <div className="mb-4">
          <h2 className="text-3xl font-bold text-indigo-600 mb-6 pb-3 border-b border-indigo-200">
            VISA Information
          </h2>
          <ul className="space-y-4 text-gray-700 leading-relaxed">
            <li className="flex items-start gap-3">
              <span className="text-amber-400 font-bold mt-1">•</span>
              <span>Confworld Educational Research and Development Association (CERADA) will not directly contact embassies and consulates on behalf of visa applicants. All delegates or invitees should apply for a Business Visa only.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-amber-400 font-bold mt-1">•</span>
              <span>Visa issues, including the inability to obtain a visa, do not fall under the consideration of the cancellation policy of the Confworld Educational Research and Development Association (CERADA).</span>
            </li>
          </ul>
        </div>

        {/* Venue Information Section */}
        <div className="mb-4">
          <h2 className="text-3xl font-bold text-indigo-600 mb-6 pb-3 border-b border-indigo-200">
            Venue
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            The conference will be held at{" "}
            <span className="font-bold text-indigo-600 text-xl">Istanbul, Turkey</span>.
          </p>
        </div>

        {/* Contact Information Section */}
        <div className="bg-gradient-to-r from-indigo-600 to-indigo-700 p-8 md:p-10 rounded-lg text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Conference Inquiries
          </h2>
          <div className="w-full rounded h-0.5 bg-amber-400 mx-auto mb-6"></div>
          <p className="text-indigo-100 text-lg mb-6">
            For conference registration and paper submission inquiries, please contact:
          </p>
          <div className="bg-white inline-block px-8 py-6 rounded-lg">
            <p className="text-indigo-600 text-2xl font-bold mb-3">Ms. Aishwarya S</p>
            <p className="text-gray-700 text-lg mb-2">
              Mobile:{" "}
              <a
                href="tel:+918072381719"
                className="text-indigo-600 hover:text-amber-400 font-semibold underline transition-colors duration-200"
              >
                +91 8072381719
              </a>
            </p>
            <p className="text-gray-700 text-lg">
              E-mail:{" "}
              <a
                href="mailto:info@icetmrs.com"
                className="text-indigo-600 hover:text-amber-400 font-semibold underline transition-colors duration-200"
              >
                info@icetmrs.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
    </section>
    
  );
};

export default TermsandConditions;