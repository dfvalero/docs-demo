import { ReactNode } from 'react';
import styles from './Box.module.scss';

type BoxProps = {
    children: ReactNode;
};

const Box = ({ children }: BoxProps) => {
    return <div className={styles.box}>{children}</div>;
};

export default Box;
