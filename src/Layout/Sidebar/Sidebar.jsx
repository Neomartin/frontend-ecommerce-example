import './Sidebar.css';
export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__logo">{/* <img src={logo} alt="logo" /> */}</div>
      <div className="sidebar__menu">
        <ul className="sidebar__list">
          <li>
            <h3 className="sidebar-item__title">Categoría</h3>
            <div className="input-group">
              <select defaultValue={''}>
                <option value="" disabled>
                  Seleccionar
                </option>
                <option value="1">Electrónicos</option>
                <option value="2">Ropa</option>
                <option value="3">Hogar</option>
                <option value="4">Juguetes</option>
              </select>
            </div>
          </li>
          <li className="sidebar__item">
            <h3 className="sidebar-item__title">Precio</h3>
            <div className="input-row">
              <div className="input-group">
                <input type="number" className="input" placeholder="Min" />
              </div>
              <div className="input-group">
                <input type="number" className="input" placeholder="Max" />
              </div>
            </div>
          </li>

          <li>
            <span className="text-muted">Otros filtros</span>
            {/* <a href="/orders">Orders</a> */}
          </li>
          <li>{/* <a href="/users">Users</a> */}</li>
        </ul>
      </div>
    </div>
  );
}
