import {commissionData} from './commission.data.jsx'

const Commission = () => {

    return(
        <>
        <section>
        <div className="container">
            <div className="commission-wrapper">
                <h3 className="section-title">Commission</h3>
                <p>Commissions depend on specific offers available on the platform. Below is an estimated income that can be earned on our platform.</p>
               
                    
               
            </div>
        </div>
        <div className="commission-items">
            {commissionData.map((el, index) => {
                return (
                    <div key={index} className="commission-item" data-item={el.number}>
                        <p>{el.price}</p>
                        <span>{el.discont}</span>
                        <a href="">Join now</a>
                    </div>
                )
            })}
        </div>
        </section>   
        </>
    )
}

export default Commission;