import { HeaderLogoPill } from "./components/HeaderLogoPill";
import { Paragraph } from "./components/Paragraph";
import { Button } from "./components/Button";
import { Slider } from "./components/Slider";
import { Section } from "./components/Section";
import { HoneycakesBlock } from "./components/HoneycakesBlock";
import Script from "next/script";
import { LinkToApp } from "./components/LinkToApp";
import { Promocode } from "./components/Promocode";
import { ArrowDown } from "./components/SVGs";
import { CookiesToast } from "./components/CookiesToast";
import { HelpButton } from "./components/HelpButton";

export default function Home() {
  return (
    <>
      <Script src="/analytics.js" />
      <main className="">
        <div className="site-header flex-centered">
          <img alt="logo" src="./logo.svg" />
        </div>

        <div className="flex-centered">
          <img alt="children" src="./children__m.png" />
        </div>

        <p style={{}}>
          Детям часто бывает непросто со своими взрослыми и это нормально!
          Самокат и «Достаточно хорошие родители» сделали проект, который
          поможет родителям и детям чуть лучше понимать друг друга.  Мы
          попросили главных экспертов детства рассказать о своих увлечениях и
          дать несколько советов взрослым. Их ответы помогут вашему
          игрательному, бегательному, прыгательному и хохотательному развитию
        </p>

        {/* <div className="zaglushka" /> */}

        {/* <Section id="1">
          <Paragraph
            className="greeting"
            title={{
              text: "Помогаем вместе",
              align: "center",
            }}
            contentAlign="center"
          >
            Привет! Это Самокат и фонд <br /> «Солнечный город».
          </Paragraph>

          <div className=" desktop-only">
            <div className="flex-centered arrow-down-block">
              <ArrowDown />
            </div>
          </div>
          <Paragraph className="intro">
            За&nbsp;год вы&nbsp;наверняка сделали что-то важное и&nbsp;приятное
            для&nbsp;себя и&nbsp;близких. Мы&nbsp;придумали, как&nbsp;порадовать
            ещё больше людей перед праздником. Вместе с&nbsp;нами вы&nbsp;можете
            поддержать семьи в&nbsp;трудной жизненной ситуации&nbsp;&mdash;
            заказать для&nbsp;них нужные товары в&nbsp;подарок.
            <br />
            <br />
            Расскажем, как это сделать и&nbsp;получить скидку на&nbsp;покупки
            в&nbsp;Самокате. А&nbsp;ещё поделимся милыми историями подопечных
            фонда.
          </Paragraph>
        </Section>

        <Section id="2">
          <Paragraph title={{ text: "Зачем помогать" }}>
            Семьи часто встречаются с&nbsp;разными трудностями. Одни справляются
            с&nbsp;ними: например, обращаются за&nbsp;помощью к&nbsp;близким.
            А&nbsp;другим может потребоваться дополнительная
            поддержка&nbsp;&mdash; из-за&nbsp;переезда, потери работы
            или&nbsp;ссоры с&nbsp;родственниками.
            <br />
            <br />
            Благотворительный фонд &laquo;Солнечный город&raquo; помогает таким
            семьям. Вместе с Самокатом вы&nbsp;тоже можете это
            сделать&nbsp;&mdash; например, заказать продукты для&nbsp;ужина.
          </Paragraph>

          <div className="mobile-only">
            <Button href="#how-to-help" label="Помочь фонду" />
          </div>
        </Section>

        <Section id="3">
          <Paragraph
            contentAlign="center"
            title={{ text: "Чем вдохновиться", align: "center" }}
          >
            <div style={{ margin: "0 auto" }}>
              Мы&nbsp;попросили ребят, которых поддерживает фонд, рассказать
              об&nbsp;их&nbsp;больших и&nbsp;маленьких делах. Это&nbsp;поможет
              вам вспомнить и&nbsp;о&nbsp;своих классных достижениях.
            </div>
          </Paragraph>
        </Section>

        <Section id="4">
          <div className="white-pill">
            Чтобы прочитать истории и пожелания, <br /> нажимайте на игрушки.
            Их тоже украсили <br />
            дети — специально для нашего проекта.
          </div>
        </Section>

        <HoneycakesBlock />

        <Section id="how-to-help">
          <Paragraph title={{ text: "Как помочь" }}>
            Закажите товары для&nbsp;семей на&nbsp;один из&nbsp;шести адресов
            фонда. Для&nbsp;этого мы&nbsp;собрали подборку с&nbsp;нужными
            продуктами.
            <br />
            <br />
            После вы получите скидку на&nbsp;следующую покупку в&nbsp;Самокате.
          </Paragraph>

          <Slider />

          <LinkToApp />
        </Section>

        <Section id="6">
          <p>
            Узнать больше о&nbsp;работе фонда <br />
            «Солнечный город» и&nbsp;помочь семьям <br /> можно на&nbsp;сайте
            организации
          </p>
          <Button
            href="https://sgdeti.ru/"
            target="_blank"
            label="Поддержать фонд"
          />
        </Section>

        <Section id="7">
          <div className="promoblock">
            А чтобы немного поддержать себя, закажите что-то вкусное
            к&nbsp;завтраку. Дарим вам промокод на&nbsp;покупки в&nbsp;Самокате.
            <Promocode code={"СОЛНЕЧНЫЙГОРОД"} />
            Даёт скидку 7% при заказе от 900 ₽.
            <br />
            Действует по 16 декабря 2023 года.
            <div style={{ marginTop: 22 }}>
              <a
                target="_blank"
                href="https://terms.samokat.ru/promo/Pravila_akcii_Suncity_2023.pdf"
                style={{ textDecoration: "underline" }}
              >
                Правила акции
              </a>
            </div>
          </div>
        </Section> */}
      </main>
      <Section id="8">
        <footer>
          <div style={{ opacity: 0.5 }}>
            Акция проходит с 08.12.2023 по 14.12.2023 г. Информацию
            о&nbsp;порядке проведения акции, сроке и&nbsp;количестве товара,
            участвующего в&nbsp;акции, уточняйте в{" "}
            <a
              style={{ textDecoration: "underline" }}
              target="_blank"
              href="https://terms.samokat.ru/promo/Pravila_akcii_Suncity_2023.pdf"
            >
              Правилах акции
            </a>
            . Продавец ООО&nbsp;«Умный ритейл», ОГРН 1177847261602, 121087,
            г.&nbsp;Москва, ул.&nbsp;Барклая, д.&nbsp;6 стр.&nbsp;3,
            помещ.&nbsp;8Н/4. Зоны доставки и&nbsp;точное время доставки
            уточняйте в&nbsp;мобильном приложении «Самокат».{" "}
            <a
              style={{ textDecoration: "underline" }}
              target="_blank"
              href="https://samokat.ru/privacy"
            >
              Политика
            </a>{" "}
            обработки персональных данных для&nbsp;«Умного ритейла».
          </div>
          <div className="made-by">
            Сделано в{" "}
            <a target="_blank" href="https://groznov.co/">
              GROZNOV
            </a>
            ®
          </div>
        </footer>
      </Section>
      <div className="bottom-sticked-block">
        <div className="help-button-block">
          <HelpButton />
        </div>
        <div className="my-cookies-block">
          <CookiesToast />
        </div>
        <div className="desktop-only expander" />
      </div>
    </>
  );
}
