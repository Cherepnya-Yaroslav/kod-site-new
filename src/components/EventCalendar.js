import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchData } from '../api/strapi';
import '../styles/components/EventCalendar.css';

const EventCalendar = ({ eventType }) => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [months, setMonths] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [filteredEvents, setFilteredEvents] = useState([]);

  useEffect(() => {
    // Инициализация месяцев (текущий и следующие два)
    const currentDate = new Date();
    const nextMonths = Array.from({ length: 3 }, (_, i) => {
      const date = new Date(currentDate);
      date.setMonth(currentDate.getMonth() + i);
      return date;
    });
    setMonths(nextMonths);
    setSelectedMonth(nextMonths[0]);
  }, []);

  useEffect(() => {
    loadEvents();
  }, [eventType]);

  useEffect(() => {
    if (selectedMonth && events.length > 0) {
      const filtered = events.filter(event => {
        const eventDate = new Date(event.date);
        return eventDate.getMonth() === selectedMonth.getMonth() &&
               eventDate.getFullYear() === selectedMonth.getFullYear();
      });
      setFilteredEvents(filtered);
    }
  }, [selectedMonth, events]);

  const loadEvents = async () => {
    try {
      setLoading(true);
      setError(null);

      if (!eventType || !['kids', 'adults'].includes(eventType)) {
        throw new Error('Invalid event type');
      }

      const startDate = new Date();
      const endDate = new Date();
      endDate.setMonth(endDate.getMonth() + 3);

      const filters = {
        $and: [
          {
            type: {
              $eq: eventType
            }
          },
          {
            date: {
              $gte: startDate.toISOString()
            }
          },
          {
            date: {
              $lte: endDate.toISOString()
            }
          }
        ]
      };

      console.log('Loading events with filters:', JSON.stringify(filters, null, 2));
      const response = await fetchData('events', { 
        filters,
        populate: ['coverImage']
      });
      
      console.log('Raw API response:', JSON.stringify(response, null, 2));
      
      if (response) {
        // Получаем массив событий из ответа
        const eventsArray = Array.isArray(response) ? response : (response.data || []);
        
        // Подробное логирование первого элемента
        if (eventsArray.length > 0) {
          const firstEvent = eventsArray[0];
          console.log('First event raw data:', JSON.stringify(firstEvent, null, 2));
          console.log('First event structure:', {
            id: firstEvent.id,
            title: firstEvent.title,
            date: firstEvent.date,
            coverImage: firstEvent.coverImage
          });
        }
        
        const formattedEvents = eventsArray.map(event => {
          // Проверяем наличие всех необходимых полей
          if (!event || typeof event !== 'object') {
            console.error('Invalid event object:', event);
            return null;
          }

          // Поддержка как трансформированного, так и нетрансформированного ответа
          const eventData = event.attributes || event;
          
          // Проверяем обязательные поля
          if (!eventData.title || !eventData.date) {
            console.error('Event missing required fields:', {
              id: event.id,
              hasTitle: !!eventData.title,
              hasDate: !!eventData.date
            });
            return null;
          }

          const formattedEvent = {
            id: event.id,
            title: eventData.title,
            date: eventData.date,
            shortDescription: eventData.shortDescription || 'Описание отсутствует',
            coverImage: eventData.coverImage?.url 
              ? `${process.env.REACT_APP_STRAPI_URL || 'http://localhost:1337'}${eventData.coverImage.url}`
              : null,
            slug: eventData.slug
          };

          // Добавляем подробное логирование структуры coverImage
          console.log('CoverImage structure:', {
            raw: eventData.coverImage,
            formatted: formattedEvent.coverImage,
            hasUrl: !!eventData.coverImage?.url,
            envUrl: process.env.REACT_APP_STRAPI_URL || 'http://localhost:1337'
          });

          console.log('Successfully formatted event:', formattedEvent);
          return formattedEvent;
        }).filter(Boolean);

        console.log('Final formatted events:', formattedEvents);
        setEvents(formattedEvents);
      } else {
        console.log('No events data in response');
        setEvents([]);
      }
    } catch (err) {
      console.error('Error loading events:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('ru-RU', options);
  };

  const formatMonthYear = (date) => {
    const options = { month: 'long', year: 'numeric' };
    return date.toLocaleDateString('ru-RU', options);
  };

  if (loading) {
    return <div className="calendar-loading">Загрузка событий...</div>;
  }

  if (error) {
    return <div className="calendar-error">Ошибка: {error}</div>;
  }

  return (
    <div className="event-calendar">
      <h1 className="calendar-title">
        {eventType === 'kids' ? 'Детские игры' : 'Взрослые игры'}
      </h1>
      <p className="calendar-subtitle">
        Выберите месяц, чтобы увидеть доступные игры
      </p>

      <div className="calendar-months-selector">
        {months.map((month, index) => (
          <div
            key={index}
            className={`month-selector ${selectedMonth === month ? 'selected' : ''}`}
            onClick={() => setSelectedMonth(month)}
          >
            <h3>{formatMonthYear(month)}</h3>
            <p>
              {events.filter(event => {
                const eventDate = new Date(event.date);
                return eventDate.getMonth() === month.getMonth() &&
                       eventDate.getFullYear() === month.getFullYear();
              }).length} {eventType === 'kids' ? 'игр' : 'игр'}
            </p>
          </div>
        ))}
      </div>

      <div className="selected-month-events">
        <h2 className="selected-month-title">
          Игры в {formatMonthYear(selectedMonth)}
        </h2>

        {filteredEvents.length > 0 ? (
          <div className="events-cards-container">
            {filteredEvents.map(event => (
              <div key={event.id} className="event-card">
                <div className="event-card-image">
                  {event.coverImage ? (
                    <img
                      src={event.coverImage}
                      alt={event.title}
                      className="event-image"
                    />
                  ) : (
                    <div className="event-image-placeholder">
                      Нет изображения
                    </div>
                  )}
                </div>
                <div className="event-card-content">
                  <h3 className="event-title">{event.title}</h3>
                  <p className="event-date">{formatDate(event.date)}</p>
                  <p className="event-description">{event.shortDescription}</p>
                  <Link
                    to={`/events/${event.slug}`}
                    className="event-link"
                  >
                    Подробнее
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="no-events-message">
            В этом месяце нет запланированных игр
          </div>
        )}
      </div>
    </div>
  );
};

export default EventCalendar; 