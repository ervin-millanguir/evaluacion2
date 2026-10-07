import { useEffect, useState } from "react";
import { useCarrito } from "../context/useCarrito";
import { obtenerProductos } from "../services/productosService";
import { formatearMoneda } from "../utils/formatearMoneda";

function Inicio() {
	const [productos, setProductos] = useState([]);
	const { agregarAlCarrito } = useCarrito();

	useEffect(() => {
		obtenerProductos().then(setProductos);
	}, []);

	return (
		<>
			<header className="py-4">
				<p className="text-success fw-semibold mb-2">Cuidado para toda la vida</p>
				<h1 className="display-5 fw-bold">Todo lo que tu mascota necesita</h1>
				<p className="lead text-secondary">
					Productos seleccionados para cuidar, alimentar y acompañar a tus mascotas.
				</p>
			</header>

			<section className="row g-4" aria-label="Catalogo de productos">
				{productos.map((producto) => (
					<article className="col-12 col-md-6 col-lg-4" key={producto.id}>
						<div className="card producto-card h-100 shadow-sm border-0">
							<img className="card-img-top producto-imagen" src={producto.imagen} alt={producto.nombre} />
							<div className="card-body d-flex flex-column">
								<span className="small text-success fw-semibold">{producto.categoria}</span>
								<h2 className="h5 mt-2">{producto.nombre}</h2>
								<p className="text-secondary flex-grow-1">{producto.descripcion}</p>
								<div className="d-flex justify-content-between align-items-center gap-3">
									<strong>{formatearMoneda(producto.precio)}</strong>
									<button className="btn btn-success" type="button" onClick={() => agregarAlCarrito(producto)}>
										Agregar
									</button>
								</div>
							</div>
						</div>
					</article>
				))}
			</section>
		</>
	);
}

export default Inicio;
