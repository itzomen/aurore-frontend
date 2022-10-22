import React, { useEffect, useRef, useState } from "react"
import { useInView } from "framer-motion"
import Link from "next/link"

// stylesheet
import styles from "./card.module.css"
import NewTab from "@modules/common/icons/new-tab"

type Props = {
  brandName: string
  brandImage: string
  path: string
  isProduct?: boolean
  price?: number
}

const Card = ({ brandName, brandImage, price, path, isProduct }: Props) => {
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
      <div className={`${isProduct ? styles.spaced : ""}`}>
        <h2>{brandName}</h2>
        {isProduct === true && <h2>${price}</h2>}
      </div>
    </div>
  )
}

export default Card
