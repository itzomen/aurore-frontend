/* eslint-disable @next/next/no-img-element */
import React from "react"
import { ReactElement } from "react"
import { NextPageWithLayout } from "types/global"
import Layout from "@modules/layout/templates"
import { useRouter } from "next/router"

// stylesheet
import styles from "./brands.module.css"
import Button from "@modules/common/components/button"
// import { BrandsData } from "../../assets/brandsData"
// import Card from "@modules/layout/templates/brand/Card"
import Tabs from "@modules/layout/templates/tabs/Tabs"
import Tab from "@modules/layout/templates/tabs/Tab"
import { axiosRequest } from "@lib/axios/Axios"
import { medusaClient } from "@lib/config"
import Card from "@modules/layout/templates/brand/Card"

const BrandsPage: NextPageWithLayout = ({ brand }: any) => {
  const router = useRouter()

  console.log(process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL)

  // console.log("BRANDS_DETAILS: ", JSON.stringify(brand, null, 2))

  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
    return <div>Loading...</div>
  }

  return (
    <div className={styles.brands__details}>
      <div className={styles.hero}>
        {brand && (
          <div className={styles.brand__info}>
            <h2>{brand?.name}</h2>
            <h4>{brand?.description}</h4>
            <Button
              style={{
                marginTop: "2rem",
                fontSize: "1.2rem",
                width: "200px",
                borderRadius: "5px",
              }}
            >
              Hey There
            </Button>
          </div>
        )}
        <div className={styles.banner__image}>
          <div>
            <img src="/images/image3.jpg" alt="brand name" />
          </div>
          <div>
            <img src="/images/image1.jpg" alt="brand name" />
          </div>
        </div>
      </div>

      <div className={styles.tabs__container}>
        {brand && (
          <Tabs>
            {brand?.brand_collections.map((collection: any, index: number) => {
              return (
                <Tab key={collection.handle} title={collection.title}>
                  <div className="brands__list">
                    {collection &&
                      collection.products.length > 0 &&
                      collection.products.map((p: any) => (
                        <Card
                          key={index}
                          path={`/product/${p?.thandle}`}
                          brandImage={p?.thumbnail}
                          brandName={p?.title}
                          isProduct={true}
                          price={
                            // get the price from the variant
                            // if variant is not available, then "0.00"
                            p?.variants[0]?.prices[0]?.amount || 0.0
                          }
                        />
                      ))}
                  </div>
                </Tab>
              )
            })}
          </Tabs>
        )}
      </div>
    </div>
  )
}

BrandsPage.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}

export async function getStaticProps(context: any) {
  console.log(process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL)

  const config = {
    "Content-Type": "application/json",
  }
  const res = await axiosRequest(
    "GET",
    `https://aurore-backend.herokuapp.com/store/brands/${context.params.handle}`,
    {},
    config
  )
  // for all data.brand.brand_collections
  // fetch and add products to each collection
  for (let i = 0; i < res?.brand?.brand_collections?.length; i++) {
    const collection = res?.brand?.brand_collections[i]
    const products = await medusaClient.products.list({
      collection_id: [collection.id],
    })
    res.brand.brand_collections[i].products = products.products
  }

  return {
    props: {
      brand: res.brand,
    },
  }
}

export async function getStaticPaths() {
  const config = {
    "Content-Type": "application/json",
  }
  const res = await axiosRequest(
    "GET",
    `https://aurore-backend.herokuapp.com/store/brand`,
    {},
    config
  )
  const data = res
  const paths = data?.brands.map((brand: any) => ({
    params: { handle: brand.handle },
  }))

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: true }
}

export default BrandsPage
