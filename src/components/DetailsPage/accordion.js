import overviewSectionStyles from './overviewSection.module.scss';
import {useState} from "react";


function RenderAccordion({title, params}) {

    const [isWarrantyOpen, setIsWarrantyOpen] = useState(false);

    const toggleWarranty = () => {
        setIsWarrantyOpen(!isWarrantyOpen);
    };

    return (

        <div
            className={overviewSectionStyles.content_box2}
            onClick={toggleWarranty}
            style={{cursor: 'pointer'}}>
            <div className={overviewSectionStyles.flex_row5}>
                <div className={overviewSectionStyles.info101}>
                    {title}
                </div>
                <img
                    className={overviewSectionStyles.image6}
                    src={isWarrantyOpen
                        ? '/assets/icon-up.svg' // Иконка в раскрытом состоянии
                        : '/assets/icon-down.svg' // Иконка в закрытом состоянии
                    }
                    alt="Toggle warranty information"
                />
            </div>
            <div
                className={`${overviewSectionStyles.deliveryOptions}`}
                style={{
                    display: isWarrantyOpen ? 'flex' : 'none',
                    transition: 'display 0.3s ease-in-out', // Плавный переход
                }}
            >
                {
                    params.map(item => (
                        <div className={overviewSectionStyles.flex_row3}>
                            <div className={overviewSectionStyles.info10}>
                                <p> {item} </p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>

    )
}


export default RenderAccordion;