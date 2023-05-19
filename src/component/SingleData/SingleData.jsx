import React from 'react';

const SingleData = (props) => {
    const {id, image, features, published_in, name} = props.singleData;
    
    const handleId = (id) => {
        console.log(id)
    }
    return (
        <div>
            <div className="card w-full bg-base-100 h-full shadow-2xl">
                <figure><img className='w-full h-64' src={image} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title font-bold">Featurse</h2>
                        {
                           features.map((feature,index) => <p>{index + 1}.{feature}</p>)
                        }

                        <hr className="border-info" />

                        <h1 className='font-bold text-3xl'>{name}</h1>
                       <div className='flex justify-between'>
                       <div className='flex'>
                            <span className='mr-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
</svg>
                            </span>
                            <p>{published_in}</p>
                        </div>
                        <div>
                            <label onClick={() => props.setUnique(id)} htmlFor="my-modal-5" className='cursor-pointer'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
</svg>

                            </label>
                           
                        </div>
                       </div>
                          {/* <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
            </div> */}
        </div>
    </div>
        </div>
    );
};

export default SingleData;