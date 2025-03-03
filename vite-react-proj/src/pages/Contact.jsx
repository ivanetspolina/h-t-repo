import "../css/main.css";
import "../scss/contact.css";
import sprite from "../svg/sprite.svg";
import Header from "../components/Header";

export default function Contact() {
  return (
    <>
      <Header />

      <div className="contact">
        <ul className="contact_ul">
          <li className="contact_li">
            <a
              className="contact_a a_center"
              href="https://www.instagram.com/ivanets_polina/?utm_source=ig_web_button_share_sheet"
            >
              <svg className="icon">
                <use href={`${sprite}#ig`}></use>
              </svg>
              <span className="contact_text">ivanets_polina</span>
            </a>
          </li>
          <li className="contact_li">
            <a className="contact_a a_center" href="https://t.me/iva_924">
              <svg className="icon">
                <use href={`${sprite}#tg`}></use>
              </svg>
              <span className="contact_text">@iva_924</span>
            </a>
          </li>
          <li className="contact_li">
            <span>
              <svg className="icon">
                <use href={`${sprite}#phone`}></use>
              </svg>
            </span>
            <span className="contact_text">+380 93 736 5457</span>
          </li>
          <li className="contact_li">
            <span className="contact_text citi">м. Київ, Україна</span>
          </li>
        </ul>
      </div>
    </>
  );
}
