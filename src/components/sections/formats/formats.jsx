import {FormatsData} from './formats.data.jsx'

const Formats = () => {
    return (
        <>
        <section>
            <div className="container">
                <div className="formats-wrapper">
                    <h3 className="section-title">Ad Formats</h3>
                    <div className="formats-items">
                        {FormatsData.map((item, index) => {
                            const className = index === 0 || index === 1 ? 'formats-item large-formats-item' : 'formats-item'; 
                            const classNameMobile = [0, 1, 2, 4].includes(index) ? 'formats-item large-formats-item-mobile' : '';  
                            const classNameFull = `${className} ${classNameMobile}`
                            return (
                            <div key={item.title} className={classNameFull}>
                                <h5>{item.title}</h5>
                                <p>{item.subTitle}</p>
                                <ul>
                                    {item.list.map((el, index) => {
                                        return (
                                        <li key={index}>{el}</li>  
                                        )
                                    })}
                                </ul>
                                <picture>
                                    <source media="(max-width: 768px)" srcSet={item.imgs.mobile} />
                                    {item.imgs.tablet2 && (  
                                    <source media="(max-width: 1024px)" srcSet={item.imgs.tablet2} />  
                                    )}
                                    <source media="(max-width: 1200px)" srcSet={item.imgs.tablet} />
                                    <img src={item.imgs.desktop} alt={item.title} />
                                </picture>
                            </div>
                        )})}
                    </div>
                </div>
            </div>
        </section>
        </>
    )

}

export default Formats;