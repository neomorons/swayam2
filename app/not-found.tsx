import { redirect } from 'next/navigation';

export default function NotFound() {
  redirect('https://internalapp.nptel.ac.in/noc');
}
