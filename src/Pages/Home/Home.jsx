import HomeFeaturedProducts from './HomeFeaturedProducts/HomeFeaturedProducts';
import HomeFeatures from './HomeFeatures/HomeFeatures';
import HomeInfo from './HomeInfo/HomeInfo';
import Banner from '@/Layout/Banner/Banner';

export default function Home() {
  return (
    <>
      <Banner />
      <HomeInfo />
      <HomeFeaturedProducts />
      <HomeFeatures />
    </>
  );
}
