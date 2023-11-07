import React from "react"
import * as Accordion from '@radix-ui/react-accordion'
import './style.scss'
import AccordionTrigger from "./AccordionElements/AccordionTrigger"
import AccordionContent from "./AccordionElements/AccordionContent"



const UserResaAccordion = () => {
    return (
        <Accordion.Root className="AccordionRoot" type="single" defaultValue="item-1" collapsible>
            <Accordion.Item className="AccordionItem" value="item-1">
                <AccordionTrigger><p>Date</p><p>Durée</p><p>Adresse</p><p>Mail</p><p>Tél</p></AccordionTrigger>
                <AccordionContent><p>Participants</p><p>Description du service</p><p>Date de réservation</p></AccordionContent>
            </Accordion.Item>
        </Accordion.Root>
    );
}

export default UserResaAccordion
