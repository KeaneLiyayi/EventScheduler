import React from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Link, usePage } from '@inertiajs/react';
import { Head } from '@inertiajs/react';


const Events = ({auth}) => {
    const {events} = usePage().props

    const handleClick = (id) => {
        fetch(`/events/${id}/edit`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.error('Error fetching event:', error);
            });
    };

  return (
    <AuthenticatedLayout
    user={auth.user}
    header={<div className='flex items-center justify-between '><h2 className="font-semibold text-xl text-gray-800 leading-tight">Events</h2> <Link href='/events/create'
    className="inline-flex items-center gap-2 rounded border border-indigo-600 bg-indigo-600 px-8 py-3 text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"

  >
    <span className="text-sm font-medium"> Create New Event </span>

    <svg
      className="size-5 rtl:rotate-180"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M17 8l4 4m0 0l-4 4m4-4H3"
      />
    </svg>
  </Link></div>}
>
    <Head title="Events" />

    <div className='px-2 md:px-8'>
         <h1>Events</h1>

                {events&& events.map(event => (
                    <section className="flex mb-2 h-full  bg-white transition hover:shadow-xl">




                    <div className="flex flex-1 flex-col justify-between">
                      <div className="border-s border-gray-900/10  sm:border-l-transparent sm:p-6">
                        <a href="#">
                          <h3 className="font-bold uppercase text-gray-900">
                            {event.description}
                          </h3>
                        </a>

                        <div className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700 flex space-x-4 items-center w-full justify-start">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
</svg>
 <span>{event.venue}</span>
                        </div>
                    <div className="border mt-2 line-clamp-3 text-sm/relaxed text-gray-700 flex space-x-2 items-center w-full justify-start">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
</svg>
<span> {event.start_date}</span>
                        </div>
                      <div className="border w-full sm:flex sm:items-end sm:justify-end">
                        <Link
                          href={`/events/${event.id}/edit`}
                          className="block bg-yellow-300 px-2 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400"
                        >
                          EDIT EVENT
                        </Link>
                      </div>
                      </div>


                    </div>
                  </section>
                ))}

    </div>
</AuthenticatedLayout>


  )
}

export default Events
