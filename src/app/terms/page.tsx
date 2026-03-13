import Footer from '@/components/landing/footer'
import Nav from '@/components/landing/nav'
import LegalPageLayout from '@/components/legal/legal-page-layout'

export const metadata = {
  title: 'Terms of Service | Coco',
  description: 'Terms and conditions for using Coco.',
}

const TermsPage = () => {
  return (
    <div className="w-screen flex flex-col justify-center items-center z-10 relative bg-primary-foreground overflow-x-hidden">
      <Nav />
      <main className="w-full">
        <LegalPageLayout
          title="Terms of Service"
          description="Last updated: March 2025. By using Coco, you agree to these terms. Please read them carefully."
        >
          <p>
            These Terms of Service (&quot;Terms&quot;) govern your access to and use of the Coco website, applications, and related services (collectively, the &quot;Services&quot;) provided by Coco (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). By using the Services, you agree to these Terms. If you do not agree, do not use the Services.
          </p>

          <h2>1. Eligibility</h2>
          <p>
            You must be at least 18 years old and able to form a binding contract to use the Services. If you use the Services on behalf of an organization, you represent that you have authority to bind that organization to these Terms.
          </p>

          <h2>2. Use of the Services</h2>
          <p>
            You agree to use the Services only for lawful purposes and in accordance with these Terms. You may not use the Services to harm others, violate any law, infringe intellectual property rights, transmit malware, or attempt to gain unauthorized access to our systems or other users&apos; accounts. Coco is designed to support caregivers and families; use it in a way that respects the dignity and privacy of those you care for.
          </p>

          <h2>3. Account and Security</h2>
          <p>
            You are responsible for maintaining the confidentiality of your account credentials and for all activity under your account. Notify us immediately at{' '}
            <a href="mailto:staff@joincoco.app">staff@joincoco.app</a> if you suspect unauthorized access.
          </p>

          <h2>4. Content and Data</h2>
          <p>
            You retain ownership of content you submit. By submitting content, you grant us a limited license to use, store, and process it as needed to provide and improve the Services. You represent that you have the right to share any content you provide, including information about dependents or family members, and that doing so does not violate any third-party rights or laws.
          </p>

          <h2>5. Intellectual Property</h2>
          <p>
            The Services, including software, design, text, graphics, and logos, are owned by Coco or our licensors and are protected by copyright and other intellectual property laws. You may not copy, modify, distribute, or create derivative works without our written permission.
          </p>

          <h2>6. Disclaimers</h2>
          <p>
            The Services are provided &quot;as is&quot; and &quot;as available.&quot; We do not guarantee that the Services will be uninterrupted, error-free, or free of harmful components. Coco is not a substitute for professional medical, legal, or financial advice. Always seek qualified professionals for health, legal, or financial decisions.
          </p>

          <h2>7. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, Coco and its affiliates, officers, and employees shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or data, arising from your use of the Services. Our total liability shall not exceed the amount you paid us in the twelve months preceding the claim, or one hundred dollars, whichever is greater.
          </p>

          <h2>8. Indemnification</h2>
          <p>
            You agree to indemnify and hold harmless Coco and its affiliates from any claims, damages, or expenses (including reasonable attorneys&apos; fees) arising from your use of the Services, your content, or your violation of these Terms or any law.
          </p>

          <h2>9. Termination</h2>
          <p>
            We may suspend or terminate your access to the Services at any time, with or without cause or notice. You may stop using the Services at any time. Upon termination, your right to use the Services ceases; we may retain and use your data as described in our Privacy Policy.
          </p>

          <h2>10. Changes to the Terms</h2>
          <p>
            We may modify these Terms from time to time. We will post the updated Terms on this page and update the &quot;Last updated&quot; date. Continued use of the Services after changes constitutes acceptance. If you do not agree, you must stop using the Services.
          </p>

          <h2>11. General</h2>
          <p>
            These Terms constitute the entire agreement between you and Coco regarding the Services. If any provision is found unenforceable, the remaining provisions remain in effect. Our failure to enforce any right does not waive that right. These Terms are governed by the laws of the United States and the State of California, without regard to conflict of law principles.
          </p>

          <h2>12. Contact</h2>
          <p>
            For questions about these Terms, contact us at{' '}
            <a href="mailto:staff@joincoco.app">staff@joincoco.app</a> or{' '}
            <a href="tel:+14084558736">+1 (408) 455-8736</a>.
          </p>
        </LegalPageLayout>
      </main>
      <Footer />
    </div>
  )
}

export default TermsPage
