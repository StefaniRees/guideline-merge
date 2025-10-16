import React, {createContext, useContext, useMemo, useState} from 'react';

type Ctx = {
  register: (setter: (open: boolean) => void) => void;
  toggleAll: (open: boolean) => void;
  allOpen: boolean;
  allClosed: boolean;
};

const ExpandCtx = createContext<Ctx | null>(null);

export function ExpandableProvider({children}: {children: React.ReactNode}) {
  const [setters, setSetters] = useState<Array<(o: boolean) => void>>([]);

  const ctx = useMemo<Ctx>(() => {
    const register = (setter: (open: boolean) => void) => {
      setSetters(prev => (prev.includes(setter) ? prev : [...prev, setter]));
    };
    const toggleAll = (open: boolean) => {
      setters.forEach(s => s(open));
    };
    // heurística simples pro estado dos botões (não é crítico)
    const allOpen = false;
    const allClosed = false;
    return {register, toggleAll, allOpen, allClosed};
  }, [setters]);

  return <ExpandCtx.Provider value={ctx}>{children}</ExpandCtx.Provider>;
}

export function useExpandableCtx() {
  const v = useContext(ExpandCtx);
  if (!v) throw new Error('useExpandableCtx must be used inside <ExpandableProvider>');
  return v;
}
