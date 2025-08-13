import AppRoutes from "./routes/AppRoutes";
import { useAuth } from "./contexts/AuthContext";

function App() {
  const { loading } = useAuth();

  if (loading) {
    // Auth check complete hone tak loading show karo
    return <div className="min-h-screen flex justify-center items-center">
      <p>Loading...</p>
    </div>;
  }

  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-100 min-h-screen w-full">
      <AppRoutes />
    </div>
  );
}

export default App;
