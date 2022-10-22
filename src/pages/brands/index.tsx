import Head from "@modules/common/components/head"
import { ReactElement, useEffect, useState } from "react"
import { NextPageWithLayout } from "types/global"
import Layout from "@modules/layout/templates"
import { motion } from "framer-motion"

// import { BrandsData } from "../../assets/brandsData"
import Card from "@modules/layout/templates/brand/Card"
import { axiosRequest } from "@lib/axios/Axios"

export async function getStaticProps() {
  const config = {
    "Content-Type": "application/json",
  }
  const res = await axiosRequest(
    "GET",
    `${process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL}/store/brand`,
    {},
    config
  )
  const data = res

  return {
    props: {
      data,
    },
  }
}

const Brands: NextPageWithLayout = ({ data }: any) => {
  // @NOTE:
  // name, handle, brandImages, description, collections
  const [brands, setBrands] = useState([])

  useEffect(() => {
    if (data && data.brands) {
      setBrands(data.brands)
    }
  }, [data])

  return (
    <>
      <Head
        title="Brands Page"
        description="Brands all available models only at the ACME. Worldwide Shipping. Secure Payment."
      />
      <div className="brands">
        <div>
          <motion.h2 animate={{ y: 30 }}>
            Explore The Most Daring Brands.
          </motion.h2>
        </div>
      </div>

      <div style={{ padding: "0 4vw" }} className="brands__list">
        {/* {BrandsData &&
          BrandsData.length > 0 &&
          BrandsData.map((brand, index) => {
            return (
              <Card
                key={index}
                path={`/brand/${brand.brandhandle}`}
                brandImage={brand.brandImage}
                brandName={brand.brandName}
              />
            )
          })} */}
        {brands &&
          brands.length > 0 &&
          brands.map((brand, index) => {
            return (
              <Card
                key={index}
                path={`/brands/${brand?.handle}`}
                brandImage="/images/image1.jpg"
                brandName={brand?.name}
              />
            )
          })}
      </div>
    </>
  )
}

Brands.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}

export default Brands
