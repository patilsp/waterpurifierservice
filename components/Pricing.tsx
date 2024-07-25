import React from 'react';

function Pricing() {
  return (
    <section>
        <div className="mt-10 grid gap-10 px-8 py-10 text-zinc-800 lg:grid-cols-3">
        <div className="flex max-w-sm flex-col items-center rounded-lg bg-slate-100 p-8 shadow-lg">
            <div>
            <h2 className="mb-2 text-center text-3xl font-extrabold">Starter</h2>
            <p className="text-center opacity-60">For individuals and small teams</p>
            <div className="my-8 flex flex-col items-center">
                <p className="text-4xl font-extrabold">$299</p>
                <p className="text-sm opacity-60">/month</p>
            </div>
            </div>
            <div className="flex flex-col gap-1">
            <p className="flex items-center text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="mr-2 size-4">
                <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clipRule="evenodd"></path>
                </svg>
                <b>Trending Dashboard</b>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-4 h-4 ml-1 fill-orange-300">
                <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm11.378-3.917c-.89-.777-2.366-.777-3.255 0a.75.75 0 01-.988-1.129c1.454-1.272 3.776-1.272 5.23 0 1.513 1.324 1.513 3.518 0 4.842a3.75 3.75 0 01-.837.552c-.676.328-1.028.774-1.028 1.152v.75a.75.75 0 01-1.5 0v-.75c0-1.279 1.06-2.107 1.875-2.502.182-.088.351-.199.503-.331.83-.727.83-1.857 0-2.584zM12 18a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd"></path>
                </svg>
            </p>
            <p className="flex items-center text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="mr-2 size-4">
                <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clipRule="evenodd"></path>
                </svg>
                <b>10 Keywords</b>
            </p>
            <p className="flex items-center text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="mr-2 size-4">
                <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clipRule="evenodd"></path>
                </svg>
                <b>100 Accounts Tracking</b>
            </p>
            <p className="flex items-center text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="mr-2 size-4">
                <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clipRule="evenodd"></path>
                </svg>
                <b>3 Users</b>
            </p>
            <p className="flex items-center text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="mr-2 size-4">
                <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clipRule="evenodd"></path>
                </svg>
                <b>Basic Support</b>
            </p>
            <div className="mt-8 flex justify-center">
                <button className="rounded-md border px-4 py-3 font-semibold text-slate-900 hover:bg-gradient-to-r hover:from-orange-400 hover:to-red-400 hover:text-white hover:opacity-80">Get Started</button>
            </div>
            </div>
        </div>

        <div className="relative flex max-w-sm flex-col items-center rounded-lg border-8 border-orange-200 bg-gradient-to-br from-blue-100 via-orange-100 to-purple-100 p-8 shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="absolute -left-11 -top-11 size-20 fill-red-400">
            <path fillRule="evenodd" d="M12.963 2.286a.75.75 0 00-1.071-.136 9.742 9.742 0 00-3.539 6.177A7.547 7.547 0 016.648 6.61a.75.75 0 00-1.152-.082A9 9 0 1015.68 4.534a7.46 7.46 0 01-2.717-2.248zM15.75 14.25a3.75 3.75 0 11-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 011.925-3.195c.377-.347.755-.68 1.161-.99a3.76 3.76 0 011.94-.623z" clipRule="evenodd"></path>
            </svg>
            <h2 className="mb-2 text-center text-3xl font-extrabold">Advance</h2>
            <p className="text-center opacity-60">For growing teams and businesses</p>
            <div className="my-8 flex flex-col items-center">
            <p className="text-4xl font-extrabold">$599</p>
            <p className="text-sm opacity-60">/month</p>
            </div>
            <div className="flex flex-col gap-1">
            <p className="flex items-center text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="mr-2 size-4">
                <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clipRule="evenodd"></path>
                </svg>
                <b>Premium Dashboard</b>
            </p>
            <p className="flex items-center text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="mr-2 size-4">
                <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clipRule="evenodd"></path>
                </svg>
                <b>25 Keywords</b>
            </p>
            <p className="flex items-center text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="mr-2 size-4">
                <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clipRule="evenodd"></path>
                </svg>
                <b>500 Accounts Tracking</b>
            </p>
            <p className="flex items-center text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="mr-2 size-4">
                <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clipRule="evenodd"></path>
                </svg>
                <b>Unlimited Users</b>
            </p>
            <p className="flex items-center text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="mr-2 size-4">
                <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clipRule="evenodd"></path>
                </svg>
                <b>Premium Support</b>
            </p>
            <div className="mt-8 flex justify-center">
                <button className="rounded border px-4 py-3 hover:bg-gradient-to-r hover:from-orange-400 hover:to-red-400 hover:text-white hover:opacity-80">Get Started</button>
            </div>
            </div>
        </div>

        <div className="flex max-w-sm flex-col items-center rounded-lg bg-slate-100 p-8 shadow-lg">
            <div>
            <h2 className="mb-2 text-center text-3xl font-extrabold">Enterprise</h2>
            <p className="text-center opacity-60">For large teams and organizations</p>
            <div className="my-8 flex flex-col items-center">
                <p className="text-4xl font-extrabold">$99</p>
                <p className="text-sm opacity-60">/month</p>
            </div>
            </div>
            <div className="flex flex-col gap-1">
            <p className="flex items-center text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="mr-2 size-4">
                <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clipRule="evenodd"></path>
                </svg>
                <b>Custom Dashboard</b>
            </p>
            <p className="flex items-center text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="mr-2 size-4">
                <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clipRule="evenodd"></path>
                </svg>
                <b>Unlimited Keywords</b>
            </p>
            <p className="flex items-center text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="mr-2 size-4">
                <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clipRule="evenodd"></path>
                </svg>
                <b>Unlimited Accounts Tracking</b>
            </p>
            <p className="flex items-center text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="mr-2 size-4">
                <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clipRule="evenodd"></path>
                </svg>
                <b>Unlimited Users</b>
            </p>
            <p className="flex items-center text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="mr-2 size-4">
                <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clipRule="evenodd"></path>
                </svg>
                <b>Dedicated Support</b>
            </p>
            <div className="mt-8 flex justify-center">
                <button className="rounded-md border px-4 py-3 font-semibold text-slate-900 hover:bg-gradient-to-r hover:from-orange-400 hover:to-red-400 hover:text-white hover:opacity-80">Contact Us</button>
            </div>
            </div>
        </div>
        </div>
    </section>
  )
}
export default Pricing