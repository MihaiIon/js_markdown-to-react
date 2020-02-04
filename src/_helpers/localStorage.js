// ======================================================
// Helpers / Local Storage
// ======================================================

import localStorage from "localStorage";

const name = "persistedState";

export const loadState = () => JSON.parse(localStorage.getItem(name));
export const saveState = state => localStorage.setItem(name, JSON.stringify(state));
