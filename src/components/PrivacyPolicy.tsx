import { useEffect } from 'react';

export function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white text-gray-800 p-6 md:p-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">Privacy Policy</h1>
        <p className="mb-4 text-sm text-gray-600 text-center">Last Updated: March 12, 2026</p>

        <p className="mb-6">
          Bencomo Dental ("us", "we", or "our") operates the {window.location.hostname} website (the "Service"). This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data. We use your data to provide and improve the Service. By using the Service, you agree to the collection and use of information in accordance with this policy.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Information Collection and Use</h2>
        <p className="mb-6">
          We collect several different types of information for various purposes to provide and improve our Service to you.
        </p>

        <h3 className="text-xl font-semibold mb-3">Types of Data Collected</h3>
        <h4 className="text-lg font-semibold mb-2">Personal Data</h4>
        <p className="mb-4">
          While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). Personally identifiable information may include, but is not limited to:
        </p>
        <ul className="list-disc list-inside mb-6 pl-4">
          <li>Email address</li>
          <li>First name and last name</li>
          <li>Phone number</li>
          <li>Details regarding your dental health or treatment interests (in the contact form message)</li>
        </ul>

        <h4 className="text-lg font-semibold mb-2">Insurance Verification Data</h4>
        <p className="mb-4">
          When you submit an insurance verification request through our Insurance Verification form, we may collect additional sensitive information, including but not limited to:
        </p>
        <ul className="list-disc list-inside mb-6 pl-4">
          <li>Full legal name and date of birth</li>
          <li>Home address</li>
          <li>Insurance provider name and member ID or Social Security Number</li>
          <li>Employer name</li>
          <li>Photos of both sides of your insurance card</li>
        </ul>
        <p className="mb-6">
          This information is collected solely for the purpose of verifying your dental insurance coverage and coordinating your treatment plan. It is transmitted securely and handled in accordance with applicable medical privacy standards. We do not store this information beyond what is necessary to complete the verification process.
        </p>

        <h4 className="text-lg font-semibold mb-2">Usage Data</h4>
        <p className="mb-4">
          We may also collect information on how the Service is accessed and used ("Usage Data"). This Usage Data may include information such as your computer's Internet Protocol address (e.g., IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers, and other diagnostic data.
        </p>

        <h4 className="text-lg font-semibold mb-2">Tracking & Cookies Data</h4>
        <p className="mb-6">
          We use cookies and similar tracking technologies to track the activity on our Service and hold certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service. We use this data for purposes such as:
        </p>
        <ul className="list-disc list-inside mb-6 pl-4">
          <li>To operate our Service.</li>
          <li>To remember your preferences and various settings.</li>
          <li>For advertising and remarketing purposes, including with Google Ads.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">Use of Data</h2>
        <p className="mb-6">
          Bencomo Dental uses the collected data for various purposes:
        </p>
        <ul className="list-disc list-inside mb-6 pl-4">
          <li>To provide and maintain the Service</li>
          <li>To notify you about changes to our Service</li>
          <li>To provide customer care and support, including responding to your inquiries</li>
          <li>To verify your dental insurance coverage and coordinate your treatment plan</li>
          <li>To provide analysis or valuable information so that we can improve the Service</li>
          <li>To monitor the usage of the Service</li>
          <li>To detect, prevent and address technical issues</li>
          <li>To provide you with news, special offers, and general information about other goods, services, and events which we offer that are similar to those that you have already enquired about unless you have opted not to receive such information.</li>
          <li>For advertising and remarketing purposes, which may include showing ads to you on third-party websites (like Google) after you have visited our Service.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">Sensitive Health and Insurance Information</h2>
        <p className="mb-6">
          Information submitted through the Insurance Verification form, including insurance card images and member ID or Social Security Number, is considered sensitive personal data. We take the following measures to protect it:
        </p>
        <ul className="list-disc list-inside mb-6 pl-4">
          <li>All data is transmitted over encrypted HTTPS connections.</li>
          <li>Insurance data is only accessible by authorized Bencomo Dental staff for the purpose of verifying your coverage.</li>
          <li>We do not sell, rent, or share your insurance or health-related information with third parties for marketing purposes.</li>
          <li>Images of your insurance card are used solely to verify your coverage and are not stored permanently on our servers.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">Disclosure of Data</h2>
        <h3 className="text-xl font-semibold mb-3">Legal Requirements</h3>
        <p className="mb-6">
          Bencomo Dental may disclose your Personal Data in the good faith belief that such action is necessary to:
        </p>
        <ul className="list-disc list-inside mb-6 pl-4">
          <li>To comply with a legal obligation</li>
          <li>To protect and defend the rights or property of Bencomo Dental</li>
          <li>To prevent or investigate possible wrongdoing in connection with the Service</li>
          <li>To protect the personal safety of users of the Service or the public</li>
          <li>To protect against legal liability</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">Service Providers</h2>
        <p className="mb-6">
          We may employ third-party companies and individuals to facilitate our Service ("Service Providers"), to provide the Service on our behalf, to perform Service-related services, or to assist us in analyzing how our Service is used. These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose. This includes:
        </p>
        <ul className="list-disc list-inside mb-6 pl-4">
          <li><strong>Google Ads:</strong> We use Google Ads for advertising and remarketing. Google may use cookies to serve ads based on your past visits to our website. You can opt-out of Google's use of cookies by visiting Google's Ads Settings.</li>
          <li><strong>Cloudflare Turnstile:</strong> We use Cloudflare Turnstile for spam and abuse protection on our forms. This service checks if you are a human user without collecting invasive personal data.</li>
          <li><strong>Email API Provider:</strong> We use a third-party service to process and send emails from our contact and insurance verification forms. This service receives the data you submit only for the purpose of delivering it securely to our team.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">Security of Data</h2>
        <p className="mb-6">
          The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Your Data Protection Rights</h2>
        <p className="mb-6">
          You have certain data protection rights. Bencomo Dental aims to take reasonable steps to allow you to correct, amend, delete, or limit the use of your Personal Data. If you wish to be informed what Personal Data we hold about you and if you want it to be removed from our systems, please contact us. This includes any insurance or health-related information you may have submitted through our Insurance Verification form.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Links to Other Sites</h2>
        <p className="mb-6">
          Our Service may contain links to other sites that are not operated by us. If you click on a third party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit. We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Changes to This Privacy Policy</h2>
        <p className="mb-6">
          We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. We will let you know via a prominent notice on our Service, prior to the change becoming effective and update the "last updated" date at the top of this Privacy Policy. You are advised to review this Privacy Policy periodically for any changes.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <p className="mb-6">
          If you have any questions about this Privacy Policy, please contact us by using the contact form on our website.
        </p>
      </div>
    </div>
  );
}