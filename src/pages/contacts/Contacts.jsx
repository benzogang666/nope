import "./Contacts.css";

import { IoLogoInstagram, IoLogoTiktok, IoLogoLinkedin } from "react-icons/io5";

const Contacts = () => {
  return (
    <>
      <div className="contacts">
        <div className="contact">
          <div className="contact-named">Социальные сети</div>
          <div className="contact-items">
            <div>
              <IoLogoInstagram />
            </div>
            <div>
              <IoLogoTiktok />
            </div>
            <div>
              <IoLogoLinkedin />
            </div>
          </div>
        </div>
        <div className="contact">
          <div className="contact-named">Телефонные номера</div>
          <div className="contact-items">
            <div>+7 77 77 77 7666</div>
            <div>+7 77 77 77 7666</div>
            <div>+7 77 77 77 7666</div>
            <div>+7 77 77 77 7666</div>
          </div>
        </div>
        <div className="contact">
          <div className="contact-named">Другие филиалы</div>
          <div className="contact-items">
            <div>Московский 95В</div>
            <div>Чапаевский 105Г</div>
            <div>Макатаев 6Д</div>
            <div>Гагарина 87Е</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contacts;