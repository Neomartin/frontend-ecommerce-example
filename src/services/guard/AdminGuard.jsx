import { Navigate } from "react-router";
import { useUser } from "../../context/UserContext";

export default function AdminGuard({children}) {

    const { user } = useUser();

    return user?.role === "admin" ? children : <Navigate to="/" replace />;
}
