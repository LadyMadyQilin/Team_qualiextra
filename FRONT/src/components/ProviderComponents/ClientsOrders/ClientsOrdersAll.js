import AccordionOrder from "./AccordionOrder"
import './clientsOrdersAll.scss'

const ClientsOrdersAll = () => {
    return(
    <section className="clientsOrders">
        <h2 className="clientsOrders__title">Les commandes clients</h2>
     <section className="clientsOrders__accordionContainer">
    <AccordionOrder/>
    <AccordionOrder/>
    <AccordionOrder/>
    <AccordionOrder/>
    <AccordionOrder/>
    <AccordionOrder/>
    </section>
    </section>
    )
}
export default ClientsOrdersAll