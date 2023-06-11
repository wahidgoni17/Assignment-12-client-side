import React from "react";
import pic from "../../../../assets/faq-lang.jpg";
import Title from "../../../../Component/Title";

const CountSection = () => {
  return (
    <>
      <Title title={"qna"} subtitle={"Popular Questions About our Language Courses"}></Title>
      <div className="flex flex-col-reverse lg:flex-row my-5">
        <div className="lg:w-1/2 p-5">
          <div
            tabIndex={0}
            className="collapse collapse-plus border border-base-300 mb-3"
          >
            <div className="collapse-title text-2xl font-medium">
              Is it possible to pay for an order with Visa and MasterCard
              payment cards?
            </div>
            <div className="collapse-content text-xl">
              <p>
                Absolutely! We offer the convenience of accepting both Visa and
                MasterCard payment cards on our course. When placing an order
                with us, you can securely pay using either a Visa or a
                MasterCard, whichever suits you best. We understand the
                importance of flexibility and strive to make your shopping
                experience as seamless as possible. Rest assured that your
                transaction will be safe and protected when using these widely
                accepted payment methods.
              </p>
            </div>
          </div>
          <div
            tabIndex={0}
            className="collapse collapse-plus border border-base-300 mb-3"
          >
            <div className="collapse-title text-2xl font-medium">
            Is it possible to pay by credit card?
            </div>
            <div className="collapse-content text-xl">
              <p>
              Yes, we provide the option to pay by credit card on our website. We understand that credit cards offer a convenient and widely accepted method of payment for our customers. When making a purchase, you can securely enter your credit card details during the checkout process. We prioritize the security of your information and employ industry-standard encryption measures to protect your transaction. Feel free to choose the credit card payment option and enjoy a seamless shopping experience on our website.
              </p>
            </div>
          </div>
          <div
            tabIndex={0}
            className="collapse collapse-plus border border-base-300 mb-3"
          >
            <div className="collapse-title text-2xl font-medium">
            What payment methods exist in your company?
            </div>
            <div className="collapse-content text-xl">
              <p>
              At our company, we strive to offer a variety of payment methods to accommodate our customers preferences. Currently, we accept the following payment methods: <br />
              1. Credit Cards: We accept major credit cards, including Visa, MasterCard, American Express, and Discover. You can securely provide your card details during the checkout process. <br />
              2. Debit Cards: We also accept debit cards that are affiliated with major card networks. You can use your debit card just like a credit card for making payments on our website. <br />
              3. Stripe: If you prefer using PayPal for your online transactions, you will be glad to know that we accept Stripe as a payment method. Simply choose the Stripe option at checkout, and you will be redirected to complete the payment securely through your Stripe account.
              </p>
            </div>
          </div>
          <div
            tabIndex={0}
            className="collapse collapse-plus border border-base-300 mb-3"
          >
            <div className="collapse-title text-2xl font-medium">
            Can I return the course after purchase?
            </div>
            <div className="collapse-content text-xl">
              <p>
              We understand that circumstances may change, and you may have a need to return a course after purchase. Our company has a comprehensive return policy in place to ensure customer satisfaction. <br />
              If you would like to return a course, please review the following guidelines: <br />
              1. Eligibility: Courses are eligible for returns within a specified time frame, typically within 14 or 30 days from the date of purchase. Please refer to our specific return policy for the course you are interested in. <br />
              2. Course Access: To be eligible for a return, you must not have accessed or completed the course content in its entirety. Once you have accessed the course or any associated materials, the return option may no longer be available. <br />
              3. Refund Process: To initiate a return, please contact our customer support team through the designated channels. They will guide you through the necessary steps and provide you with any additional information required. Once your return request is approved, you will receive instructions on how to proceed with the return process. <br />
              4. Refund Options: Depending on your preference and the circumstances, we may offer refunds in the form of store credit, a refund to your original payment method, or an alternative arrangement as deemed appropriate. Our customer support team will assist you in determining the best resolution based on your situation.
              </p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 p-5">
          <img className="rounded-2xl" src={pic} alt="" />
        </div>
      </div>
    </>
  );
};

export default CountSection;
