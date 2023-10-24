import { useState } from 'react'
import { shortList, list, longList } from './data'
import { FaQuoteRight } from 'react-icons/fa';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const Carousel = () => {
  const [customers, setCustomers] = useState(list);
  const [currentCustomer, setCurrentCustomer] = useState(0);

  const prevSlide = () => {
    setCurrentCustomer((previousCustomer) => {
      const result = (previousCustomer - 1 + customers.length) % customers.length;
      console.log(result);
      return result;
    });
  };

  const nextSlide = () => {
    setCurrentCustomer((previousCustomer) => {
      const result = (previousCustomer + 1) % customers.length;
      console.log(result);
      return result;
    });
  };

  return (
    <div className='main'>

      {customers.map((customer, index) => {
        const { id, image, name, title, quote } = customer;
        return (
          <div className='slider'
            key={id}
            style={{ transform: `translateX(${100 * (index - currentCustomer)}%)` }}
          >
            <img src={image} className='customer-img' alt={name} />
            <h5 className='customer-name'>{name}</h5>
            <p className='customer-title'>{title}</p>
            <p className='customer-quote'>{quote}</p>
            <FaQuoteRight className="quote-icon" />
          </div>
        )
      })}

      <button type='button' className='prev-btn' onClick={prevSlide}>
        <FiChevronLeft />
      </button>
      <button type='button' className='next-btn' onClick={nextSlide}>
        <FiChevronRight />
      </button>
    </div>
  );
}

export default Carousel;