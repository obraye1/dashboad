import BarCharts from '@/components/BarCharts';
import Header from '@/components/Header';
import RecentOrders from '@/components/RecentOrders';
import TopCards from '@/components/TopCards';
import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Head>
        <title>Dashboard UI</title>
        <meta name="description" content="Dashboard for user Expense" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-gray-100 min-h-screen">
        <Header />
        <TopCards />
        <div className="grid md:grid-cols-3 p-4 grid-cols-1 gap-4">
          <BarCharts />
          <RecentOrders />
        </div>
      </main>
    </>
  );
}
