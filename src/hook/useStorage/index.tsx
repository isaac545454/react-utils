export const useStorage = (type: Storage) => {
  const stotage: Storage = type;

  const setItem = (key: string, value: unknown) => {
    try {
      stotage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  };

  const getItem = (key: string) => {
    try {
      const item = stotage.getItem(key);
      if (!item) return undefined;
      return JSON.parse(item);
    } catch (error) {
      console.error(error);
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
