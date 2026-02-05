"use client";

import { useSession, signIn, signOut } from "next-auth/react";

export default function SignInPage() {
  const { data: session } = useSession();

  if (session) {
    return (
      <div style={{ padding: 24 }}>
        <h2>Signed in as {session.user?.email}</h2>
        <button onClick={() => signOut()} className="btn">Sign out</button>
      </div>
    );
  }

  return (
    <div style={{ padding: 24 }}>
      <h2>Sign in</h2>
      <div style={{ display: 'flex', gap: 12 }}>
        <button onClick={() => signIn('google')} className="btn">Sign in with Google</button>
        <button onClick={() => signIn('discord')} className="btn">Sign in with Discord</button>
      </div>
    </div>
  );
}
