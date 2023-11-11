document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendario');

    var calendar = new FullCalendar.Calendar(calendarEl, {
      plugins: [ 'dayGrid'],
      locale: 'es',
      events: [
            {
                title: 'Slipknot | 17:30hs | Estadio: River',
                start: '2023-11-13',
                end:'2023-11-18'
            },
            {
                title: "Guns N' Roses | 21:00hs | Estadio: River",
                start: '2023-11-29',
                end:'2023-12-03'
            },
            {
                title: "Queen | 16:00hs | Estadio: Morón",
                start: '2023-11-19',
                end:'2023-11-22'
            },
            {
                title: "Artics Monkeys | 19:00hs | Estadio: River",
                start: '2023-11-28',
                end:'2023-12-03'
            },
            {
                title: "Guns N' Roses | 21:00hs | Estadio: Morón",
                start: '2023-12-12',
                end:'2023-12-20'
            },
            {
                title: "Pink Floyd | 23:00hs | Estadio: River",
                start: '2024-01-02',
                end:'2024-01-05'
            },
            {
                title: "Led Zeppelin | 17:00hs | Estadio: Morón",
                start: '2024-01-24',
                end:'2024-01-28'
            },
            {
                title: "Slipknot | 20:00hs | Estadio: Estadio River",
                start: '2023-10-13',
                end:'2023-10-19'
            }
        ]
    }); 

    calendar.render();
  });