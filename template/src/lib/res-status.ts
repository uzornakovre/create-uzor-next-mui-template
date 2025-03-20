const RES_STATUS = {
  INVALID_DATA: {
    CODE: 400,
    MESSAGE: "Попытка отправки некорректных данных",
  },
  UNAUTHORIZED: {
    CODE: 401,
    MESSAGE: "Требуется авторизация.",
  },
  FORBIDDEN: {
    CODE: 403,
    MESSAGE: "Недостаточно прав, обратитесь к администратору!",
  },
  NOT_FOUND: {
    CODE: 404,
    MESSAGE: "На сервере отсутствуют данные по текущему запросу",
  },
  INTERNAL: {
    CODE: 500,
    MESSAGE: "Сервис недоступен. Попробуйте еще раз через минуту.",
  },
  UNDEFINED: {
    MESSAGE: "Неопознанная ошибка.",
  },
};

export default RES_STATUS;
