<?php

namespace App\Http\Controllers;

use App\Models\Event;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Log;

class EventController extends Controller
{
    public function calender()
    {
        $events = Event::all();
        return Inertia::render('Calender', ['events' => $events]);
    }
    public function dashboard()
    {
        $events = Event::all();
        return Inertia::render('Dashboard', ['events' => $events]);
    }
    public function index()
    {

        $events = Event::all();
        Log::info('Fetched events:', $events->toArray());
        return Inertia::render('Events', [
            'events' => $events,
        ]);
    }
    public function create()
    {
        return Inertia::render('Events/CreateEvent');
    }
    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => ['required', 'string', 'max:255'],
            'description' => ['required', 'string'],
            'start_date' => ['required', 'date'],
            'end_date' => ['required', 'date', 'after:start_date'],
            'no_of_attendees' => ['required', 'integer'],
            'venue' => ['required', 'string'],
            'consultant' => ['required', 'string'],
            'organisation' => ['required', 'string'],
        ]);

        Event::create($validated);

        return redirect()->route('dashboard');
    }
    public function edit(Event $event)
    {
        return Inertia::render('Events/Edit', [
            'event' => $event
        ]);
    }
    public function update(Request $request, Event $event)

    {
        $validated = $request->validate([
            'title' => ['required', 'string', 'max:255'],
            'description' => ['required', 'string'],
            'start_date' => ['required', 'date'],
            'end_date' => ['required', 'date', 'after:start_date'],
            'no_of_attendees' => ['required', 'integer'],
            'venue' => ['required', 'string'],
            'consultant' => ['required', 'string'],
            'organisation' => ['required', 'string'],
        ]);

        $event->update($validated);

        return redirect()->route('dashboard');
    }
    public function destroy()
    {
    }
}
