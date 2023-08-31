const treatment = () => {
  return {
    userId: 1,
    id: 1,
    title:
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipitsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
  };
};

export interface course {
  name: string;
  semester: string;
  ra: string;
}

export interface Student {
  depression: string;
}

export interface IModuleComponent extends course {
  label: string;
}

export type TypePick = Pick<course, "name" | "semester">;

export type TypeOmit = Omit<course, "name">;

export type TypeReturn = ReturnType<typeof treatment>;

export type TypePartial = Partial<course>;

export type typeUnion = course & Student;
