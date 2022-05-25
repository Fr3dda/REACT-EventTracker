let nextEventId = 0;

export const addEvent = text => ({
    type: 'ADD_EVENT',
    id: nextEventId++,
    complete: false,
    text
});
