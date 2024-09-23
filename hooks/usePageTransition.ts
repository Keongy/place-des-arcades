import {useEffect, useState} from "react";
import {useRouter} from "next/navigation";

interface UsePageTransitionReturn {
  transitionClassName: string;
  handleNavigation: (path: string) => void;
}

type initialClass = "position-in" | "position-top-out" | "position-bottom-out";
type transitionClass =
  | "slide-out-up"
  | "slide-in-up"
  | "slide-out-down"
  | "slide-in-down";

// Hook personnalisé
export const usePageTransition = (
  initialClass: initialClass = "position-in",
  transitionOutClass: transitionClass = "slide-out-up",
  transitionInClass: transitionClass = "slide-in-up",
  duration: number = 200
): UsePageTransitionReturn => {
  const [transitionClassName, setTransitionClassName] =
    useState<string>(initialClass);
  const router = useRouter();

  const handleNavigation = (path: string) => {
    // Démarre l'animation de sortie
    setTransitionClassName(transitionOutClass);
    setTimeout(() => {
      router.push(path);
    }, duration);
  };

  useEffect(() => {
    // Lorsque la page change, applique l'animation d'entrée
    setTransitionClassName(transitionInClass);
  }, [transitionInClass]);

  return {transitionClassName, handleNavigation};
};
