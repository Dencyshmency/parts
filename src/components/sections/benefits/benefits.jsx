import {benefitsData} from './benefits.data.jsx'

const Benefits = () => {
    return (
        <>
        <section>
            <div className="container">
                <div className="benefits-wrapper">
                    <p className="section-title">Benefits</p>
                    <div className="benefits-items">
                        {benefitsData.map((item, index) => {
                            return (
                                <div key={index} className='benefits-item'>
                                    <img src={item.img} alt={item.text} />
                                    <h3>{item.text}</h3>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Benefits