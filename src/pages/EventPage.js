import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchData } from '../api/strapi';
import '../styles/pages/EventPage.css';

const EventPage = () => {
  const { slug } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadEvent = async () => {
      try {
        setLoading(true);
        const response = await fetchData('events', {
          filters: {
            slug: {
              $eq: slug
            }
          }
        });
        
        // Получаем массив событий из ответа
        const eventsArray = Array.isArray(response) ? response : (response.data || []);
        
        if (eventsArray.length > 0) {
          const event = eventsArray[0];
          const eventData = event.attributes || event;
          
          // Добавляем подробное логирование структуры coverImage
          console.log('EventPage CoverImage structure:', {
            raw: eventData.coverImage,
            hasUrl: !!eventData.coverImage?.url,
            envUrl: process.env.REACT_APP_STRAPI_URL || 'http://localhost:1337'
          });
          
          setEvent({
            ...eventData,
            id: event.id,
            coverImage: eventData.coverImage 
              ? {
                  ...eventData.coverImage,
                  url: `${process.env.REACT_APP_STRAPI_URL || 'http://localhost:1337'}${eventData.coverImage.url}`
                }
              : null,
            gallery: eventData.gallery?.map(image => ({
              ...image,
              url: `${process.env.REACT_APP_STRAPI_URL || 'http://localhost:1337'}${image.url}`
            })) || []
          });
        } else {
          setError('Событие не найдено');
        }
      } catch (err) {
        setError('Ошибка при загрузке события');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadEvent();
  }, [slug]);

  if (loading) return <div className="event-loading">Загрузка события...</div>;
  if (error) return <div className="event-error">{error}</div>;
  if (!event) return <div className="event-error">Событие не найдено</div>;

  const eventDate = new Date(event.date);
  const formattedDate = eventDate.toLocaleDateString('ru-RU', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  const formattedTime = eventDate.toLocaleTimeString('ru-RU', {
    hour: '2-digit',
    minute: '2-digit'
  });

  const handleRegister = () => {
    // Placeholder for registration/payment functionality
    alert('Функция регистрации/оплаты будет добавлена позже');
  };

  return (
    <div className="event-page">
      <div className="event-header">
        <h1>{event.title}</h1>
        <div className="event-meta">
          <div className="event-datetime">
            <strong>Дата:</strong> {formattedDate}
            <br />
            <strong>Время:</strong> {formattedTime}
          </div>
          <div className="event-location">
            <strong>Место проведения:</strong> {event.location}
          </div>
          <div className="event-duration">
            <strong>Продолжительность:</strong> {event.duration}
          </div>
          <div className="event-type">
            <strong>Тип:</strong> {event.type === 'kids' ? 'Детское мероприятие' : 'Взрослое мероприятие'}
          </div>
        </div>
      </div>

      {event.coverImage && (
        <div className="event-cover">
          <img 
            src={event.coverImage.url}
            alt={event.title}
          />
        </div>
      )}

      <div className="event-content">
        <div className="event-description">
          <h2>Описание</h2>
          <div className="short-description">{event.shortDescription}</div>
          <div className="full-description" dangerouslySetInnerHTML={{ __html: event.fullDescription }} />
        </div>

        {event.gallery && event.gallery.length > 0 && (
          <div className="event-gallery">
            <h2>Галерея</h2>
            <div className="gallery-grid">
              {event.gallery.map((image, index) => (
                <img
                  key={index}
                  src={image.url}
                  alt={`${event.title} - изображение ${index + 1}`}
                />
              ))}
            </div>
          </div>
        )}

        <div className="event-registration">
          <div className="registration-info">
            <div className="event-price">
              <strong>Стоимость:</strong> {event.price} ₽
            </div>
            <div className="event-capacity">
              <strong>Осталось мест:</strong> {event.maxParticipants - event.currentParticipants}
            </div>
          </div>
          <button
            className="register-button"
            onClick={handleRegister}
            disabled={event.currentParticipants >= event.maxParticipants}
          >
            {event.currentParticipants >= event.maxParticipants
              ? 'Мест нет'
              : 'Зарегистрироваться'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventPage; 