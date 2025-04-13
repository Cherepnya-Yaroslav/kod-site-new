import axios from 'axios';

// Базовый URL для API Strapi
const API_URL = process.env.REACT_APP_STRAPI_API_URL || 'http://localhost:1337';

console.log('Strapi API URL:', API_URL);

// Создаем экземпляр axios для работы с API
const strapiAPI = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Функция для получения данных из Strapi
export const fetchData = async (endpoint, options = {}) => {
  try {
    // Формируем URL для API запроса
    let url = `/api/${endpoint}`;
    const queryParams = new URLSearchParams();

    // Добавляем populate
    if (options.populate) {
      if (typeof options.populate === 'object' && !Array.isArray(options.populate)) {
        // Если populate - объект, добавляем каждый ключ как отдельный параметр
        Object.keys(options.populate).forEach(key => {
          queryParams.append('populate', key);
        });
        console.log('Processed object populate:', Object.keys(options.populate));
      } else if (Array.isArray(options.populate)) {
        // Если populate - массив строк
        options.populate.forEach(populateOption => {
          queryParams.append('populate', populateOption);
        });
        console.log('Processed array populate:', options.populate);
      } else {
        // Если populate - строка (например, '*')
        queryParams.append('populate', options.populate);
        console.log('Processed string populate:', options.populate);
      }
    } else {
      // Добавляем populate=* по умолчанию, если не указан другой populate
      queryParams.append('populate', '*');
      console.log('Using default populate=*');
    }

    // Добавляем фильтры
    if (options.filters) {
      // Log the incoming filters
      console.log('Incoming filters:', options.filters);
      
      // Ensure filters is an object
      const filters = options.filters;
      
      // Log the processed filters
      console.log('Processed filters:', filters);
      
      queryParams.append('filters', JSON.stringify(filters));
    }

    // Добавляем сортировку
    if (options.sort) {
      if (Array.isArray(options.sort)) {
        options.sort.forEach(sortOption => {
          queryParams.append('sort', sortOption);
        });
      } else {
        queryParams.append('sort', options.sort);
      }
    }

    // Добавляем параметры пагинации (Strapi v4 format)
    if (options.page) {
      queryParams.append('pagination[page]', options.page);
    }
    if (options.pageSize) {
      queryParams.append('pagination[pageSize]', options.pageSize);
    }

    // Добавляем параметры запроса к URL
    const queryString = queryParams.toString();
    if (queryString) {
      url += `?${queryString}`;
    }

    console.log('Making API request to:', url);
    
    const response = await strapiAPI.get(url);
    console.log('API response data:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching data from Strapi:', error);
    if (error.response) {
      console.error('Error status:', error.response.status);
      console.error('Error data:', error.response.data);
    }
    throw error;
  }
};

// Функция для получения одной записи по ID или slug
export const fetchOne = async (endpoint, identifier) => {
  try {
    const response = await strapiAPI.get(`/api/${endpoint}/${identifier}?populate=*`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching ${endpoint} with identifier ${identifier}:`, error);
    throw error;
  }
};

// Функция для получения медиа-файлов
export const getMediaUrl = (media) => {
  if (!media) return null;
  
  // Если media - это объект с атрибутами
  if (media.data && media.data.attributes) {
    return `${API_URL}${media.data.attributes.url}`;
  }
  
  // Если media - это строка с путем
  if (typeof media === 'string') {
    return `${API_URL}${media}`;
  }
  
  return null;
};

export default strapiAPI; 