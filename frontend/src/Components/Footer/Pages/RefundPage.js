import React, { useLayoutEffect } from 'react';

const RefundPage = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className='jadoo' style={{ marginTop: '7rem' }}>
      <div
        className='container'
        style={{ textAlign: 'justify', textJustify: 'inter-word' }}
      >
        <h2 className='text-center fw-bold'>Refund Policy</h2>
        <h5 className='fw-bold mt-4'>Returns</h5>
        <p>
          Our policy lasts 30 days. If 30 days have gone by since your purchase,
          unfortunately we can’t offer you a refund or exchange.
        </p>
        <p>
          To be eligible for a return, your item must be unused and in the same
          condition that you received it. It must also be in the original
          packaging.
        </p>
        <p>
          Several types of goods are exempt from being returned. Perishable
          goods such as food, flowers, newspapers or magazines cannot be
          returned. We also do not accept products that are intimate or sanitary
          goods, hazardous materials, or flammable liquids or gases.
        </p>
        <p>Additional non-returnable items:</p>
        <li>Gift cards</li>
        <li>Downloadable software products</li>
        <li>Some health and personal care items</li>
        <p>
          To complete your return, we require a receipt or proof of purchase.
        </p>
        <p>Please do not send your purchase back to the manufacturer.</p>
        <p>
          There are certain situations where only partial refunds are granted:
          (if applicable)
        </p>
        <p>
          Any item not in its original condition, is damaged or missing parts
          for reasons not due to our error.
        </p>
        <p>Any item that is returned more than 30 days after delivery</p>
        <h5 className='fw-bold'>Refunds (if applicable)</h5>
        <p>
          Once your return is received and inspected, we will send you an email
          to notify you that we have received your returned item. We will also
          notify you of the approval or rejection of your refund.
        </p>
        <p>
          If you are approved, then your refund will be processed, and a credit
          will automatically be applied to your credit card or original method
          of payment, within a certain amount of days.
        </p>
        <h5 className='fw-bold'>Late or missing refunds (if applicable)</h5>
        <p>
          If you haven’t received a refund yet, first check your bank account
          again.
          <br />
          Then contact your credit card company, it may take some time before
          your refund is officially posted.
          <br />
          Next contact your bank. There is often some processing time before a
          refund is posted.
          <br />
          If you’ve done all of this and you still have not received your refund
          yet, please contact us at support@cultivist.co.in
        </p>
        <h5 className='fw-bold'>Sale items (if applicable)</h5>
        <p>
          Only regular priced items may be refunded, unfortunately sale items
          cannot be refunded.
        </p>
        <h5 className='fw-bold'> Exchanges (if applicable) </h5>
        <p>
          We only replace items if they are defective or damaged. If you need to
          exchange it for the same item, send us an email at
          Ajay.Ai.kumar2@gmail.com and send your item to: Cultivist (Mukthi
          Technologies) - 218 Ajay Villa Ottupatarai, Coonoor, Tamil Nadu 643105
        </p>

        <h5 className='fw-bold'>Shipping</h5>
        <p>
          To return your product, you should mail your product to: Cultivist
          (Mukthi Technologies) - 218 Ajay Villa Ottupatarai, Coonoor, Tamil
          Nadu 643105
          <br /> <br />
          You will be responsible for paying for your own shipping costs for
          returning your item. Shipping costs are non-refundable. If you receive
          a refund, the cost of return shipping will be deducted from your
          refund.
          <br />
          Depending on where you live, the time it may take for your exchanged
          product to reach you, may vary.
          <br /> <br />
          If you are shipping an item over $75, you should consider using a
          trackable shipping service or purchasing shipping insurance. We don’t
          guarantee that we will receive your returned item.
        </p>
      </div>
      <br />
      <br />
    </div>
  );
};

export default RefundPage;
