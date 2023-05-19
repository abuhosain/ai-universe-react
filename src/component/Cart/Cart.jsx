import React, { useEffect, useState } from 'react';
import SingleData from '../SingleData/SingleData';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
const Cart = () => {
    const [data, setData] = useState([]);
    const [showAll, setShowAll] = useState(false);
    const [singleData,setSingleData] = useState({});
    const [unique, setUnique] = useState(null);
    

    const handleShowAll = () => {
        setShowAll(true);
    }

    const handleSort = () =>{
      const sortedDate = data.sort((a, b) => {
        return new Date(a.published_in) - new Date(b.published_in)
      });
      setData([...data,sortedDate])
    };


    useEffect(() => {
      console.log('hello from use effest')
      fetch(`https://openapi.programming-hero.com/api/ai/tool/${unique
    }`)
      .then((res) => res.json())
      .then((data) => setSingleData(data.data))
    },[unique])

      useEffect(()=>{
        const loadData = async() =>{
            const res = await fetch(`https://openapi.programming-hero.com/api/ai/tools`);
            const value = await res.json();
            // console.log(value.data.tools)
            setData(value.data.tools)
        };
        loadData()
    } ,[])
    // console.log(singleData)
    return (
       <>
       <span onClick={handleSort}>
       <Button>Sort By Date</Button>
       </span>
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:px-12 my-6'>
           {
            data.slice(0, showAll ? 12:6).map((singleData) => {
                // console.log(singleData)
                return <SingleData singleData={singleData}
                 key={singleData.id}
                 setUnique={setUnique}
                 />
            } )
           }
          
        </div>
      {
        !showAll&&  <span  onClick={handleShowAll}>
        <Button>See More</Button>
      </span>
      }
      <Modal singleData={singleData} />
       </>
       
    );
};

export default Cart;