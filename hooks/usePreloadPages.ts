import {useRouter} from "next/navigation";
import {useEffect} from "react";

export const usePreloadPages = (): void => {
  const router = useRouter();

  useEffect(() => {
    // Précharge manuellement les pages spécifiques
    router.prefetch("/check-in");
    router.prefetch("/practical ");
    router.prefetch("/check-out");
    router.prefetch("/wifi");
    router.prefetch("/around-me");
    router.prefetch("/partners");
    router.prefetch("/guestbook");
  }, [router]);
};
