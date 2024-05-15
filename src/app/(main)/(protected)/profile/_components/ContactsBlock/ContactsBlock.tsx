import Image from 'next/image';
import * as SC from './ContactsBlock.style';
import { useRef } from 'react';

const ContactsBlock = ({ contacts }: { contacts: string[] }) => {
  const ICON_SIZE = 16;
  const textRef = useRef<HTMLSpanElement[]>([]);

  const handleCopyClick = (index: number) => {
    const text = textRef.current[index].innerText;
    navigator.clipboard.writeText(text);
  };

  return contacts.map((contact, index) => (
    <SC.Contact key={contact} onClick={() => handleCopyClick(index)}>
      <SC.Text ref={(el: HTMLDivElement) => (textRef.current[index] = el)}>{contact}</SC.Text>
      <Image src={'/images/copy.svg'} alt='copy icon' width={ICON_SIZE} height={ICON_SIZE} />
    </SC.Contact>
  ));
};

export default ContactsBlock;
