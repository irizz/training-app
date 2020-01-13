export const ASSETS_DIR_PATH = "src/assets/";

export const HOME_PAGE_PATH = "/";
export const TEST_INTRO_PAGE_PATH = "/test";
export const TEST_PAGE_PATH = "/test/session";
export const TRAIN_INTRO_PAGE_PATH = "/train";
export const TRAIN_PAGE_PATH = "/train/session";

export const MODES_KEYS = Object.freeze({
  TRAIN: "1",
  TEST: "2"
});

export const COMPLEXITY_VALUES = Object.freeze([
  {
    header: "Базовый",
    value: "basic"
  },
  {
    header: "Продвинутый",
    value: "advanced"
  },
  {
    header: "Профессионал",
    value: "professional"
  }
]);

export const SECTION_VALUES = Object.freeze([
  {
    header: "Основы JavaScript: переменные, типы данных, операторы",
    value: "basic-1"
  },
  {
    header: "Основы JavaScript: функции, объекты, массивы, циклы",
    value: "basic-2"
  },
  {
    header: "Работа с DOM",
    value: "dom"
  },
  {
    header: "ООП в JavaScript",
    value: "oop"
  },
  {
    header: "AJAX",
    value: "ajax"
  },
  {
    header: "Нововведения в ES6",
    value: "es6"
  }
]);
