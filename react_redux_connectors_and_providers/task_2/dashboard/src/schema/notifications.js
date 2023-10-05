import React from 'react';
import { normalize, schema } from 'normalizr';
import * as notifications from '../../../../notifications.json';

// define a users schema
const user = new schema.Entity('users');

// define comments schema
const message = new schema.Entity('messages', {}, { idAttribute: 'guid' });

// define notifications schema
const notification = new schema.Entity('notifications', {
  author: user,
  context: message,
});

// normalize the json data for react
const normalizedData = normalize(notifications.default, [notification]);

// getter function for user notifications
export const getAllNotificationsByUser = (userId) => {
  const { notifications, messages } = normalizedData.entities;
  return Object.values(notifications)
    .filter((notification) => notification.author === userId)
    .map((notification) => messages[notification.context]);
};

// normalizes data with created schema
export const notificationsNormalizer = (data) => {
  return normalize(data, [notification]);
};
