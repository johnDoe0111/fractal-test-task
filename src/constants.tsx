import CompletedDot from "./assets/icons/Check Small.png"
import ActiveDot from "./assets/icons/Dot Small.png"
import Folder from "./assets/icons/Folder.png"

export const mainHeaderIcons = [
  {
    id: 1,
    title: "Telegram",
    image: Folder,
    link: "https://t.me/qahegshvu",
  },
  {
    id: 2,
    title: "GitHub",
    image: Folder,
    link: "https://github.com/johnDoe0111",
  },
  {
    id: 3,
    title: "Резюме",
    image: Folder,
    link: "https://groznyj.hh.ru/resume/a8365eaeff0bdaf7880039ed1f6e6f72574a44",
  },
]

export const name = "Абдурахман Эдильбиев"

export const progressBarData = [
  {
    id: 1,
    name: "dot",
  },
  {
    id: 2,
    name: "line",
  },
  {
    id: 3,
    name: "dot",
  },
  {
    id: 4,
    name: "line",
  },
  {
    id: 5,
    name: "dot",
  },
]

export const dotData = [
  { step: 1, activeImg: ActiveDot, completedImg: CompletedDot, id: 1 },
  { step: 2, activeImg: ActiveDot, completedImg: CompletedDot, id: 2 },
  { step: 3, activeImg: ActiveDot, completedImg: CompletedDot, id: 3 },
]

export const firstStepInputs = [
  {
    id: 1,
    name: "nickname",
    label: "Никнейм",
    type: "input",
    placeholder: "Placeholder",
  },
  {
    id: 2,
    name: "name",
    label: "Имя",
    type: "input",
    placeholder: "Placeholder",
  },
  {
    id: 3,
    name: "lastname",
    label: "Фамилия",
    type: "input",
    placeholder: "Placeholder",
  },
]

export const options = [
  {
    id: 1,
    value: "Не выбрано"
  },
  {
    id: 2,
    value: "Мужской"
  },
  {
    id: 3,
    value: "Женский"
  }
]

export const initialInputs = [{ id: 1, type: "input",  }];

export const group = [
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  }
]