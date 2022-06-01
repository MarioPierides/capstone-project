import Title from '../components/Header';
import Link from 'next/link';
import Navbar from '../components/Navbar';

export default function Meetings() {
  return (
    <>
      <Title>Deine Meetings</Title>
      <Link passHref href="/meetings">
        <a></a>
      </Link>
      <Navbar></Navbar>
    </>
  );
}
