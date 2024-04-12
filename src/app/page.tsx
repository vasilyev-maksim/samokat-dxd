import Script from "next/script";
import { ChildSection } from "./components/ChildSection";
import { SetsSlider } from "./components/SetsSlider";
import { Promocode } from "./components/Promocode";
import { CookiesToast } from "./components/CookiesToast";
import { Br } from "./components/Br";
import { url } from "./utils";
import { ChooseSetButton } from "./components/ChooseSetButton";
import config from "./config.json";

export default function Home() {
  return (
    <>
      <Script src={url("/analytics.js")} />
      <Script src="https://player.vimeo.com/api/player.js" />
      <main>
        <div className="site-header flex-centered">
          <img alt="logo" src={url("./logo.svg")} />
        </div>
        <div id="section-0">
          <img alt={"children"} />
        </div>
        <div id="section-1">
          Детям иногда бывает непросто со&nbsp;своими взрослыми. И&nbsp;это
          нормально!&nbsp;
          <Br for="mobile" />
          <Br for="mobile" />
          Самокат и&nbsp;&laquo;Достаточно хорошие родители&raquo; сделали
          проект, который поможет родителям и&nbsp;детям чуть лучше понимать
          друг друга.
          <br />
          <br />
          Мы&nbsp;попросили главных экспертов детства рассказать о&nbsp;своих
          <Br for="desktop" />
          увлечениях и дать несколько советов взрослым. Их&nbsp;ответы помогут
          <Br for="desktop" />
          вашему игрательному, бегательному, прыгательному и&nbsp;хохотательному
          <Br for="desktop" />
          развитию.
        </div>
        <div id="section-2">
          <h2>Как воспитывать родителей</h2>

          <p className="p">
            Смотрите интервью экспертов, чтобы научиться жить со&nbsp;взрослыми.
            А ещё чтобы узнать, как найти вдохновение&nbsp;
            и&nbsp;любопытство&nbsp;&mdash; если они где-то потерялись.
          </p>

          {config.children.map((_, i) => (
            <ChildSection key={i} index={i} />
          ))}
        </div>

        <div id="section-3">
          <h2>
            Что пригодится, пока занимаетесь <Br for="desktop" />
            любимым&nbsp;делом
          </h2>
          <br />
          <SetsSlider />
        </div>

        <div id="section-4">
          <h2 className="red">
            Ещё больше продуктов для&nbsp;детей <Br for="desktop" />{" "}
            и&nbsp;родителей можно заказать <Br for="desktop" />
            в&nbsp;нашем приложении
          </h2>

          <Promocode code="ДЕТСТВО" />

          <p className="text-center red weight-500 size-16 mobile-only">
            Даёт скидку&nbsp;15% на&nbsp;товары бренда Самокат при заказе
            от&nbsp;1000&nbsp;₽
          </p>

          <ChooseSetButton />

          <p className="text-center red weight-450 size-16 desktop-only discount">
            Даёт скидку&nbsp;15% на&nbsp;товары бренда Самокат <br />
            при заказе от&nbsp;1000&nbsp;₽
          </p>
        </div>

        <footer>
          <p>
            Акция проходит с&nbsp;11.04.2024 по&nbsp;25.04.2024&nbsp;г.
            Информацию о&nbsp;порядке проведения акции, сроке и&nbsp;количестве
            товара, участвующего в&nbsp;акции, уточняйте&nbsp;в&nbsp;
            <a href="https://terms.samokat.ru/promo/Pravila_promokod_deti.pdf">
              Правилах акции
            </a>
            . Продавец ООО &laquo;Умный ритейл&raquo;, ОГРН 1177847261602,
            121087, г. Москва, ул. Барклая, д.&nbsp;6&nbsp;стр.&nbsp;3, помещ.
            8Н/4. Зоны доставки и точное время доставки уточняйте
            в&nbsp;мобильном приложении &laquo;Самокат&raquo;.&nbsp;
            <a href="https://samokat.ru/privacy">
              Политика обработки персональных данных для &laquo;Умного
              ритейла&raquo;
            </a>
            .
            <br />
            <br />
            Психологи и&nbsp;психотерапевты не&nbsp;оказывают медицинских услуг
            в&nbsp;сервисе &laquo;Достаточно хорошие родители&raquo;.
          </p>
          <div className="made-by">
            Сделано&nbsp;в&nbsp;
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
