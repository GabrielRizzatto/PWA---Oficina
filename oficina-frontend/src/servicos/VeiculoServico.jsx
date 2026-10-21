export const getVeiculosAPI = async () => {
  const response = await fetch(
    `${process.env.REACT_APP_ENDERECO_API}/veiculos`,
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    },
  );
  return await response.json();
};

export const getVeiculoPorIdAPI = async (id) => {
  const response = await fetch(
    `${process.env.REACT_APP_ENDERECO_API}/veiculos/${id}`,
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    },
  );
  return await response.json();
};

export const deleteVeiculoPorIdAPI = async (id) => {
  const response = await fetch(
    `${process.env.REACT_APP_ENDERECO_API}/veiculos/${id}`,
    {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    },
  );
  return await response.json();
};

export const cadastraVeiculoAPI = async (objeto, metodo) => {
  const url =
    metodo === "PUT"
      ? `${process.env.REACT_APP_ENDERECO_API}/veiculos/${objeto.id}`
      : `${process.env.REACT_APP_ENDERECO_API}/veiculos`;

  const payload = { ...objeto, clienteId: parseInt(objeto.clienteId) };

  const response = await fetch(url, {
    method: metodo,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  return await response.json();
};
