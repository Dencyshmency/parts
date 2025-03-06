import {benefitsData} from './benefits.data.jsx'

const Benefits = () => {
    return (
        <>
        <section>
            <div className="container">
                <div className="benefits-wrapper">
                    <h3 className="section-title">Benefits</h3>
                    <div className="benefits-items">
                        {benefitsData.map((item, index) => {
                            return (
                                <div key={index} className='benefits-item'>
                                    <img src={item.img} alt={item.text} />
                                    <p>{item.text}</p>
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