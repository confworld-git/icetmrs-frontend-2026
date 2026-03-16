import React, { useState, useRef, useEffect } from "react";
import { toaster } from "evergreen-ui";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";
import Hero from "../../components/common/common-hero/common-hero.jsx";

import RegistrationSteps from "../../components/RegistrationSteps.jsx";
import DiscountConfetti from "./discount-confetti.jsx";
import ConferenceCards from "./ConferenceCards.jsx";
import { Helmet } from "react-helmet";

// ─── Pricing Calculator ───────────────────────────────────────────────────────
const calculatePricing = ({ baseAmount, participantCategory, hasMembership, hasCoupon }) => {
  const base = parseFloat(baseAmount);
  // Students pay $15 membership fee, others pay $20
  const membershipFeeAmount = participantCategory?.toLowerCase().includes("student") ? 15 : 20;

  let calc = {
    baseAmount: base,
    membershipFee: 0,
    membershipDiscount: 0,
    couponDiscount: 0,
    totalDiscount: 0,
    finalAmount: base,
    bankTax: 0,
    total: base,
  };

  if (hasMembership && hasCoupon) {
    // Both active: 10% off registration + membership fee
    calc.totalDiscount = base * 0.10;
    calc.membershipFee = membershipFeeAmount;
    calc.membershipDiscount = base * 0.05;
    calc.couponDiscount = base * 0.05;
    calc.finalAmount = base - calc.totalDiscount + calc.membershipFee;
  } else if (hasMembership && !hasCoupon) {
    // Membership only: 5% off + membership fee
    calc.membershipDiscount = base * 0.05;
    calc.totalDiscount = calc.membershipDiscount;
    calc.membershipFee = membershipFeeAmount;
    calc.finalAmount = base - calc.membershipDiscount + calc.membershipFee;
  } else if (!hasMembership && hasCoupon) {
    // Coupon only: 5% off
    calc.couponDiscount = base * 0.05;
    calc.totalDiscount = calc.couponDiscount;
    calc.finalAmount = base - calc.couponDiscount;
  } else {
    calc.finalAmount = base;
  }

  const bankTax = calc.finalAmount * 0.060;
  calc.bankTax = parseFloat(bankTax.toFixed(2));
  calc.total = parseFloat((calc.finalAmount + bankTax).toFixed(2));

  // Round all fields to 2 decimal places
  Object.keys(calc).forEach((key) => {
    calc[key] = parseFloat(calc[key].toFixed(2));
  });

  return calc;
};

// ─── Checkout Panel Component ─────────────────────────────────────────────────
const CheckoutPanel = ({
  pricing,
  baseSelected,
  participantCategory,
  membership,
  onMembershipToggle,
  couponCode,
  couponStatus,
  onCouponChange,
  onCouponApply,
  onCouponRemove,
}) => {
  const membershipFee = participantCategory?.toLowerCase().includes("student") ? 15 : 20;

  return (
    <div className="md:w-[420px] shrink-0 space-y-4">
      {/* Membership Card */}
      <div className="rounded-2xl border border-indigo-200 bg-indigo-50 p-5 shadow-sm">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-[15px] font-bold text-indigo-700">
              Premium Membership ({membershipFee} USD)
            </h3>
            <p className="text-sm text-indigo-600 mt-0.5">
              Get 5% discount on registration fee
            </p>
            <p className="text-sm font-bold text-indigo-700 mt-2">
              Fee: ${membershipFee}
            </p>
          </div>
          {/* Toggle Switch */}
          <button
            type="button"
            onClick={() => onMembershipToggle(!membership)}
            className={`relative inline-flex h-7 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 focus:outline-none ${
              membership ? "bg-indigo-600" : "bg-gray-300"
            }`}
            style={{ width: "52px" }}
            aria-pressed={membership}
          >
            <span
              className={`inline-block h-6 w-6 transform rounded-full bg-white shadow transition-transform duration-200 ${
                membership ? "translate-x-6" : "translate-x-0"
              }`}
            />
          </button>
        </div>
      </div>

      {/* Coupon Card */}
      <div className="rounded-2xl border border-indigo-200 bg-indigo-50 p-5 shadow-sm">
        <h3 className="text-[15px] font-bold text-indigo-700 mb-1">
          Get 5% Discount with a coupon code!
        </h3>
        {couponStatus === "valid" ? (
          <div className="flex items-center justify-between bg-indigo-100 border border-indigo-300 rounded-xl px-4 py-3 mt-2">
            <span className="text-indigo-700 font-semibold text-sm">
              ✓ Coupon &quot;{couponCode}&quot; applied
            </span>
            <button
              type="button"
              onClick={onCouponRemove}
              className="bg-red-500 text-white text-xs font-bold px-3 py-1.5 rounded-lg hover:bg-red-600 transition-colors"
            >
              Remove
            </button>
          </div>
        ) : (
          <div className="flex gap-2 mt-2">
            <input
              type="text"
              value={couponCode}
              onChange={(e) => onCouponChange(e.target.value.toUpperCase())}
              placeholder="Enter coupon code"
              className="flex-1 border border-indigo-300 bg-white rounded-xl px-3 py-2 text-sm outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
            />
            <button
              type="button"
              onClick={onCouponApply}
              className="bg-indigo-600 text-white text-sm font-semibold px-4 py-2 rounded-xl hover:bg-indigo-700 transition-colors"
            >
              Apply
            </button>
          </div>
        )}
        {couponStatus === "invalid" && (
          <p className="text-red-500 text-xs mt-1">✗ Invalid or expired coupon code.</p>
        )}
      </div>

      {/* Price Breakdown Card */}
      {baseSelected && (
        <div className="rounded-2xl border border-indigo-200 bg-indigo-50 p-5 shadow-sm">
          <h3 className="text-[15px] font-bold text-indigo-700 mb-4">Price Breakdown</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between text-gray-700">
              <span>Base Registration Fee:</span>
              <span className="font-medium">${pricing.baseAmount.toFixed(2)}</span>
            </div>

            {pricing.membershipDiscount > 0 && (
              <div className="flex justify-between text-indigo-700">
                <span>Membership Discount (5%):</span>
                <span className="font-semibold">- ${pricing.membershipDiscount.toFixed(2)}</span>
              </div>
            )}

            {pricing.couponDiscount > 0 && (
              <div className="flex justify-between text-indigo-700">
                <span>Coupon Discount (5%):</span>
                <span className="font-semibold">- ${pricing.couponDiscount.toFixed(2)}</span>
              </div>
            )}

            {pricing.membershipFee > 0 && (
              <div className="flex justify-between text-gray-700">
                <span>Membership Fee:</span>
                <span className="font-medium">+ ${pricing.membershipFee.toFixed(2)}</span>
              </div>
            )}

            <div className="border-t border-indigo-200 my-2" />

            <div className="flex justify-between font-bold text-gray-800">
              <span>Subtotal:</span>
              <span>${pricing.finalAmount.toFixed(2)}</span>
            </div>

            <div className="flex justify-between text-gray-600">
              <span>Bank Convenience Charge (6%):</span>
              <span>${pricing.bankTax.toFixed(2)}</span>
            </div>

            <div className="border-t border-indigo-200 my-2" />

            <div className="flex justify-between text-indigo-700 font-bold text-base">
              <span>Total Amount:</span>
              <span>${pricing.total.toFixed(2)}</span>
            </div>

            {pricing.totalDiscount > 0 && (
              <div className="mt-3 bg-indigo-100 border border-indigo-200 rounded-xl px-4 py-2.5 text-center">
                <span className="text-indigo-700 font-semibold text-sm">
                  🎉 You saved ${pricing.totalDiscount.toFixed(2)}!
                </span>
              </div>
            )}
          </div>
        </div>
      )}

      {!baseSelected && (
        <div className="rounded-2xl border border-dashed border-indigo-200 bg-indigo-50 p-5 text-center text-sm text-indigo-700">
          ↑ Select a registration fee from the table above to see your price breakdown.
        </div>
      )}
    </div>
  );
};

// ─── Main Component ───────────────────────────────────────────────────────────
const RegistrationFee = () => {
  useEffect(() => {
    // Hide wordmark to prevent 404 error
    window.Razorpay = window.Razorpay || {};
    window.Razorpay.config = {
      display: { hide_wordmark: true },
    };

    const loadRazorpay = () => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.async = true;
      document.body.appendChild(script);
    };

    if (!document.querySelector('script[src="https://checkout.razorpay.com/v1/checkout.js"]')) {
      loadRazorpay();
    }
  }, []);

  useEffect(() => {
    AOS.init({ once: true });
    AOS.refresh();
  }, []);

  const Early_Bird_Last_Date = new Date("10 March 2026");
  Early_Bird_Last_Date.setHours(23, 59, 59, 999);
  const Final_Last_Date = new Date("20 March 2026");
  Final_Last_Date.setHours(23, 59, 59, 999);
  const dateNow = new Date();
  const isEarlyBird = dateNow <= Early_Bird_Last_Date;
  const isFinal = dateNow <= Final_Last_Date;

  const navigate = useNavigate();
  const RegistrationFeeRef = useRef();

  // Form state
  const [participantCategory, setParticipantCategory] = useState("");
  const [selectedBase, setSelectedBase] = useState(null); // { value, title, category }

  // Discount state
  const [membership, setMembership] = useState(false);
  const [couponCode, setCouponCode] = useState("");
  const [couponStatus, setCouponStatus] = useState(null); // null | "valid" | "invalid"
  const [couponDiscount, setCouponDiscount] = useState(0);
  const [appliedCouponCode, setAppliedCouponCode] = useState("");

  // Derived pricing
  const pricing = selectedBase
    ? calculatePricing({
        baseAmount: selectedBase.value,
        participantCategory,
        hasMembership: membership,
        hasCoupon: couponDiscount > 0,
      })
    : {
        baseAmount: 0,
        membershipDiscount: 0,
        couponDiscount: 0,
        membershipFee: 0,
        totalDiscount: 0,
        finalAmount: 0,
        bankTax: 0,
        total: 0,
      };

  const handleBaseSelect = (value, title, category) => {
    setSelectedBase({ value, title, category });
  };

  const handleMembershipToggle = (checked) => {
    setMembership(checked);
  };

  const handleCouponApply = async () => {
    if (!couponCode.trim()) return;
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/coupon/validate`,
        { code: couponCode }
      );
      setCouponStatus("valid");
      setCouponDiscount(data.discountPercent);
      setAppliedCouponCode(couponCode);
      toaster.success(data.message);
    } catch (error) {
      setCouponStatus("invalid");
      setCouponDiscount(0);
      setAppliedCouponCode("");
      toaster.danger(error.response?.data?.message || "Invalid coupon");
    }
  };

  const handleCouponRemove = () => {
    setCouponCode("");
    setCouponStatus(null);
    setCouponDiscount(0);
    setAppliedCouponCode("");
  };

  const HandleRegistration = async (e) => {
    e.preventDefault();

    if (!selectedBase) {
      toaster.warning("Please select a registration fee from the table.");
      return;
    }

    const formData = new FormData(RegistrationFeeRef.current);
    const formFields = Object.fromEntries(formData.entries());

    if (!formFields.Terms_and_Conditions) {
      toaster.warning("Please accept the Terms and Conditions.");
      return;
    }
    if (!formFields.presentation_Category) {
      toaster.warning("Please select a Presentation Category.");
      return;
    }
    if (!formFields.presentation_Type) {
      toaster.warning("Please select a Presentation Type.");
      return;
    }

    const selectedFeePayload = {
      title: selectedBase.title,
      category: selectedBase.category,
      value: pricing.baseAmount,
      convenience_price: pricing.bankTax,
      total: pricing.finalAmount,
      discountApplied:
        membership && couponDiscount > 0
          ? 10
          : membership || couponDiscount > 0
          ? 5
          : 0,
      membershipFee: pricing.membershipFee,
      membershipSelected: membership,
      couponCode: couponDiscount > 0 ? appliedCouponCode : null,
      finalTotal: pricing.total, // grand total used for Razorpay order amount
    };

    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/registration`,
        { ...formFields, selectedFee: selectedFeePayload }
      );

      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY,
        amount: data.amount,
        currency: "USD",
        name: "Confworld Educational Research and Development Association (CERADA)",
        description: "ICETMRS-2026 Conference Registration",
        image: "https://i.postimg.cc/3RcrXjsP/cerada-logo.webp",
        order_id: data.order_id,
        handler: async (response) => {
          try {
            await axios.post(`${import.meta.env.VITE_API_URL}/payment/validate`, {
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_order_id: response.razorpay_order_id,
              razorpay_signature: response.razorpay_signature,
              Order_ID: data.order_id,
            });
            navigate("/success", {
              state: {
                amount: (data.amount / 100).toFixed(2),
                paymentId: response.razorpay_payment_id,
              },
            });
          } catch (error) {
            toaster.danger("Payment verification failed. Please contact support.");
            console.error(error);
          }
        },
        prefill: {
          name: formFields.first_name,
          email: formFields.email,
          contact: formFields.number,
        },
        theme: { color: "#4f46e5" }, // indigo-600 — matches ICETMRS brand
        modal: {
          ondismiss: async () => {
            try {
              await axios.post(`${import.meta.env.VITE_API_URL}/payment/cancel`, {
                order_id: data.order_id,
              });
            } catch {}
            toaster.warning("Payment window closed.");
          },
        },
      };

      if (!window.Razorpay) {
        toaster.danger("Payment gateway not available. Please refresh the page.");
        return;
      }

      const rzp = new window.Razorpay(options);
      rzp.on("payment.failed", (response) => {
        toaster.danger(`Payment failed: ${response.error.description}`);
      });
      rzp.open();
    } catch (error) {
      toaster.danger(
        error.response?.data?.message || "Payment processing failed. Please try again."
      );
      console.error("Payment error:", error);
    }
  };

  // ── Fee Data — ICETMRS-specific amounts ────────────────────────────────────
  const participationFees1 = [
    {
      title: "Physical (Onsite) Participants",
      categories: [
        { category: "Academicians/Delegates/Research scholars", earlyBird: 449, final: 499, onspot: 599 },
        { category: "Academicians/Delegates/Research scholars with Scopus publication", earlyBird: 949, final: 999, onspot: 1099 },
        { category: "Students", earlyBird: 399, final: 449, onspot: 549 },
        { category: "Students with Scopus Publication", earlyBird: 849, final: 899, onspot: 999 },
        { category: "In-Person Attendance / Listener (Non-Presenter)", earlyBird: 249, final: 299, onspot: 399 },
      ],
    },
  ];

  const participationFees2 = [
    {
      title: "Virtual (Online) Participants",
      categories: [
        { category: "Academicians / Delegates / Research Scholars ", earlyBird: 299, final: 349 },
        { category: "Academicians/Delegates/Research scholars with Scopus publication", earlyBird: 849, final: 899 },
        { category: "Students", earlyBird: 269, final: 299 },
        { category: "Students with Scopus Publication", earlyBird: 749, final: 799 },
        { category: "In-Person Attendance / Listener (Non-Presenter)", earlyBird: 119, final: 149 },
      ],
    },
  ];

  const PresentationFees = [
    {
      title: "Physical/On-site Conference Presentation with Q1/Q2 Scopus",
      categories: [
        { category: "Presentation with Q1 Scopus Publication", final: 2599 },
        { category: "Presentation with Q2 Scopus Publication", final: 1599 },
      ],
    },
    {
      title: "Online/Virtual Conference Presentation with Q1/Q2 Scopus",
      categories: [
        { category: "Presentation with Q1 Scopus Publication", final: 2449 },
        { category: "Presentation with Q2 Scopus Publication", final: 1449 },
      ],
    },
  ];

  return (
    <section>
      <Hero
        title="Registration Fees"
        breadcrumbs={[{ label: "Home", link: "#" }]}
        backgroundImage="/images/commonhero/11.webp"
      />

      <section className="pt-10 md:pt-2">
        <DiscountConfetti />

        <div
          data-aos="fade-up"
          className="flex flex-col justify-center items-center text-center my-5 space-y-4"
        >
          <h1 className="text-3xl text-indigo-600 font-bold">Registration</h1>
          <p className="w-11/12 font-medium">
            Welcome to the ICETMRS-2026 registration page. Secure your spot at this premier
            conference to connect with global experts, present your research and advance your
            career. Follow the steps below to complete your registration.
          </p>
        </div>

        <div
          data-aos="fade-up"
          className="bg-indigo-50 flex flex-col justify-center items-center p-5 gap-5 md:gap-10"
        >
          <ConferenceCards />
        </div>

        <RegistrationSteps />

        {/* ── Fee Tables ── */}
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-4xl md:text-5xl font-bold text-indigo-800 leading-tight">
            Registration Fees
          </h1>
          <p className="text-red-600 font-medium mt-3 mb-8">
            *Note: Additional charges applicable for Scopus publication (T&amp;C Apply)
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:p-5">
            {participationFees1.map((fee, index) => (
              <table
                key={index}
                className="table-auto w-full border-collapse rounded-b-md shadow-xl"
              >
                <caption className="bg-indigo-800 text-white p-2 rounded-t-md font-bold text-md">
                  {fee.title}
                </caption>
                <thead>
                  <tr className="bg-indigo-500 text-md text-white text-left">
                    <th className="border-r border-gray-200 p-4">Categories</th>
                    <th className="border-r border-gray-200 p-4">Early Bird (USD)</th>
                    <th className="p-4 border-r border-gray-200">Final (USD)</th>
                    <th className="p-4">On Spot (USD)</th>
                  </tr>
                </thead>
                <tbody>
                  {fee.categories.map((item, i) => (
                    <tr
                      key={i}
                      className={`${i % 2 === 0 ? "bg-gray-100" : "bg-white"} text-sm font-[450]`}
                    >
                      <td className="border-r border-gray-200 p-4 text-wrap">
                        {item.category}
                        {["Students", "Students with Scopus Publication"].includes(item.category) && (
                          <span className="text-red-600">*</span>
                        )}
                      </td>
                      <td className="border-r border-gray-200 p-4">
                        <label className={!isEarlyBird ? "line-through text-gray-400" : ""}>
                          <input
                            disabled={!isEarlyBird}
                            type="radio"
                            name="price"
                            onChange={() => handleBaseSelect(item.earlyBird, fee.title, item.category)}
                            value={item.earlyBird}
                            className="mr-2"
                          />
                          {item.earlyBird}
                        </label>
                      </td>
                      <td className="p-4 border-r border-gray-200">
                        <label className={!isFinal ? "line-through text-gray-400" : ""}>
                          <input
                            disabled={!isFinal}
                            type="radio"
                            name="price"
                            onChange={() => handleBaseSelect(item.final, fee.title, item.category)}
                            value={item.final}
                            className="mr-2"
                          />
                          {item.final}
                        </label>
                      </td>
                      <td className="p-4">
                        <label className={!isFinal ? "line-through text-gray-400" : ""}>
                          <input
                            disabled={!isFinal}
                            type="radio"
                            name="price"
                            onChange={() => handleBaseSelect(item.onspot, fee.title, item.category)}
                            value={item.onspot}
                            className="mr-2"
                          />
                          {item.onspot}
                        </label>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ))}

            {participationFees2.map((fee, index) => (
              <table
                key={index}
                className="table-auto w-full border-collapse rounded-b-md shadow-xl"
              >
                <caption className="bg-indigo-800 text-white p-2 rounded-t-md font-bold text-md">
                  {fee.title}
                </caption>
                <thead>
                  <tr className="bg-indigo-500 text-md text-white text-left">
                    <th className="border-r border-gray-200 p-4">Categories</th>
                    <th className="border-r border-gray-200 p-4">Early Bird (USD)</th>
                    <th className="p-4">Final (USD)</th>
                  </tr>
                </thead>
                <tbody>
                  {fee.categories.map((item, i) => (
                    <tr
                      key={i}
                      className={`${i % 2 === 0 ? "bg-gray-100" : "bg-white"} text-sm font-[450]`}
                    >
                      <td className="border-r border-gray-200 p-4 text-wrap">
                        {item.category}
                        {["Students", "Students with Scopus Publication"].includes(item.category) && (
                          <span className="text-red-600">*</span>
                        )}
                      </td>
                      <td className="border-r border-gray-200 p-4">
                        <label className={!isEarlyBird ? "line-through text-gray-400" : ""}>
                          <input
                            disabled={!isEarlyBird}
                            type="radio"
                            name="price"
                            onChange={() => handleBaseSelect(item.earlyBird, fee.title, item.category)}
                            value={item.earlyBird}
                            className="mr-2"
                          />
                          {item.earlyBird}
                        </label>
                      </td>
                      <td className="p-4">
                        <label className={!isFinal ? "line-through text-gray-400" : ""}>
                          <input
                            disabled={!isFinal}
                            type="radio"
                            name="price"
                            onChange={() => handleBaseSelect(item.final, fee.title, item.category)}
                            value={item.final}
                            className="mr-2"
                          />
                          {item.final}
                        </label>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:p-5">
            {PresentationFees.map((fee, index) => (
              <table
                key={index}
                className="table-fixed min-w-full w-full border-collapse rounded-b-md shadow-xl"
              >
                <caption className="bg-indigo-500 text-white p-2 rounded-t-lg font-bold text-md">
                  {fee.title}
                </caption>
                <tbody>
                  {fee.categories.map((item, i) => (
                    <tr
                      key={i}
                      className={`${i % 2 === 0 ? "bg-gray-100" : "bg-white"} text-sm font-[450]`}
                    >
                      <td className="w-[75%] border-r border-gray-200 p-4 text-wrap">
                        {item.category}
                      </td>
                      <td className="w-[25%] p-4">
                        <label className={!isFinal ? "line-through text-gray-400" : ""}>
                          <input
                            disabled={!isFinal}
                            type="radio"
                            name="price"
                            onChange={() => handleBaseSelect(item.final, fee.title, item.category)}
                            value={item.final}
                            className="mr-2"
                          />
                          ${item.final}
                        </label>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ))}
          </div>
        </div>

        <div className="text-red-500 md:px-12 mt-2">
          *Indicates - UG students only (You have to submit a soft copy of your
          university/college identity card as a proof)
        </div>

        {/* ── Registration Form ── */}
        <div className="flex flex-col justify-center items-center mt-6 p-5 md:py-6">
          <h1 className="text-4xl md:text-5xl font-bold text-indigo-800 leading-tight">
            Registration Form
          </h1>
          <p className="text-md font-medium mt-2">
            &quot;2<span className="text-sm align-super">nd</span> International Conference on
            Emerging Trends in Multidisciplinary Research Studies (ICETMRS-2026)&quot;
          </p>

          <form
            ref={RegistrationFeeRef}
            onSubmit={HandleRegistration}
            className="text-sm p-2 md:p-6 flex flex-col md:flex-row justify-between md:gap-10 items-start shadow-md rounded-lg mt-8 md:w-11/12"
          >
            {/* ── Left: Form Fields ── */}
            <section
              className="w-full space-y-4 md:columns-2 gap-5"
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
            >
              <div>
                <select
                  className="w-full p-2.5 border border-gray-300 outline-none rounded-md"
                  name="Title"
                  defaultValue=""
                >
                  <option value="" disabled>Select Title</option>
                  <option>Mr</option>
                  <option>Ms</option>
                  <option>Mrs</option>
                  <option>Dr</option>
                  <option>Prof</option>
                </select>
              </div>
              <div>
                <input
                  aria-autocomplete="both"
                  type="text"
                  name="first_name"
                  className="w-full p-2.5 border border-gray-300 outline-none rounded-md"
                  placeholder="First Name"
                  required
                />
              </div>
              <div>
                <input
                  aria-autocomplete="both"
                  type="text"
                  name="last_name"
                  className="w-full p-2.5 border border-gray-300 outline-none rounded-md"
                  placeholder="Last Name"
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  name="certificate_name"
                  className="w-full p-2.5 border border-gray-300 outline-none rounded-md"
                  placeholder="Certificate Name"
                  required
                />
              </div>
              <div>
                <label htmlFor="dateofbirth">Date of Birth:</label>
                <input
                  id="dateofbirth"
                  type="date"
                  name="DOB"
                  className="w-full p-2.5 border border-gray-300 outline-none rounded-md"
                  max="2020-01-01"
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  name="nationality"
                  className="w-full p-2.5 border border-gray-300 outline-none rounded-md"
                  placeholder="Nationality"
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  name="department"
                  className="w-full p-2.5 border border-gray-300 outline-none rounded-md"
                  placeholder="Department"
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  name="institution"
                  className="w-full p-2.5 border border-gray-300 outline-none rounded-md"
                  placeholder="Institution"
                  required
                />
              </div>
              <div>
                <input
                  type="tel"
                  name="number"
                  className="w-full p-2.5 border border-gray-300 outline-none rounded-md"
                  placeholder="Mobile Number with Country Code"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  className="w-full p-2.5 border border-gray-300 outline-none rounded-md"
                  placeholder="E-mail"
                  required
                />
              </div>

              {/* Participant Category — controls membership fee tier */}
              <div>
                <select
                  className="w-full p-2.5 border border-gray-300 outline-none rounded-md"
                  name="participant_category"
                  value={participantCategory}
                  onChange={(e) => setParticipantCategory(e.target.value)}
                  required
                >
                  <option value="" disabled>Select Participant Category</option>
                  <option>Academicians</option>
                  <option>Delegates</option>
                  <option>Research scholars</option>
                  <option>Student</option>
                </select>
              </div>

              <div className="space-y-2">
                <span className="block font-medium">Presentation Category:</span>
                <div className="flex space-x-4">
                  <label className="flex items-center space-x-2">
                    <input type="radio" name="presentation_Category" value="oral" className="form-radio" />
                    <span>Oral</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="radio" name="presentation_Category" value="poster" className="form-radio" />
                    <span>Poster</span>
                  </label>
                </div>
              </div>

              <div className="space-y-2">
                <span className="block font-medium">Presentation Type:</span>
                <div className="flex space-x-4">
                  <label className="flex items-center space-x-2">
                    <input type="radio" name="presentation_Type" value="Virtual" className="form-radio" />
                    <span>Virtual</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="radio" name="presentation_Type" value="Physical" className="form-radio" />
                    <span>Physical</span>
                  </label>
                </div>
              </div>
            </section>

            {/* ── Right: Checkout Panel ── */}
            <div
              className="mt-6 md:mt-0 w-full md:w-auto"
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
            >
              <CheckoutPanel
                pricing={pricing}
                baseSelected={!!selectedBase}
                participantCategory={participantCategory}
                membership={membership}
                onMembershipToggle={handleMembershipToggle}
                couponCode={couponCode}
                couponStatus={couponStatus}
                onCouponChange={setCouponCode}
                onCouponApply={handleCouponApply}
                onCouponRemove={handleCouponRemove}
              />

              {/* Terms + Submit */}
              <div className="mt-4 space-y-3">
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="Terms_and_Conditions"
                    id="terms"
                    className="w-4 h-4"
                    value="on"
                  />
                  <label htmlFor="terms" className="font-medium cursor-pointer text-sm">
                    I agree to the{" "}
                    <span className="text-indigo-600 underline cursor-pointer">
                      Terms and Conditions
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full p-3.5 bg-amber-400 text-indigo-700 font-bold text-lg rounded-2xl hover:opacity-90 transition-all shadow-md hover:shadow-lg cursor-pointer"
                >
                  Check Out
                </button>

                <div className="relative w-full h-2 bg-gray-100 border border-indigo-200 rounded-full overflow-hidden">
                  <div className="absolute top-0 left-0 h-full w-0 rounded-md bg-gradient-to-r from-indigo-900 to-indigo-500 animate-[fillProgress_6s_ease-in-out_infinite]" />
                </div>

                <p className="text-center text-gray-500 text-xs">
                  *Please note that the payee is responsible for all bank charges.
                </p>
              </div>
            </div>
          </form>
        </div>
      </section>
    </section>
  );
};

export default RegistrationFee;