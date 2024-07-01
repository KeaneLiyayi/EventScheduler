import { useForm, usePage } from '@inertiajs/react';
import React from 'react';

const Edit = () => {
    const { event } = usePage().props;
    const formatDate = (dateTimeString) => {
        const datePart = dateTimeString.split(' ')[0]; // Extracts the date part (YYYY-MM-DD)
        return datePart;
    };


    const { data, setData,patch,  processing } = useForm({
        title: event.title,
        description: event.description,
        start_date: formatDate(event.start_date),
        end_date: formatDate(event.end_date),
        venue: event.venue,
        organisation: event.organisation,
        no_of_attendees: event.no_of_attendees,
        consultant: event.consultant,
    });
    console.log(data.end_date)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(name, value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        patch(route('events.update', {'event': event.id}), data)
    };


    return (
        <div className='max-h-screen'>
            <div className="border bg-white flex flex-col justify-center">
                <div className="border top-0 relative sm:max-w-4xl sm:mx-auto">
                    <div className="relative px-4 py-2 bg-white mx-8 md:mx-0 shadow rounded-3xl my-auto">
                        <div className="max-w-screen mx-auto">
                            <div className="flex items-center space-x-4 border">
                                <div className="h-12 w-14 bg-yellow-200 rounded-full flex flex-shrink-0 justify-center items-center text-yellow-500 text-2xl font-mono">i</div>
                                <div className="block pl-2 font-semibold text-xl self-start text-gray-700">
                                    <h2 className="leading-relaxed">Edit Event</h2>
                                    <p className="text-sm text-gray-500 font-normal leading-relaxed">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                                </div>
                            </div>
                            <form onSubmit={handleSubmit} className="divide-y border divide-gray-200">
                                <div className="py-8 text-base w-full leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                    <div className="flex flex-col">
                                        <label className="leading-loose">Event Title</label>
                                        <input name="title" value={data.title} onChange={handleChange} type="text" className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="Event title" />
                                    </div>

                                    <div className="flex flex-col">
                                        <label className="leading-loose">Event Description</label>
                                        <input name="description" value={data.description} onChange={handleChange} type="text" className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="Optional" />
                                    </div>
                                    <div className="flex flex-col">
                                        <label className="leading-loose">Number of Attendees</label>
                                        <input name="no_of_attendees" value={data.no_of_attendees} onChange={handleChange} type="number" className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="Number of attendees" />
                                    </div>
                                    <div className="flex flex-col">
                                        <label className="leading-loose">Event Consultant</label>
                                        <input name="consultant" value={data.consultant} onChange={handleChange} type="text" className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="Event consultant" />
                                    </div>
                                    <div className="flex flex-col">
                                        <label className="leading-loose">Organisation</label>
                                        <input name="organisation" value={data.organisation} onChange={handleChange} type="text" className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="Organisation" />
                                    </div>
                                    <div className="flex items-center space-x-4">
                                        <div className="flex flex-col">
                                            <label className="leading-loose">Start Date</label>
                                            <input type="date" name="start_date" value={data.start_date} onChange={handleChange} className="pr-4 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="Start date" />
                                        </div>
                                        <div className="flex flex-col">
                                            <label className="leading-loose">End Date</label>
                                            <input type="date" name="end_date" value={data.end_date} onChange={handleChange} className="pr-4 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="End date" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col">
                                        <label className="leading-loose">Event Venue</label>
                                        <select name="venue" value={data.venue} onChange={handleChange} className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="Venue">
                                            <option value="">Select venue</option>
                                            <option value="moot-court">Venue 1</option>
                                            <option value="smart-classes">Venue 2</option>
                                            <option value="board-room">Venue 3</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="pt-4 flex items-center space-x-4">
                                    <button type='button' className="flex justify-center items-center w-full text-gray-900 px-4 py-3 rounded-md focus:outline-none">
                                        <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg> Cancel
                                    </button>
                                    <button type='submit' className="bg-blue-500 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none">Update</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Edit;
