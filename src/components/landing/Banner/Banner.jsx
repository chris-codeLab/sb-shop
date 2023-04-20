import Link from 'next/link';

export const Banner = () => {
  return (
    <>
      {/* <!-- BEGIN MAIN BLOCK --> */}
      <div className='main-block load-bg'>
        <div className='wrapper'>
          <div className='main-block__content'>
            <span className='saint-text'>Shielded Beauty</span>
            <h1 className='main-text'>Safeguard 
            your skin.</h1>
            <p>
            From impurities and balance your microbiome 
            with our patent-pending Guardian Complex
            </p>

            <Link href='/shop'>
              <a className='btn'>Shop now</a>
            </Link>
          </div>
        </div>
        <img
          className='main-block__decor'
          src='/assets/img/main-block-decor.png'
          alt=''
         
        />
      </div>
      {/* <!-- MAIN BLOCK EOF --> */}
    </>
  );
};
