export const getClientesAPI = async () => {
  const response = await fetch(
    `${process.env.REACT_APP_ENDERECO_API}/clientes`,
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    },
  );
  return await response.json();
};

export const getClientePorIdAPI = async (id) => {
  const response = await fetch(
    `${process.env.REACT_APP_ENDERECO_API}/clientes/${id}`,
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    },
  );
  return await response.json();
};

export const deleteClientePorIdAPI = async (id) => {
  const response = await fetch(
    `${process.env.REACT_APP_ENDERECO_API}/clientes/${id}`,
    {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    },
  );
  return await response.json();
};

export const cadastraClienteAPI = async (objeto, metodo) => {
  const url =
    metodo === "PUT"
      ? `${process.env.REACT_APP_ENDERECO_API}/clientes/${objeto.id}`
      : `${process.env.REACT_APP_ENDERECO_API}/clientes`;
  const response = await fetch(url, {
    method: metodo,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(objeto),
  });
  return await response.json();
};
