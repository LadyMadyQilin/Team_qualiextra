import Card from '../Carrousel-top/Card/Card.js';
import './pepitas.scss'

const Pepitas = () =>{
    return(
        <section className='pepites'>
            <h2 className='pepites__title'>Nos <span>pépites</span></h2>
            <div className='pepites__cardContainer'>
            <Card style="card2"/>
            <Card style="card2"/>
            <Card style="card2"/>
            <Card style="card2"/>
            </div>
        </section>
    )
}

export default Pepitas;