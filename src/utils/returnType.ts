const treatment = () => {
  return {
    userId: 1,
    id: 1,
    title:
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipitsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
  };
};

export const returnData = ({ title, userId }: ReturnType<typeof treatment>) => {
  return {
    title,
    userId,
  };
};
