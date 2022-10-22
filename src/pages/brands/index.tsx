import Head from "@modules/common/components/head"
import { ReactElement } from "react"
import { NextPageWithLayout } from "types/global"
import Layout from "@modules/layout/templates"
import { motion } from "framer-motion"

import { BrandsData } from "../../assets/brandsData"
import Card from "@modules/layout/templates/brand/Card"

const Brands: NextPageWithLayout = () => {
  // @NOTE:
  // name, handle, brandImages, description, collections
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

      <div className="brands__list">
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
