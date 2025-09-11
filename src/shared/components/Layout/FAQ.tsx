'use client';

import { Accordion, AccordionItem } from '@heroui/accordion';

export function FAQ() {
  return (
    <Accordion variant='shadow'>
      <AccordionItem key='1' aria-label='Accordion 1' title='Accordion 1'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, autem.
      </AccordionItem>
      <AccordionItem key='2' aria-label='Accordion 2' title='Accordion 2'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, autem.
      </AccordionItem>
      <AccordionItem key='3' aria-label='Accordion 3' title='Accordion 3'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, autem.
      </AccordionItem>
    </Accordion>
  );
}
