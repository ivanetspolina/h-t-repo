import "../css/main.css";
import "../scss/index.css";
import Header from "../components/Header";
import photo from "../photo/DSC_3855(2).jpg";

export default function Index() {
  return (
    <>
      <Header />

      <div className="index index-container">
        <img className="photo" src={photo} alt="photo" />

        <div className="index_name">
          <div className="name_block">
            <p className="label_for_name">Прізвище:</p>
            <span className="text_name">Іванець</span>
          </div>
          <div className="name_block">
            <p className="label_for_name">Ім'я:</p>
            <span className="text_name">Поліна</span>
          </div>
          <div className="name_block">
            <p className="label_for_name">Побатькові:</p>
            <span className="text_name">Олександрівна</span>
          </div>
        </div>

        <div className="index_text">
          <p>19 років.</p>
          <p>Живу і навчаюсь в місті Києві.</p>
          <p>
            Програмуванню навчалась в школі та продовжую вивчати на
            спеціальності 121 Інженерія програмного забезпечення.
          </p>
          <p>
            В університеті вивчаємо багато чого, але хочеться вже визначитись з
            напрямком спеціальності для роботи.
          </p>
          <p>
            Вирішила спробувати курс з цікавості. Мені має підійти робота за цим
            напрямком.{" "}
          </p>
        </div>
      </div>
    </>
  );
}
