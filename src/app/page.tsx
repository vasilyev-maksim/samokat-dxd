import Script from "next/script";
import { ChildSection } from "./components/ChildSection";
import { SetsSlider } from "./components/SetsSlider";
import { Promocode } from "./components/Promocode";
import { Button } from "./components/Button";
import { CookiesToast } from "./components/CookiesToast";
import { Br } from "./components/Br";
import { url } from "./utils";

export default function Home() {
  return (
    <>
      <Script src="/analytics.js" />
      <Script src="https://player.vimeo.com/api/player.js" />
      <main>
        <div className="site-header flex-centered">
          <img alt="logo" src={url("./logo.svg")} />
        </div>
        <div id="section-0">
          <img
            alt={"children"}
            src={url("./children__m.png")}
            className="mobile-only"
          />
          <img
            alt={"children"}
            src={url("./children__d.png")}
            className="desktop-only"
          />
        </div>
        <div id="section-1">
          Детям иногда бывает непросто со своими взрослыми. И это нормально!
          <Br for="mobile" />
          <Br for="mobile" />
          Самокат и «Достаточно хорошие родители» сделали проект, который
          поможет родителям и детям чуть лучше понимать друг друга.
          <br />
          <br />
          Мы попросили главных экспертов детства рассказать о своих увлечениях и
          дать несколько советов взрослым. Их ответы помогут вашему
          игрательному, бегательному, прыгательному и хохотательному развитию.
        </div>
        <div id="section-2">
          <h2>Как воспитывать родителей</h2>

          <p className="p">
            Смотрите интервью экспертов, чтобы научиться жить со взрослыми. А
            ещё чтобы узнать, как найти вдохновение и любопытство — если они
            где-то потерялись.
          </p>

          <ChildSection
            name={"Василиса"}
            occupation={
              <>
                специалист <br /> по долгоигранию
              </>
            }
            index={1}
          />

          <ChildSection
            name={"Оливер"}
            occupation={"кулинарный критик"}
            index={2}
          />
          <ChildSection
            name={"Матвей"}
            occupation={
              <>
                специалист <br /> по бегательному развитию
              </>
            }
            index={3}
          />
          <ChildSection
            name={"Захар"}
            occupation={"эксперт по всем вопросам"}
            index={4}
          />
          <ChildSection
            name={"Агата"}
            occupation={"ценитель высокого искусства"}
            index={5}
          />
        </div>

        <div id="section-3">
          <h2>
            Что пригодится, пока <br /> занимаетесь любимым делом
          </h2>
          <br />
          <SetsSlider />
        </div>

        <div id="section-4">
          <h2 className="red">
            Ещё больше продуктов для <br /> детей и родителей можно <br />
            заказать в нашем приложении
          </h2>

          <Promocode code="ДЕТСТВО" />

          <p className="text-center red weight-500 size-16">
            Даёт скидку 15% при заказе от 1000 ₽ — <br /> на товары бренда
            Самокат
          </p>

          <br />
          <Button label="Выбрать набор" />
        </div>

        <footer>
          <p>
            Акция проходит с 11.04.2024 по 25.04.2024 г. Информацию о порядке
            проведения акции, сроке и количестве товара, участвующего в акции,
            уточняйте в{" "}
            <a
              href="https://terms.samokat.ru/promo/Pravila_promokod_deti.pdf
"
            >
              Правилах акции
            </a>
            . Продавец ООО «Умный ритейл», ОГРН 1177847261602, 121087, г.
            Москва, ул. Барклая, д. 6 стр. 3, помещ. 8Н/4. Зоны доставки и
            точное время доставки уточняйте в мобильном приложении «Самокат».{" "}
            <a href="https://samokat.ru/privacy">
              Политика обработки персональных данных для «Умного ритейла»
            </a>
            .
            <br />
            <br />
            Психологи и Психотерапевты не оказывают медицинских услуг в сервисе
            &quot;Достаточно хорошие родители&quot;.
          </p>
          <div className="made-by">
            Сделано в{" "}
            <a target="_blank" href="https://groznov.co/">
              GROZNOV
            </a>
            ®
          </div>
        </footer>
        <div className="bottom-sticked-block">
          <CookiesToast />
        </div>
      </main>
    </>
  );
}
