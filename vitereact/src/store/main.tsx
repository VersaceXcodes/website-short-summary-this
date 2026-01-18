import { useState, useEffect } from 'react';

// Mock Store State
let state = {
  authentication_state: {
    auth_token: null as string | null,
    authentication_status: {
      is_authenticated: false,
      is_loading: false,
    },
    error_message: null as string | null,
  },
  current_workspace: null,
};

const listeners = new Set<() => void>();

// Mock useAppStore to work as both hook and object with getState/setState
type State = typeof state;
type StatePartial = Partial<State>;
type StateCreator = (s: State) => StatePartial;

export const useAppStore = ((selector?: (s: State) => unknown) => {
  const [s, setS] = useState(state);
  useEffect(() => {
    const l = () => setS({ ...state }); // Force new reference
    listeners.add(l);
    return () => { listeners.delete(l); };
  }, []);
  return selector ? selector(s) : s;
}) as {
  (selector?: (s: State) => unknown): unknown;
  getState: () => State;
  setState: (fn: StateCreator | StatePartial) => void;
};

useAppStore.getState = () => state;
useAppStore.setState = (fn: StateCreator | StatePartial) => {
  const partial = typeof fn === 'function' ? fn(state) : fn;
  // Deep merge for authentication_state if needed, but shallow merge is standard for zustand setState
  // However, the test uses spread: ...state.authentication_state
  // So a shallow merge at top level is what zustand does usually.
  state = { ...state, ...partial };
  listeners.forEach(l => l());
};
