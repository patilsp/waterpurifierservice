import React from 'react'

function Service() {
  return (
    <div>
           <section className="mt-40 pb-20 py-10 relative bg-gray-200">
    
    <div className="justify-center text-center flex flex-wrap py-8">
        <div className="w-full md:w-6/12 px-12 md:px-4"><h2 className="font-semibold text-4xl">Why Use FAVR?</h2>
            <p className="text-lg leading-relaxed mt-4 mb-4 text-gray-600">
                Learn all the reasons why you should be using FAVR
            </p>
        </div>
    </div>

    <div className="container mx-auto px-4 py-8">
        <div className="items-center flex flex-col md:flex-row">
            <div className="w-full md:w-4/12 mr-auto px-4 md:pt-0 my-0">
                {/* image */}
            </div>
            <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                <div className="md:pr-4">
                    <div
                            className="text-red-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white"
                    >
                        <i className="fas fa-rocket text-xl"></i>
                    </div>
                    <h3 className="text-3xl font-semibold">Rocket Speed Service</h3>
                    <p className="mt-4 text-lg leading-relaxed text-gray-600">
                        Request a job and have your service done in a matter of hours and not days.
                    </p>
                </div>
            </div>
        </div>
    </div>

    <div className="container mx-auto px-4 py-8">
        <div className="items-center flex flex-col md:flex-row-reverse">
            <div className="w-full md:w-4/12 mr-auto px-4 md:pt-0 my-0">
               {/* image */}
            </div>
            <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                <div className="md:pr-4">
                    <div
                            className="text-red-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white"
                    >
                        <i className="fas fa-chart-line text-xl"></i>
                    </div>
                    <h3 className="text-3xl font-semibold">Increased Productivity</h3>
                    <p className="mt-4 text-lg leading-relaxed text-gray-600">
                        With chores out of your way, you can now focus on the important things such
                        as work, family or just being able to relax.
                    </p>
                </div>
            </div>
        </div>
    </div>

    <div className="container mx-auto px-4 py-8">
        <div className="items-center flex flex-col md:flex-row">
            <div className="w-full md:w-4/12 mr-auto px-4 md:pt-0 my-0">
                {/* image */}
            </div>
            <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                <div className="md:pr-4">
                    <div
                            className="text-red-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white"
                    >
                        <i className="fas fa-dollar-sign text-xl"></i>
                    </div>
                    <h3 className="text-3xl font-semibold">Ultimate Pricing</h3>
                    <p className="mt-4 text-lg leading-relaxed text-gray-600">
                        We flip the script and allow you to set
                        price of your requested job. Unlike other
                        platforms like Takl that have preset prices.
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>
      
    </div>
  )
}

export default Service
