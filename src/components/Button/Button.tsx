import { ReactNode } from 'react';
import clsx from 'clsx';
import styles from './Button.module.scss';

type ButtonProps = {
    children: ReactNode;
    variant?: 'primary' | 'secondary';
    size?: 'small' | 'medium' | 'large';
    textTransform?: 'lowercase' | 'uppercase' | 'capitalize';
};
const Button = ({ children, variant = 'primary', size, textTransform }: ButtonProps) => {
    const classes = clsx(styles.button, styles[variant], {
        [styles.small]: size === 'small',
        [styles.large]: size === 'large',
        [styles.lowercase]: textTransform === 'lowercase',
        [styles.uppercase]: textTransform === 'uppercase',
        [styles.capitalize]: textTransform === 'capitalize',
    });

    return <button className={classes}>{children}</button>;
};

export default Button;
