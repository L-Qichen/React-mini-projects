import { useState } from 'react'
import { shortList, list, longList } from './data'
import { FaQuoteRight } from 'react-icons/fa';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const Carousel = () => {
  const [customers, setCustomers] = useState(shortList);

  return (
    <div className='main'>
      {customers.map((customer) => {
        const { id, image, name, title, quote } = customer;
        return (
          <div className='slider' key={id}>
            <img src={image} className='customer-img' alt={name} />
            <h5 className='customer-name'>{name}</h5>
            <p className='customer-title'>{title}</p>
            <p className='customer-quote'>{quote}</p>
            <FaQuoteRight className="quote-icon" />
          </div>
        )
      })}
    </div>
  );
}

export default Carousel;