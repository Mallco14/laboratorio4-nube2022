const data = [
  {
    id: 1,
    name: "Pepe",
    last_name: "Perez",
  },
  {
    id: 2,
    name: "Juancito",
    last_name: "Sanchez",
  },
  {
    id: 3,
    name: "Maria",
    last_name: "Linda",
  },
];


export const findAll = () => {
  return data;
};

// Buscar por id
export const findOne = (id) => {
  return data.find((u) => u.id === Number(id));
};

// crear
export const store = (user) => {
  //MODIFICANDO
  let id2 = data[data.length - 1].id

  user.id = id2 + 1;
  data.push(user);  
};

// cargar
export const update = (id, user) => {
  const index = data.findIndex((u) => u.id === Number(id));

  data[index] = {
    ...data[index],
    ...user,
  };
};

export const remove = (id) => {
  const users = data.filter((u) => u.id !== Number(id));
  data.length = 0;
  data.push(...users);
};
