import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/TermsOfService.css';

const TermsOfService = () => {
  return (
    <div className="terms-container">
      <h1 className="terms-title">Terms of Service</h1>
      <div className="terms-content">
        <p className="terms-date">Last updated: May 23, 2025</p>
        
        <div>
          <section className="terms-section">
            <h2>1. Introduction</h2>
            <p>
              Welcome to Growth Rick. These Terms of Service ("Terms") govern your access to and use of the Growth Rick website 
              and services (collectively, the "Service"). Please read these Terms carefully before using the Service.
            </p>
            <p>
              By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the terms, 
              then you may not access the Service.
            </p>
          </section>

          <section className="terms-section">
            <h2>2. Use License</h2>
            <p>
              Permission is granted to temporarily download one copy of the materials (information or software) on Growth Rick's website 
              for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this 
              license you may not:
            </p>
            <ul>
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose, or for any public display (commercial or non-commercial)</li>
              <li>Attempt to decompile or reverse engineer any software contained on Growth Rick's website</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
              <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
            </ul>
            <p>
              This license shall automatically terminate if you violate any of these restrictions and may be terminated by Growth Rick at any time.
            </p>
          </section>

          <section className="terms-section">
            <h2>3. User Accounts</h2>
            <p>
              When you create an account with us, you must provide us with information that is accurate, complete, and current at all times. 
              Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.
            </p>
            <p>
              You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password.
            </p>
          </section>

          <section className="terms-section">
            <h2>4. Intellectual Property</h2>
            <p>
              The Service and its original content, features, and functionality are and will remain the exclusive property of Growth Rick and its licensors. 
              The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries.
            </p>
            <p>
              Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Growth Rick.
            </p>
          </section>

          <section className="terms-section">
            <h2>5. Limitation of Liability</h2>
            <p>
              In no event shall Growth Rick, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, 
              incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other 
              intangible losses, resulting from:
            </p>
            <ul>
              <li>Your access to or use of or inability to access or use the Service</li>
              <li>Any conduct or content of any third party on the Service</li>
              <li>Any content obtained from the Service</li>
              <li>Unauthorized access, use or alteration of your transmissions or content</li>
            </ul>
          </section>

          <section className="terms-section">
            <h2>6. Governing Law</h2>
            <p>
              These Terms shall be governed and construed in accordance with the laws of California, United States, without regard to its conflict of law provisions.
            </p>
          </section>

          <section className="terms-section">
            <h2>7. Changes to Terms</h2>
            <p>
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide 
              at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
            </p>
            <p>
              By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree 
              to the new terms, please stop using the Service.
            </p>
          </section>

          <section className="terms-section">
            <h2>8. Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at:
            </p>
            <div className="contact-info">
              <p><strong>Email:</strong> vamsi@growthrick.com</p>
              <p><strong>Address:</strong> Growth Rick, ECC Road, Whitefield, Bengaluru, India - 560066</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
