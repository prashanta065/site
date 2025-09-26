import { NextResponse } from 'next/server';

// Simple pass-through middleware to satisfy Next.js loader
export function middleware(request) {
  return NextResponse.next();
}