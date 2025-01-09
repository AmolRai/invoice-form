import { useState, useEffect } from "react";

const useAuthCheck = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem("isAuthenticated");
      const parseToken = JSON.parse(token);

      if (parseToken) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }

      setLoading(false);
    };

    checkAuth();
  }, []);

  return { isAuthenticated, loading };
};

export default useAuthCheck;
