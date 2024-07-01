import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage } from '@inertiajs/react';
import Index from './Events/CreateEvent';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Dashboard({ auth }) {
    const [currentDate, setCurrentDate] = useState()
    const [daysRemaining, setDaysRemaining] = useState()
    const getCurrentDate = () => {
        const date = new Date();
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero indexed, so we add 1
        const day = String(date.getDate()).padStart(2, '0');

        return `${year}-${month}-${day}`;
    };
    const calculateDaysRemaining = (startDate) => {
        const currentDate = new Date();
        const targetDate = new Date(startDate);

        // Calculate the difference in milliseconds
        const differenceInTime = targetDate - currentDate;

        // Convert milliseconds to days
        const differenceInDays = Math.ceil(differenceInTime / (1000 * 3600 * 24));

        return differenceInDays;
    };


    useEffect(() => {
        setCurrentDate(getCurrentDate());
        setDaysRemaining(calculateDaysRemaining(events[0].start_date));
    })


    const {events} = usePage().props;
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className=" overflow-hidden shadow-sm sm:rounded-lg">
                    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
  <motion.div initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.3 }} className="h-32 rounded-lg bg-white border">
    <div className='w-full flex space-y-4 items-center p-4 flex-col'>
        <div>
            <h2 className='text-2xl font-bold'>Upcoming Events</h2>
        </div>
        <div>
            <p className='font-mono font-black text-4xl text-orange-600'>{events.length}</p>
        </div>
    </div>
  </motion.div>
  <motion.div initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.3 }}  className="h-32 bg-white border rounded-lg bg-gray-200">
    <div className='w-full flex space-y-4 items-center p-4 flex-col'>
        <div>
            <h2 className='text-2xl font-bold'>Next Event In</h2>
        </div>
        <div className='flex items-end text-2xl  bg-neutral rounded-box text-neutral-content space-x-4'>
            <p className='font-mono font-black text-4xl text-orange-600'>{daysRemaining}</p> <span>Days</span>
        </div>
    </div>
  </motion.div>
  <div className="h-32 rounded-lg bg-gray-200"></div>
</div>                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
