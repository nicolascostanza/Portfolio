import emailjs from "@emailjs/browser";

export default function emailSender(objetc) {
  emailjs.send(
    "service_b4e6op9",
    "template_nl5836k",
    objetc,
    "6mQZBI1l4Q2Fuv_5S"
  );
}
