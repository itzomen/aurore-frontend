import React from "react"
import { ReactElement } from "react"
import { NextPageWithLayout } from "types/global"
import Layout from "@modules/layout/templates"

// stylesheet
import styles from "./brands.module.css"
import Button from "@modules/common/components/button"
import { BrandsData } from "./brandsData"
import Card from "@modules/layout/templates/brand/Card"
import Tabs from "@modules/layout/templates/tabs/Tabs"
import Tab from "@modules/layout/templates/tabs/Tab"

const BrandsPage: NextPageWithLayout = () => {
  return (
    <div className={styles.brands__details}>
      <div className={styles.hero}>
        <div className={styles.brand__info}>
          <h2>Brand Name Label</h2>
          <h4>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet
            beatae, nostrum placeat in veniam fuga facilis totam aliquam neque
            quod.
          </h4>
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
        <Tabs>
          <Tab title="Category One">
            <div className="brands__list diff">
              {BrandsData &&
                BrandsData.length > 0 &&
                BrandsData.map((brand, index) => {
                  return (
                    <Card
                      key={index}
                      path={`/brand/${brand.brandhandle}`}
                      brandImage={brand.brandImage}
                      brandName={brand.brandName}
                      isProduct={true}
                      price={45}
                    />
                  )
                })}
            </div>
          </Tab>
          <Tab title="Category Two">
            <div></div>
          </Tab>
          <Tab title="Category Three">
            <div></div>
          </Tab>
          <Tab title="Category Four">
            <div></div>
          </Tab>
        </Tabs>
      </div>
    </div>
  )
}

BrandsPage.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}

export default BrandsPage
