import React from 'react';
import {
  Scheduler,
  MonthView,
  Appointments,
} from '@devexpress/dx-react-scheduler-material-ui';
import { usePage } from '@inertiajs/react';

const Calender = () => {

    const {events} = usePage().props;
    const newEventData = events.map((event) =>({
        startDate: event.start_date,
        endDate: event.end_date,
        title: event.title,

    }));
    console.log(newEventData)

  return (
    <Scheduler data={newEventData}>
    <MonthView />
    <Appointments />
  </Scheduler>
  )
}

export default Calender
