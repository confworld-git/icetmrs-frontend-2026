import React from 'react';
import { CreditCard, Building2, Wallet, ArrowRight, Shield, Lock, Copy, CheckCircle } from 'lucide-react';
import Hero from '../../components/common/common-hero/common-hero';

export default function PaymentMethodsPage() {
  const [copiedField, setCopiedField] = React.useState(null);

  const paymentMethods = [
    {
      image: "./images/available_payments/creditcard.webp",
      title: "Debit/Credit Card",
      description: "Secure card payments with instant confirmation"
    },
    {
      image: "./images/available_payments/netbanking.webp",
      title: "Net Banking",
      description: "Direct payment from your bank account"
    },
    {
      image: "./images/available_payments/payp1.webp",
      title: "PayPal",
      description: "Fast and secure PayPal transactions"
    },
    {
      image: "./images/available_payments/banktransfer.webp",
      title: "Bank Transfer (TT)",
      description: "International wire transfers accepted"
    }
  ];

  const bankDetails = [
    { label: "Beneficiary Name", value: "CONFWORLD EDUCATIONAL RESEARCH AND DEVELOPMENT ASSOCIATION" },
    { label: "Bank Name", value: "HDFC Bank" },
    { label: "Account Number", value: "50200097123575" },
    { label: "IFSC Code", value: "HDFC0000124" },
    { label: "Swift Code", value: "HDFCINBBCHE" },
    { label: "Branch", value: "Kilpauk, Chennai, Tamil Nadu, India" }
  ];

  const copyToClipboard = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <section>
      <Hero
                          title="Available Payment Methods"
                          breadcrumbs={[{ label: "Home", link: "#" }]}
                          backgroundImage="/images/commonhero/12.webp"
      />
      <div className="min-h-screen ">
      

      <div className="w-full px-4 py-12">
        {/* Payment Methods Grid */}
        <div className="mb-16">
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {paymentMethods.map((method, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden border-2 hover:border-transparent border-amber-400 transition-all duration-300 hover:shadow-2xl hover:scale-105 group"
              >
                <div className="relative h-40 overflow-hidden">
                  <img 
                    src={method.image} 
                    alt={method.title}
                    className="w-full h-full object-fit group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/60 to-transparent"></div>
                </div>
                <div className="p-5 text-center">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {method.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{method.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        
        {/* Bank Details Card */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-indigo-600 via-indigo-700 to-indigo-800 p-8 text-white">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-4">
                <div className="bg-amber-400 rounded-full p-3">
                  <Building2 className="w-8 h-8 text-indigo-900" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold">Bank Transfer Details</h2>
                  <p className="text-indigo-200 mt-1">For direct bank transfer payments (TT)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8 bg-gradient-to-br from-gray-50 to-white">
            <div className="w-full">
              <div className="space-y-3">
                {bankDetails.map((detail, index) => (
                  <div 
                    key={index}
                    className="flex items-center justify-between bg-white rounded-lg p-4 shadow-md border border-gray-200 hover:border-indigo-300 transition-colors group"
                  >
                    <div className="flex-1">
                      <label className="text-xs font-semibold text-indigo-600 uppercase tracking-wide block mb-1">
                        {detail.label}
                      </label>
                      <p className="text-gray-800 font-semibold text-lg">
                        {detail.value}
                      </p>
                    </div>
                    <button
                      onClick={() => copyToClipboard(detail.value, detail.label)}
                      className="ml-4 p-2 rounded-lg bg-indigo-50 hover:bg-indigo-100 transition-colors"
                      title="Copy to clipboard"
                    >
                      {copiedField === detail.label ? (
                        <CheckCircle className="w-5 h-5 text-green-600" />
                      ) : (
                        <Copy className="w-5 h-5 text-indigo-600" />
                      )}
                    </button>
                  </div>
                ))}
              </div>

              {/* Important Note */}
              <div className="mt-8 bg-gradient-to-r from-amber-400 to-amber-500 rounded-xl p-6 shadow-lg">
                <h3 className="font-bold text-lg mb-3 flex items-center gap-2 text-indigo-900">
                  <Shield className="w-5 h-5" />
                  Important Information
                </h3>
                <ul className="space-y-2 text-indigo-900">
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-900 mt-1 font-bold">•</span>
                    <span className="font-medium">Please include your registration ID in the transfer reference</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-900 mt-1 font-bold">•</span>
                    <span className="font-medium">Send payment confirmation to our support team after transfer</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-900 mt-1 font-bold">•</span>
                    <span className="font-medium">Allow 2-3 business days for international transfers to reflect</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        
      </div>
    </div>
    </section>
    
  );
}