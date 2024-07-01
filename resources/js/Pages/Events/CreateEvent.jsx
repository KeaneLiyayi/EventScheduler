import { useForm } from '@inertiajs/react';
import React, { useState } from 'react'

const CreateEvent = () => {


    const {data, setData , post ,processing } = useForm({
        title: '',
        description: '',
        start_date: '',
        end_date: '',
        venue: '',
        organisation: '',
        no_of_attendees: '',
        consultant: '',
    })

    const handleChange = (e)=>{
        e.preventDefault();
        const {name, value} = e.target;
        setData(name,value);
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        post('/events/store', data);
    }


  return (
    <div className='max-h-screen  '>
        <div class=" border bg-white  flex flex-col justify-center ">
  <div class="border top-0 relative  sm:max-w-4xl sm:mx-auto">
    <div class="relative px-4 py-2 bg-white mx-8 md:mx-0 shadow rounded-3xl my-auto">
      <div class="max-w-screen mx-auto">
        <div class="flex items-center space-x-4 border">
          <div class="h-12 w-14 bg-yellow-200 rounded-full flex flex-shrink-0 justify-center items-center text-yellow-500 text-2xl font-mono">i</div>
          <div class="block pl-2 font-semibold text-xl self-start text-gray-700">
            <h2 class="leading-relaxed">Create an Event</h2>
            <p class="text-sm text-gray-500 font-normal leading-relaxed">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
        <form onSubmit={handleSubmit} class="divide-y border  divide-gray-200">
          <div class="py-8 text-base w-full leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
            <div class="flex flex-col">
              <label class="leading-loose">Event Title</label>
              <input name="title" value={data.title} onChange={handleChange} type="text" class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="Event title"/>
            </div>

            <div class="flex flex-col">
              <label class="leading-loose">Event Description</label>
              <input name="description" value={data.name} onChange={handleChange} type="text" class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="Optional"/>
            </div>
            <div class="flex flex-col">
              <label class="leading-loose">Number of Attendess</label>
              <input name="no_of_attendees" value={data.name} onChange={handleChange} type="number" class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="Event title"/>
            </div>
            <div class="flex flex-col">
              <label class="leading-loose">Event Consultant</label>
              <input name="consultant" value={data.name} onChange={handleChange} type="text" class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="Event title"/>
            </div>
            <div class="flex flex-col">
              <label class="leading-loose">Organistion</label>
              <input name="organisation" value={data.name} onChange={handleChange} type="text" class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="Event title"/>
            </div>
            <div class="flex items-center space-x-4">
              <div class="flex flex-col">
                <label class="leading-loose">Start</label>
                <div class="relative focus-within:text-gray-600 text-gray-400">
                  <input type="date"  name="start_date" value={data.name} onChange={handleChange} class="pr-4 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="25/02/2020"/>
                  <div class="absolute left-3 top-2">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                  </div>
                </div>
              </div>
              <div class="flex flex-col">
                <label class="leading-loose">End</label>
                <div class="relative focus-within:text-gray-600 text-gray-400">
                  <input type="date"  name="end_date" value={data.name} onChange={handleChange} class="pr-4 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="26/02/2020"/>
                  <div class="absolute left-3 top-2">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex flex-col">
              <label class="leading-loose">Event Venue</label>
              <select  name="venue" value={data.name} onChange={handleChange} type="text" class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="Optional">
                <option value="">Select venue</option>
                <option value="moot-court">Venue 1</option>
                <option value="smart-classes">Venue 2</option>
                <option value="board-room">Venue 3</option>

              </select>
            </div>
          </div>
          <div class="pt-4 flex items-center space-x-4">
              <button class="flex justify-center items-center w-full text-gray-900 px-4 py-3 rounded-md focus:outline-none">
                <svg class="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg> Cancel
              </button>
              <button type='submit' class="bg-blue-500 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none">Create</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default CreateEvent
