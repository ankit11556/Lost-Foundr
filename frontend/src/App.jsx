import AppRoutes from "./routes/AppRoutes";
import { useAuth } from "./contexts/AuthContext";

function App() {
  const { loading } = useAuth();

  if (loading) {
    
    return( <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-white">
      {/* Spinner */}
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-white mb-6"></div>

      {/* Message */}
      <p className="text-xl font-semibold tracking-wide animate-pulse">
        Our App is starting...
        </p>
    </div>
    )
  }

  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-100 min-h-screen w-full">
      <AppRoutes />
    </div>
  );
}

export default App;
