import { IStorage } from "./interface";

export const useStorage = ({ type = sessionStorage }: IStorage) => {
  const stotage: Storage = type;

  const setItem = (key: string, value: string) => {
    try {
      stotage.setItem(key, value);
    } catch (error) {
      console.error(error);
    }
  };

  const getItem = (key: string) => {
    try {
      stotage.getItem(key);
    } catch (error) {
      console.log(error);
    }
  };

  const removeItem = (key: string) => {
    try {
      stotage.removeItem(key);
    } catch (error) {
      console.error(error);
    }
  };

  return {
    setItem,
    getItem,
    removeItem,
  };
};
