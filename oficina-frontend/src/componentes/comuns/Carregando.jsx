import Spinner from "react-bootstrap/Spinner";

export default function Carregando(props) {
  return (
    <>
      {!props.carregando ? (
        props.children
      ) : (
        <div className="d-flex align-items-center m-5">
          <strong role="status" className="me-2">
            Carregando...
          </strong>
          <Spinner
            animation="border"
            size="sm"
            variant="primary"
            className="me-1"
          />
          <Spinner animation="border" variant="primary" />
        </div>
      )}
    </>
  );
}
