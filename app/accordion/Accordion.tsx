'use client';

import React, { useState, ReactElement } from 'react';
import styles from './styles.module.scss';

interface IItem {
  header: string | ReactElement;
  content: string | ReactElement;
}

interface IProps {
  items: IItem[]
}

export default function Accordion ({ items }: IProps) {
  const [ activeItemIdx, setActiveItemIdx ] = useState(0);
  const handleAccHeaderClick = (e: React.SyntheticEvent, index: number) => {
    setActiveItemIdx(index);
  };

  return (
    <div className={styles.accordion}>
      {items.map((item: IItem, idx: number) => {
        return (
          <div
            key={idx}
            className={`${styles.accordionItem} ${idx === activeItemIdx ? 'active' : ''}`}
            onClick={(e) => handleAccHeaderClick(e, idx)}
          >
            <div className={styles.accordionItemHeader}>
              {item.header}
              <i className={styles.accordionItemHeaderIcon} />
            </div>
            <div className={styles.accordionItemContentBox}>
              <div className={styles.accordionItemContent}>
                {item.content}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}