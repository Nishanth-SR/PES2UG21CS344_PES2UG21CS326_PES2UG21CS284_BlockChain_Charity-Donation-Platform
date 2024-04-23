import React from "react";

const Footer = () => {
  const productList = ["Nishanth S R", "Navya Manohar Pai", "Mayadevi Poojari"];
  const contactList = ["nishanthsr2003@gmail.com", "navyapaigokarn@gmail.com", "mayadevipoojari196@gmail.com",];
  const usefullLink = ["PES2UG21CS344", "PES2UG21CS326", "PES2UG21CS284"];
  return (
    <footer class="text-center text-white backgroundMain lg:text-left">
      <div class="mx-6 py-10 text-center md:text-left">
        <div class="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div class="">
            <h6 class="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
              Charity Donation Platform
            </h6>
            <p>
              Kindly help the needy. Donate as much as you can...... 
              ನಮ್‌ ಮನ್ಸು ನಮ್ಗೆ ಒಳ್ಳೇದ್‌ ಮಾಡಿದ್ರೆ ದೇವ್ರು................
                         ನಾವು ಬಡವರು.....ನಾವು ಬಡವರು.
            </p>
          </div>
          <div class="">
            <h6 class="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Names :
            </h6>
            {productList.map((el, i) => (
              <p class="mb-4" key={i + 1}>
                <a href="#!">{el}</a>
              </p>
            ))}
          </div>
          <div class="">
            <h6 class="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              SRN :
            </h6>
            {usefullLink.map((el, i) => (
              <p class="mb-4" key={i + 1}>
                <a href="#!">{el}</a>
              </p>
            ))}
          </div>
          <div>
            <h6 class="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Contact
            </h6>
            {contactList.map((el, i) => (
              <p class="mb-4" key={i + 1}>
                <a href="#!">{el}</a>
              </p>
            ))}
          </div>
        </div>
      </div>
      <div class="backgroundMain p-6 text-center">
        <span>©️ 2024 Copyright: </span>
        <a class="font-semibold" href="https://www.pesuacademy.com/Academy/">
          PES University
        </a>
      </div>
    </footer>
  );
};

export default Footer;