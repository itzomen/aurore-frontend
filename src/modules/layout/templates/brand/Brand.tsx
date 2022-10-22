import React, { useEffect, useRef, useState } from "react"
import { useInView } from "framer-motion"
import Link from "next/link"

// stylesheet
import styles from "./brand.module.css"
import NewTab from "@modules/common/icons/new-tab"

type Props = {
  brandName: string
  brandImage: string
  path: string
}

const Brand = ({ brandName, brandImage, path }: Props) => {
  const ref = useRef(null)
  const isInView = useInView(ref)

  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    if (isInView) {
      setAnimate(true)
    } else {
      setAnimate(false)
    }
  }, [isInView])

  return (
    <div
      ref={ref}
      className={`${styles.brand} ${animate ? styles.animate : ""}`}
    >
      <div className={styles.image}>
        <img src={brandImage} alt={brandName} />
        <div className={styles.icon}>
          <Link href={path}>
            <a>
              <NewTab style={{ width: "30px" }} />
            </a>
          </Link>
        </div>
      </div>
      <h2>{brandName}</h2>
    </div>
  )
}

export default Brand
