import React from 'react';

const CarPricesTable = ({ data } : any) => {
  // Convert the data string into an array of objects
  const carPrices = data.split(', ').map((item: any) => {
    const [type, price] = item.split(' $');
    return { type, price: parseInt(price, 10) };
  });

  return (
    <table className="car-prices-table white">
      <thead>
        <tr>
          <th></th>
          <th style={{ padding: '0 8px' }}></th>
        </tr>
      </thead>
      <tbody>
        {carPrices.map((car : any, index : number) => (
          <tr key={index}>
            <td >{car.type}</td>
            <td style={{ padding: '0 12px' }}>${car.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CarPricesTable;
