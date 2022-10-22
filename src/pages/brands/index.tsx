import Head from "@modules/common/components/head"
import { ReactElement } from "react"
import { NextPageWithLayout } from "types/global"
import Layout from "@modules/layout/templates"
import { motion } from "framer-motion"

import { BrandsData } from "../../assets/brandsData"
import Card from "@modules/layout/templates/brand/Card"
import { axiosRequest } from "@lib/axios/Axios"

export async function getStaticProps() {
  const config = {
    "Content-Type": "application/json",
  }
  const res = await axiosRequest(
    "GET",
    "https://aurore-backend.herokuapp.com/store/brand",
    {},
    config
  )
  const brands = res

  return {
    props: {
      brands,
    },
  }
}

const Brands: NextPageWithLayout = ({ brands }: any) => {
  // @NOTE:
  // name, handle, brandImages, description, collections
  console.log("BRANDS: ", brands)

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
        {BrandsData &&
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
          })}
      </div>
    </>
  )
}

Brands.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}

export default Brands
