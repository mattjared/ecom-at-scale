import { Button } from "@/components/ui/button"
import { AccordionTrigger, AccordionContent, AccordionItem, Accordion } from "@/components/ui/accordion"
import Image from "next/image"

export default function Component() {
  return (
    <div key="1" className="bg-[#f1eee6]">
      <header className="flex justify-between p-4 container">
        <h1 className="text-2xl font-bold">Lingo</h1>
      </header>
      <div className="grid grid-cols-2 gap-4 py-4">
        <div className="space-y-4 max-w-[85%]">
          <div className="flex justify-center">
            <Image
              alt="Phone"
              height="400"
              width="500"
              src="/01.webp"
              style={{
                aspectRatio: "300/400",
                objectFit: "cover",
                width: "100%"
              }}
            />
          </div>
          <div className="grid grid-cols-3 gap-4">
            <img
              alt="Feature 1"
              height="100"
              src="/placeholder.svg"
              style={{
                aspectRatio: "100/100",
                objectFit: "cover",
              }}
              width="100"
            />
            <img
              alt="Feature 2"
              height="100"
              src="/placeholder.svg"
              style={{
                aspectRatio: "100/100",
                objectFit: "cover",
              }}
              width="100"
            />
            <img
              alt="Feature 3"
              height="100"
              src="/placeholder.svg"
              style={{
                aspectRatio: "100/100",
                objectFit: "cover",
              }}
              width="100"
            />
            <img
              alt="Feature 4"
              height="100"
              src="/placeholder.svg"
              style={{
                aspectRatio: "100/100",
                objectFit: "cover",
              }}
              width="100"
            />
            <img
              alt="Feature 5"
              height="100"
              src="/placeholder.svg"
              style={{
                aspectRatio: "100/100",
                objectFit: "cover",
              }}
              width="100"
            />
            <img
              alt="Feature 6"
              height="100"
              src="/placeholder.svg"
              style={{
                aspectRatio: "100/100",
                objectFit: "cover",
              }}
              width="100"
            />
          </div>
        </div>
        <div className="space-y-8 pr-32">
          <div>
            <h2 className="text-2xl font-bold">Start your Lingo journey</h2>
            <p className="mt-2 text-gray-600">
              The Lingo biosensor and app work together to help you fine-tune your habits, improve your metabolic
              health, and live your healthiest life.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-12">
            <div className="py-4 px-8 border border-slate-400 rounded bg-white">
              <h3 className="text-2xl font-light border-b-2 border-slate-700 pb-5">Discovery Pack - 2 week plan</h3>
              <ul className="mt-4 space-y-2 text-sm">
                <li className="pb-4">Receive 1 continuous glucose monitor (CGM)</li>
                <li className="pb-4">Lingo Program for 2 weeks** combining our science with your personal insights</li>
                <li className="pb-4">
                  Real-time data stream; producing helpful tips, notifications, weekly reports with focus areas and
                  goals
                </li>
                <li className="pb-4">Exclusive lessons and content created by world-leading doctors</li>
                <li className="pb-4">
                  Learn the basics – receive simple tips to better manage your glucose levels and improve your
                  metabolism
                </li>
              </ul>
              <div className="mt-4">
                <p className="text-2xl font-bold">£89</p>
                <p className="text-sm text-gray-500">+ Free express shipping</p>
                <Button className="mt-2 w-full bg-[#002a3a]">Checkout</Button>
              </div>
            </div>
            <div className="py-4 px-8 border rounded border-slate-400 bg-white">
              <h3 className="text-2xl font-light border-b-2 border-slate-700 pb-5">Progress Pack - 2 month plan</h3>
              <ul className="mt-4 space-y-2 text-sm">
                <li className="pb-4">Receive 4 continuous glucose monitors (CGM). Box of 2 CGMs shipped monthly†</li>
                <li className="pb-4">Lingo Program for 2 months† combining our science with your personal insights</li>
                <li className="pb-4">
                  Real-time data stream; producing helpful tips, notifications, weekly reports with focus areas and
                  goals
                </li>
                <li className="pb-4">Exclusive lessons and content created by world-leading doctors</li>
                <li className="pb-4">30-day money-back guarantee†</li>
              </ul>
              <div className="mt-4">
                <p className="text-2xl font-bold">£300</p>
                <p className="text-sm text-gray-500">Equal to £150/mo</p>
                <p className="text-sm text-gray-500">+ Free express shipping</p>
                <Button className="mt-2 w-full bg-[#002a3a]">Checkout</Button>
              </div>
            </div>
          </div>
          <p className="text-xs text-gray-500">
            Only available on iOS.
            <br />
            *No auto-renewal. Applies to new customers; first shipment only; see our Terms of Sale.
            <br />
            †Each month is equivalent to 28 days. Plan auto-renews at £120 per month after 2 months.
            <br />
            †Applies to new customers; first shipment only; see our Terms of Sale.
          </p>
          <Accordion className="w-full" collapsible type="single">
            <AccordionItem value="faq-1">
              <AccordionTrigger>How do I track my order?</AccordionTrigger>
              <AccordionContent>
                You can track your order by logging into your account and checking the order status.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="faq-2">
              <AccordionTrigger>What payment methods do you accept?</AccordionTrigger>
              <AccordionContent>We accept all major credit cards and PayPal for payment.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="faq-3">
              <AccordionTrigger>Can I return my purchase?</AccordionTrigger>
              <AccordionContent>Yes, you can return your purchase within 30 days for a full refund.</AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      <footer className="bg-[#002a3a] text-gray-50 p-8 mt-8 flex justify-between">
        <div className="container flex justify-between">
          <nav className="flex space-x-4">
            <a className="hover:underline" href="#">
              Home
            </a>
            <a className="hover:underline" href="#">
              Products
            </a>
            <a className="hover:underline" href="#">
              About Us
            </a>
            <a className="hover:underline" href="#">
              Contact
            </a>
          </nav>
          <div>
            <a className="hover:underline" href="#">
              Terms of Use
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

