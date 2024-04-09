import * as React from "react";
import { Honeycake } from "./Honeycake";

export const HoneycakesBlock: React.FC = () => {
  return (
    <>
      <Honeycake
        labelDirection="left"
        child={{
          age: "10 лет",
          name: "Артём",
          text: (
            <>
              Я хочу пожелать, чтобы вы&nbsp;не&nbsp;болели, хорошо учились
              и&nbsp;в&nbsp;жизни всё было хорошо. Чтобы любили свою маму.
              <br />
              <br />
              В этом году я&nbsp;научился мечтать и&nbsp;строить планы. Хочу
              пойти на&nbsp;секцию по&nbsp;футболу и&nbsp;побывать
              на&nbsp;хоккейном матче.
            </>
          ),
          id: "artem10",
        }}
      />
      <Honeycake
        labelDirection="right"
        child={{
          age: "8 лет",
          name: "Дима",
          text: (
            <>
              Желаю вам успехов. И&nbsp;чтобы было много конфет!
              <br />
              <br />
              Я&nbsp;в&nbsp;этом году научился ездить на&nbsp;велосипеде
              с&nbsp;одной рукой и&nbsp;забивать голы в&nbsp;ворота.
            </>
          ),
          id: "dima8",
        }}
      />
      <Honeycake
        labelDirection="left"
        child={{
          age: "3 года",
          name: "Мила",
          text: (
            <>
              С Новым годом!
              <br />
              <br />
              В&nbsp;этом году я&nbsp;пошла в&nbsp;детский сад. Теперь мальчишки
              из&nbsp;группы&nbsp;&mdash; мои лучшие друзья.
            </>
          ),
          id: "mila3",
        }}
      />
      <Honeycake
        labelDirection="left"
        child={{
          age: "6 лет",
          name: "Дарина",
          text: (
            <>
              С Новым годом! Всем желаю праздника.
              <br />
              <br />
              Я&nbsp;научилась быстро бегать и&nbsp;прыгать на&nbsp;одной ноге
              за&nbsp;этот год.
            </>
          ),
          id: "darina6",
        }}
      />
      <Honeycake
        labelDirection="right"
        child={{
          age: "6 лет",
          name: "Марина",
          text: (
            <>
              Всем желаю много-много-много-много любви. И&nbsp;даже Деду Морозу.
              <br />
              <br />
              Я&nbsp;буду солисткой в&nbsp;новогоднем представлении в&nbsp;этом
              году. Буду танцевать, как&nbsp;мышка!
            </>
          ),
          id: "marina6",
        }}
      />
    </>
  );
};
