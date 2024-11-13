import { FC } from 'react';
import './Item.css';

interface IProps {
    h4: string;
    h3: string;
    books?: number | string | undefined;
    pagesCount: number | string;
}

const Item: FC<IProps> = ({ h4, h3, books, pagesCount }) => {
    return (
        <div className="item">
            <div className="item__info__main">
                <h3>{h3}</h3>
                <h4>{h4}</h4>
            </div>
            <div className="item__info">
                {books !== undefined && (
                    <span>
                        <span className="highlight">{books}</span> книг
                    </span>
                )}
                <span>
                    <span className="highlight">{pagesCount}</span> страниц
                </span>
            </div>
        </div>
    );
};

export default Item;