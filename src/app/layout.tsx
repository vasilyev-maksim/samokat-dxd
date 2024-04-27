import localFont from "next/font/local";
import type { Metadata } from "next";
import "./normalize.css";
import "./globals.css";
import { url } from "./utils";
import { CookiesToast } from "./components/CookiesToast";
import { BackstageLink } from "./components/BackstageLink";

// Font files can be colocated inside of `pages`
const myFont = localFont({
  // src: "./Euclid Circular A Regular.ttf"
  src: [
    { path: "/fonts/Euclid Circular A Light.ttf", weight: "400" },
    // { path: "/fonts/Euclid Circular A Regular.ttf", weight: "450" },
    { path: "/fonts/Euclid Circular A SemiBold.ttf", weight: "500" },
    { path: "/fonts/Euclid Circular A Medium.ttf", weight: "450" },
    // { path: "/fonts/Euclid Circular A Bold.ttf", weight: "500" },
  ],
});

export const metadata: Metadata = {
  title: "Эксперты детства",
  // description: "Поддержите подопечных фонда и получите подарок от Самоката",
  openGraph: {
    images: [url("./opengraph.png")],
    title: "Эксперты детства",
    description:
      "Самокат и «Достаточно хорошие родители» делятся советами о воспитании родителей",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={myFont.className}>
        <main>
          <div className="site-header">
            <div className="samokat flex-centered">
              <a
                target="_blank"
                href="https://samokat.ru/?utm_source=google_gmb&utm_medium=cpc&utm_campaign=gmb_smkt_google_search_static_brand&utm_content=brand-delivery_154307442362|target_самокат доставка|format_search|ar_brand&utm_term=cid_20490534643|gid_154307442362|adid_685300709241|tid_kwd-298615479801|kw_самокат доставка|mtype_b|d_c|5155271087259116539&gad_source=1&gclid=CjwKCAjwt-OwBhBnEiwAgwzrUkI0OEmNltcenrsdWXK4cNyICiNrOHyIvJzN9xrpe74baMCUXp5eRRoCnKIQAvD_BwE"
              >
                <img alt="logo" src={url("./samokat_logo.svg")} />
              </a>
            </div>
            <div className="separator"></div>
            <div className="dxd">
              <a target="_blank" href=" https://goodenoughparents.ru/">
                <img alt="logo" src={url("./dxd_logo.svg")} />
              </a>
            </div>
          </div>
          {children}

          <footer>
            <p>
              Акция проходит с&nbsp;11.04.2024 по&nbsp;25.04.2024&nbsp;г.
              Информацию о&nbsp;порядке проведения акции, сроке
              и&nbsp;количестве товара, участвующего в&nbsp;акции,
              уточняйте&nbsp;в&nbsp;
              <a href="https://terms.samokat.ru/promo/Pravila_promokod_deti.pdf">
                Правилах акции
              </a>
              . Продавец ООО &laquo;Умный ритейл&raquo;, ОГРН 1177847261602,
              121087, г. Москва, ул. Барклая, д.&nbsp;6&nbsp;стр.&nbsp;3, помещ.
              8Н/4. Зоны доставки и точное время доставки уточняйте
              в&nbsp;мобильном приложении Самоката.&nbsp;
              <a href="https://samokat.ru/privacy">
                Политика обработки персональных данных для &laquo;Умного
                ритейла&raquo;
              </a>
              .
              <br />
              <br />
              Психологи и&nbsp;психотерапевты не&nbsp;оказывают медицинских
              услуг в&nbsp;сервисе &laquo;Достаточно хорошие родители&raquo;.
            </p>
            <div className="made-by">
              Сделано&nbsp;в&nbsp;
              <a target="_blank" href="https://groznov.co/">
                GROZNOV
              </a>
              ® &nbsp; &nbsp; &nbsp;
              <BackstageLink />
            </div>
          </footer>
          <div className="bottom-sticked-block">
            <CookiesToast />
          </div>
        </main>
      </body>
    </html>
  );
}
