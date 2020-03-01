import React from "react"
import cls from "classnames"
import PropTypes from "prop-types"

import styles from "./ServiceBlock.module.scss"

const ServiceBlock = ({ title, summary }) => {
  return (
    <div className={cls(styles.serviceBlock, summary && styles.animated)}>
      <header className={cls(styles.header, summary && styles.withSummary)}>
        {title}
      </header>
      {summary && <p className={cls(styles.summary)}>{summary}</p>}
    </div>
  )
}

ServiceBlock.propTypes = {
  title: PropTypes.string,
  summary: PropTypes.string,
}

export default ServiceBlock
