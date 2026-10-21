export const getOrdensServicoAPI = async () => {
  const response = await fetch(`${process.env.REACT_APP_ENDERECO_API}/ordens`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  return await response.json();
};

export const deleteOrdemServicoPorIdAPI = async (id) => {
  const response = await fetch(
    `${process.env.REACT_APP_ENDERECO_API}/ordens/${id}`,
    {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    },
  );
  return await response.json();
};

export const cadastraOrdemServicoAPI = async (objeto, metodo) => {
  const url =
    metodo === "PUT"
      ? `${process.env.REACT_APP_ENDERECO_API}/ordens/${objeto.id}`
      : `${process.env.REACT_APP_ENDERECO_API}/ordens`;
  const payload = { ...objeto, veiculoId: parseInt(objeto.veiculoId) };

  const response = await fetch(url, {
    method: metodo,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  return await response.json();
};
