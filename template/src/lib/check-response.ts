import RES_STATUS from "./res-status";
const {
  INTERNAL,
  UNDEFINED,
  NOT_FOUND,
  INVALID_DATA,
  UNAUTHORIZED,
  FORBIDDEN,
} = RES_STATUS;

export const checkResponse = async <T>(res: Response): Promise<T> => {
  if (res.ok) {
    return res.json();
  }

  let errorMessage = UNDEFINED.MESSAGE;
  try {
    const errorData = await res.json();
    errorMessage = errorData.message || JSON.stringify(errorData);
  } catch {
    // Если ответ не JSON, обрабатываем по коду ошибки
    switch (res.status) {
      case INVALID_DATA.CODE:
        errorMessage = INVALID_DATA.MESSAGE;
        break;
      case UNAUTHORIZED.CODE:
        errorMessage = UNAUTHORIZED.MESSAGE;
        break;
      case FORBIDDEN.CODE:
        errorMessage = FORBIDDEN.MESSAGE;
        break;
      case NOT_FOUND.CODE:
        errorMessage = NOT_FOUND.MESSAGE;
        break;
      case INTERNAL.CODE:
        errorMessage = INTERNAL.MESSAGE;
        break;
      default:
        errorMessage = UNDEFINED.MESSAGE;
        break;
    }
  }

  throw new Error(errorMessage);
};
