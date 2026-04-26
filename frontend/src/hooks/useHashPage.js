import { useEffect, useState } from "react";

export function useHashPage(defaultPage = "landing") {
  const [page, setPage] = useState(() => window.location.hash.replace("#", "") || defaultPage);

  useEffect(() => {
    function handleHashChange() {
      setPage(window.location.hash.replace("#", "") || defaultPage);
    }

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, [defaultPage]);

  function navigate(nextPage) {
    window.location.hash = nextPage;
    setPage(nextPage);
  }

  return [page, navigate];
}
