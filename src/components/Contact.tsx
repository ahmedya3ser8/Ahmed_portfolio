import { Element } from "react-scroll";

export default function Contact() {
  return (
    <Element name="contact" className="border-b border-neutral-900 pb-2">
      <h2 className="text-4xl text-center mt-12 mb-6">Get in Touch</h2>
      <div className="flex justify-center items-center gap-5 pb-3">
        <p>Mansoura, Egypt</p>
        <a href="tel:+201008242154" target="_blank" className="underline text-purple-500">+201008242154</a>
        <a href="mailto:ahmedya3ser8@gmail.com" target="_blank" className="underline text-purple-500">ahmedya3ser8</a>
      </div>
    </Element>
  )
}
