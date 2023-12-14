import { ADVERTISEMENT_LIMIT } from '../../constants';
import { advertisementCard } from '../../modals/modal';
import { formatNumberTwoDigits } from '../../utils/format.utils';
import styles from './AdvertisementCard.module.scss';

export const defaultProps = {
    imageUrl: '',
    alt: '',
    limit: 0,
    title: '',
    size: '',
};

/**
 * @description component to show advertisement card
 * @param props
 * @returns return return advertisement card
 */
const AdvertisementCard = ({
    imageUrl,
    alt,
    limit,
    title,
    size,
}: advertisementCard) => {
    const { ADVERTISEMENT, LABEL } = ADVERTISEMENT_LIMIT;
    const classNames = `${styles[size + ADVERTISEMENT]}`;
    return (
        <div>
            <div className={`${styles.advertisementWrapper} ${classNames}`}>
                <img src={imageUrl} alt={alt} />
            </div>
            {title && <p className={styles.title}>{title}</p>}
            {
                <span className={styles.adLabel}>{`${LABEL}${formatNumberTwoDigits(
                    limit,
                )}`}</span>
            }
        </div>
    );
};

export default AdvertisementCard;
