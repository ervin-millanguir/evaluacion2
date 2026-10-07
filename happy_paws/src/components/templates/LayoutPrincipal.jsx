import { Link, NavLink, Outlet } from "react-router-dom";
import { useCarrito } from "../../context/useCarrito";

function LayoutPrincipal() {
  const { cantidadTotal } = useCarrito();

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white border-bottom">
        <div className="container">
          <Link className="navbar-brand fw-bold text-success" to="/">
            Happy Paws
          </Link>
          <div className="d-flex align-items-center gap-3">
            <NavLink className="nav-link" to="/datos-personales">
              Mis datos
            </NavLink>
            <button className="btn btn-outline-success" type="button">
              Carrito ({cantidadTotal})
            </button>
          </div>
        </div>
      </nav>
      <main className="container py-4">
        <Outlet />
      </main>
    </>
  );
}

export default LayoutPrincipal;