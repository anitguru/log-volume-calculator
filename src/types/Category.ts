// src/types/Category.ts
import type { Device } from "./Device";

export interface Category {
  id: string; // e.g. "infrastructure"
  name: string; // e.g. "Infrastructure"
  devices: Device[];
}
