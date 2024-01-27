'use client';

import React, { useState, ReactElement } from 'react';
import styles from './styles.module.scss';

interface IItem {
  header: string | ReactElement;
  content: string | ReactElement;
}

interface IProps {
  items: IItem[]
  onActiveItemChange: (index: number) => void
}

export default function Accordion ({ items, onActiveItemChange = () => {} }: IProps) {
  const [ activeItemIdx, setActiveItemIdx ] = useState<number | null>(0);
  const handleAccHeaderClick = (e: React.SyntheticEvent, index: number) => {
    if (index === activeItemIdx) {
      setActiveItemIdx(null);

      return;
    }

    setActiveItemIdx(index);
    onActiveItemChange(index);
  };

  return (
    <div className={styles.accordion}>
      {items.map((item: IItem, idx: number) => {
        return (
          <div
            key={idx}
            className={`${styles.accordionItem} ${idx === activeItemIdx ? 'active' : ''}`}
          >
            <div
              className={styles.accordionItemHeader}
              onClick={(e) => handleAccHeaderClick(e, idx)}
            >
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