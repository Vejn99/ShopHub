import Image from "next/image";
import styles from "./page.module.css";
import Banner, { BannerInterface } from "@/components/Banner";
import CategoryPicker from "@/components/CategoryPicker";
import FeaturedBlogs from "@/components/FeaturedBlogs";
import FeaturedProducts from "@/components/FeaturedProducts";
import { ProductProps } from "@/components/ProductItem";

async function fetchData(): Promise<BannerInterface> {
  const banner_res = await fetch("http://localhost:5001/banner_content");
  const bannerData = await banner_res.json();

  return bannerData;
}

export default async function Home() {
  const bannerData = await fetchData();
  return (
    <div>
      <Banner preTitle={bannerData.preTitle} title={bannerData.title} />

      <CategoryPicker />

      <FeaturedProducts />

      <FeaturedBlogs />
    </div>
  );
}
