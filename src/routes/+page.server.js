// src/routes/+page.server.js
import { redirect } from '@sveltejs/kit';

export function load() {
  throw redirect(307, '/index.html'); // or /index.html if that's what you meant
}