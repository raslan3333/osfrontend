import React from 'react';

const OsFooter = () => {

    return (
        <div>
            <div className="absolute bottom-0 w-full">
                <div className="flex justify-center w-screen p-5 bg-blueGray-600" >
                    <div className='w-screen lg:max-w-screen-2xl' >
                        <div className="flex flex-row  justify-between text-white text-xl">
                            <div >
                                <p >Disc</p>
                                <ul className='text-base'>
                                    <li>List item 1</li>
                                    <li>List item 2</li>
                                    <li>List item 3</li>
                                </ul>
                            </div>
                            <div >
                                <p>Circle</p>
                                <ul className='text-base'>
                                    <li>List item 1</li>
                                    <li>List item 2</li>
                                    <li>List item 3</li>
                                </ul>
                            </div>
                            <div >
                                <p>Square</p>
                                <ul className='text-base'>
                                    <li>List item 1</li>
                                    <li>List item 2</li>
                                    <li>List item 3</li>
                                </ul>
                            </div>
                            <div>
                                <p>Decimal</p>
                                <ul className='text-base'>
                                    <li>List item 1</li>
                                    <li>List item 2</li>
                                    <li>List item 3</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid justify-center  p-3 bg-blueGray-600" >
                    <div className='w-screen' >
                        <div className='border-b-2 border-white m-3'></div>
                        <div className='text-center text-white'>Conditions of Use & Sale    Privacy Notice    Imprint    Cookies Notice    Interest-Based Ads Notice    ©Online Shop</div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default OsFooter;
