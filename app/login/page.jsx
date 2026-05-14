'use client';
import { useState } from 'react';

const roles = ['customer', 'deliveryman', 'manager', 'admin'];

export default function LoginPage() {
  const [role, setRole] = useState('customer');
  return <main className='container'><h1>Connexion (mock)</h1><p>Choisissez un rôle pour simuler l’authentification et la redirection.</p><form className='card' action='/api/auth/mock-login' method='post'><input type='hidden' name='role' value={role} /><label>Rôle utilisateur</label><select value={role} onChange={(e)=>setRole(e.target.value)}>{roles.map(r=><option key={r} value={r}>{r}</option>)}</select><button className='btn' type='submit'>Se connecter</button></form></main>;
}
